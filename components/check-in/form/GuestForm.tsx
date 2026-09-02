import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SearchSelect } from '@/components/check-in/ui/SearchSelect';
import {
  ITALY_CODE,
  findNationByIso3,
  loadComuni,
  loadDocumentTypes,
  loadNations,
  getComuniCache,
  searchComuni,
  searchIssuePlaces,
  searchNations,
  type ComuneEntry,
  type DocumentTypeEntry,
  type NationEntry,
} from '@/lib/check-in/lookup/alloggiatiTables';
import { guestNeedsDocumentFields } from '@/lib/check-in/guestFields';
import { documentTypeFromMrz } from '@/lib/check-in/documentTypeFromMrz';
import { toast } from '@/lib/check-in/useToast';
import type { GuestRecord, GuestType, MrzExtractedData, MrzReviewField } from '@/types/check-in';
import styles from './GuestForm.module.css';

interface GuestFormProps {
  initialData?: Partial<MrzExtractedData>;
  onSubmit: (guest: Omit<GuestRecord, 'id' | 'hotelAccountId'>) => void;
  onBack: () => void;
  saving?: boolean;
}

const GUEST_TYPES: GuestType[] = ['single', 'head_family', 'head_group', 'family', 'group'];

function buildFormState(initialData?: Partial<MrzExtractedData>) {
  const today = new Date().toISOString().slice(0, 10);
  const sexFromMrz =
    initialData?.sex === 'F' ? 'F' : initialData?.sex === 'M' ? 'M' : ('' as '' | 'M' | 'F');
  return {
    guestType: 'single' as GuestType,
    arrivalDate: today,
    stayDays: 1,
    surname: initialData?.surname ?? '',
    givenNames: initialData?.givenNames ?? '',
    sex: sexFromMrz,
    birthDate: initialData?.birthDate ?? '',
    birthMunicipalityCode: '',
    birthProvinceCode: '',
    birthCountryCode: '',
    citizenshipCode: '',
    documentTypeCode: documentTypeFromMrz(initialData?.documentType, initialData?.nationality),
    documentNumber: initialData?.documentNumber ?? '',
    documentIssuePlaceCode: '',
  };
}

export function GuestForm({ initialData, onSubmit, onBack, saving }: GuestFormProps) {
  const { t } = useTranslation();

  const [nations, setNations] = useState<NationEntry[]>([]);
  const [comuniReady, setComuniReady] = useState(false);
  const [documentTypes, setDocumentTypes] = useState<DocumentTypeEntry[]>([]);

  const [nationQuery, setNationQuery] = useState('');
  const [comuneQuery, setComuneQuery] = useState('');
  const [citizenshipQuery, setCitizenshipQuery] = useState('');
  const [docPlaceQuery, setDocPlaceQuery] = useState('');

  const [form, setForm] = useState(() => buildFormState(initialData));

  useEffect(() => {
    setForm(buildFormState(initialData));
  }, [initialData]);

  useEffect(() => {
    let cancelled = false;

    void Promise.all([loadNations(), loadDocumentTypes()]).then(([n, d]) => {
      if (cancelled) return;
      setNations(n);
      setDocumentTypes(d);

      if (!initialData?.nationality) return;
      const nation = findNationByIso3(n, initialData.nationality);
      if (!nation) return;

      setForm((prev) => ({
        ...prev,
        birthCountryCode: prev.birthCountryCode || nation.code,
        citizenshipCode: prev.citizenshipCode || nation.code,
      }));
    });

    // Defer ~800KB comuni table until after first paint (mobile memory after OCR).
    const comuniTimer = window.setTimeout(() => {
      void loadComuni().then(() => {
        if (!cancelled) setComuniReady(true);
      });
    }, 100);

    return () => {
      cancelled = true;
      window.clearTimeout(comuniTimer);
    };
  }, [initialData?.nationality]);

  const comuni = comuniReady ? getComuniCache() : [];

  const needsDocument = guestNeedsDocumentFields(form.guestType);
  const isItalianBirth = form.birthCountryCode === ITALY_CODE;

  const documentIssuePlaceHint = useMemo(() => {
    if (form.documentTypeCode === 'IDELE') return t('form.documentIssuePlaceCieHint');
    if (form.documentTypeCode === 'PASOR') return t('form.documentIssuePlacePassportHint');
    if (form.documentTypeCode === 'IDENT') return t('form.documentIssuePlaceForeignIdHint');
    return t('form.documentIssuePlaceHint');
  }, [form.documentTypeCode, t]);

  const nationOptions = useMemo(
    () => searchNations(nations, nationQuery).map((n) => ({
      value: n.code,
      label: n.name,
      meta: n.iso3 ?? '',
    })),
    [nations, nationQuery],
  );

  const citizenshipOptions = useMemo(
    () => searchNations(nations, citizenshipQuery).map((n) => ({
      value: n.code,
      label: n.name,
      meta: n.iso3 ?? '',
    })),
    [nations, citizenshipQuery],
  );

  const comuneOptions = useMemo(
    () =>
      comuniReady
        ? searchComuni(comuni, comuneQuery).map((c) => ({
            value: c.code,
            label: c.name,
            meta: c.province,
          }))
        : [],
    [comuni, comuniReady, comuneQuery],
  );

  const docPlaceOptions = useMemo(
    () =>
      comuniReady
        ? searchIssuePlaces(comuni, nations, docPlaceQuery).map((p) => ({
            value: p.value,
            label: p.label,
            meta: p.kind === 'comune' ? p.meta : `${p.meta} · ${t('form.documentIssuePlaceHint')}`,
          }))
        : [],
    [comuni, comuniReady, nations, docPlaceQuery, t],
  );

  const docTypeOptions = documentTypes.map((d) => ({
    value: d.code,
    label: d.name,
  }));

  function handleChange(field: string, value: string | number) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleBirthCountryChange(code: string) {
    setForm((prev) => ({
      ...prev,
      birthCountryCode: code,
      ...(code !== ITALY_CODE
        ? { birthMunicipalityCode: '', birthProvinceCode: '' }
        : {}),
    }));
  }

  function handleComuneSelect(code: string) {
    const comune = comuni.find((c) => c.code === code);
    setForm((prev) => ({
      ...prev,
      birthMunicipalityCode: code,
      birthProvinceCode: comune?.province ?? '',
      birthCountryCode: ITALY_CODE,
    }));
  }

  const needsReview = Boolean(initialData?.reviewFields?.length || initialData?.mrzValid === false);

  function fieldClass(field: MrzReviewField): string | undefined {
    return initialData?.reviewFields?.includes(field) ? styles.reviewField : undefined;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.sex !== 'M' && form.sex !== 'F') {
      toast(t('form.errors.sexRequired'), 'error');
      return;
    }
    if (!form.birthCountryCode) {
      toast(t('form.errors.birthCountryRequired'), 'error');
      return;
    }
    if (isItalianBirth && !form.birthMunicipalityCode) {
      toast(t('form.errors.birthMunicipalityRequired'), 'error');
      return;
    }
    if (!form.citizenshipCode) {
      toast(t('form.errors.citizenshipRequired'), 'error');
      return;
    }
    if (needsDocument && !form.documentIssuePlaceCode) {
      toast(t('form.errors.documentIssuePlaceRequired'), 'error');
      return;
    }
    onSubmit({ ...form, sex: form.sex });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>{t('form.title')}</h2>

      {needsReview && (
        <p className={styles.reviewBanner} role="status">
          {t('form.reviewBanner')}
        </p>
      )}

      <label>
        {t('form.guestType')}
        <select
          value={form.guestType}
          onChange={(e) => handleChange('guestType', e.target.value)}
        >
          {GUEST_TYPES.map((gt) => (
            <option key={gt} value={gt}>{t(`form.guestTypes.${gt}`)}</option>
          ))}
        </select>
      </label>

      <label className={fieldClass('surname')}>
        {t('form.surname')}
        {initialData?.reviewFields?.includes('surname') && (
          <span className={styles.reviewTag}>{t('form.reviewFieldHint')}</span>
        )}
        <input required value={form.surname} onChange={(e) => handleChange('surname', e.target.value)} />
      </label>

      <label className={fieldClass('givenNames')}>
        {t('form.givenNames')}
        {initialData?.reviewFields?.includes('givenNames') && (
          <span className={styles.reviewTag}>{t('form.reviewFieldHint')}</span>
        )}
        <input required value={form.givenNames} onChange={(e) => handleChange('givenNames', e.target.value)} />
      </label>

      <label className={fieldClass('birthDate')}>
        {t('form.birthDate')}
        {initialData?.reviewFields?.includes('birthDate') && (
          <span className={styles.reviewTag}>{t('form.reviewFieldHint')}</span>
        )}
        <input required type="date" value={form.birthDate} onChange={(e) => handleChange('birthDate', e.target.value)} />
      </label>

      <label className={fieldClass('sex')}>
        {t('form.sex')}
        {initialData?.reviewFields?.includes('sex') && (
          <span className={styles.reviewTag}>{t('form.reviewFieldHint')}</span>
        )}
        <select
          required
          value={form.sex}
          onChange={(e) => handleChange('sex', e.target.value)}
        >
          <option value="">{t('form.sexSelect')}</option>
          <option value="M">{t('form.sexM')}</option>
          <option value="F">{t('form.sexF')}</option>
        </select>
      </label>

      <SearchSelect
        label={t('form.birthCountry')}
        value={form.birthCountryCode}
        onChange={handleBirthCountryChange}
        options={nationOptions}
        onSearch={setNationQuery}
        placeholder={t('form.searchPlaceholder')}
        required
      />

      {isItalianBirth && (
        <>
          {initialData && (
            <p className={styles.fieldHint}>{t('form.birthMunicipalityMrzHint')}</p>
          )}
          <SearchSelect
            label={t('form.birthMunicipality')}
            value={form.birthMunicipalityCode}
            onChange={(code) => handleComuneSelect(code)}
            options={comuneOptions}
            onSearch={setComuneQuery}
            placeholder={comuniReady ? t('form.searchComune') : t('form.loadingComuni')}
            disabled={!comuniReady}
            required
            emptyMessage={comuniReady && comuneQuery ? t('form.noComuneResults') : undefined}
          />
          <p className={styles.fieldHint}>{t('form.selectFromListHint')}</p>
        </>
      )}

      <SearchSelect
        label={t('form.citizenship')}
        value={form.citizenshipCode}
        onChange={(code) => handleChange('citizenshipCode', code)}
        options={citizenshipOptions}
        onSearch={setCitizenshipQuery}
        placeholder={t('form.searchPlaceholder')}
        required
      />

      {needsDocument && (
        <>
          <label>
            {t('form.documentType')}
            <select
              required
              value={form.documentTypeCode}
              onChange={(e) => handleChange('documentTypeCode', e.target.value)}
            >
              {docTypeOptions.map((d) => (
                <option key={d.value} value={d.value}>{d.label}</option>
              ))}
            </select>
          </label>

          <label className={fieldClass('documentNumber')}>
            {t('form.documentNumber')}
            {initialData?.reviewFields?.includes('documentNumber') && (
              <span className={styles.reviewTag}>{t('form.reviewFieldHint')}</span>
            )}
            <input
              required
              value={form.documentNumber}
              onChange={(e) => handleChange('documentNumber', e.target.value)}
            />
          </label>

          <p className={styles.fieldHint}>{documentIssuePlaceHint}</p>
          <SearchSelect
            label={t('form.documentIssuePlace')}
            value={form.documentIssuePlaceCode}
            onChange={(code) => handleChange('documentIssuePlaceCode', code)}
            options={docPlaceOptions}
            onSearch={setDocPlaceQuery}
            placeholder={comuniReady ? t('form.searchComune') : t('form.loadingComuni')}
            disabled={!comuniReady}
            required
            emptyMessage={comuniReady && docPlaceQuery ? t('form.noComuneResults') : undefined}
          />
        </>
      )}

      <label>
        {t('form.arrivalDate')}
        <input required type="date" value={form.arrivalDate} onChange={(e) => handleChange('arrivalDate', e.target.value)} />
      </label>

      <label>
        {t('form.stayDays')}
        <input
          required
          type="number"
          min={1}
          max={30}
          value={form.stayDays}
          onChange={(e) => handleChange('stayDays', parseInt(e.target.value, 10))}
        />
      </label>

      <div className={styles.actions}>
        <button type="button" className={styles.backBtn} onClick={onBack} disabled={saving}>
          {t('form.backToScan')}
        </button>
        <button type="submit" className={styles.saveBtn} disabled={saving}>
          {saving ? t('form.saving') : t('form.save')}
        </button>
      </div>
    </form>
  );
}
