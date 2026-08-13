import { del, keys } from 'idb-keyval';

/** Rimuove modello MRZ corrotto dalla cache IndexedDB di Tesseract.js */
export async function clearTesseractModelCache(): Promise<void> {
  try {
    const allKeys = await keys();
    await Promise.all(
      allKeys
        .filter((k) => String(k).includes('mrz') && String(k).includes('traineddata'))
        .map((k) => del(k)),
    );
  } catch {
    // IndexedDB non disponibile
  }
}
