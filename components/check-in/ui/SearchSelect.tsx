import { useEffect, useRef, useState } from 'react';
import styles from './SearchSelect.module.css';

export interface SearchSelectOption {
  value: string;
  label: string;
  meta?: string;
}

interface SearchSelectProps {
  label: string;
  value: string;
  onChange: (value: string, option?: SearchSelectOption) => void;
  options: SearchSelectOption[];
  onSearch: (query: string) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  emptyMessage?: string;
}

export function SearchSelect({
  label,
  value,
  onChange,
  options,
  onSearch,
  placeholder,
  required,
  disabled,
  emptyMessage,
}: SearchSelectProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleInputChange(text: string) {
    setQuery(text);
    onSearch(text);
    setOpen(true);
  }

  return (
    <div className={styles.field} ref={containerRef}>
      <label>
        <span>{label}{required ? ' *' : ''}</span>
        <input
        type="text"
        value={open ? query : (selected?.label ?? query)}
        placeholder={placeholder}
        required={required && !value}
        disabled={disabled}
        onFocus={() => {
          setOpen(true);
          setQuery(selected?.label ?? '');
        }}
        onChange={(e) => handleInputChange(e.target.value)}
        />
      </label>
      {open && options.length > 0 && (
        <ul className={styles.dropdown} role="listbox">
          {options.map((opt) => (
            <li key={opt.value}>
              <button
                type="button"
                role="option"
                aria-selected={opt.value === value}
                onClick={() => {
                  onChange(opt.value, opt);
                  setQuery(opt.label);
                  setOpen(false);
                }}
              >
                <span>{opt.label}</span>
                {opt.meta && <span className={styles.meta}>{opt.meta}</span>}
              </button>
            </li>
          ))}
        </ul>
      )}
      {open && options.length === 0 && emptyMessage && (
        <p className={styles.empty} role="status">{emptyMessage}</p>
      )}
    </div>
  );
}
