import { del, keys } from 'idb-keyval';

/** Rimuove cache Tesseract/MRZ corrotta da IndexedDB */
export async function clearTesseractModelCache(): Promise<void> {
  try {
    const allKeys = await keys();
    await Promise.all(
      allKeys
        .filter((k) => {
          const key = String(k).toLowerCase();
          return (
            key.includes('traineddata') ||
            key.includes('tesseract') ||
            key.includes('hotelsdrop-mrz') ||
            key.includes('fastcheckin-mrz')
          );
        })
        .map((k) => del(k)),
    );
  } catch {
    // IndexedDB non disponibile
  }
}
