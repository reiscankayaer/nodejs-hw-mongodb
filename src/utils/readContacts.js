import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    // Dosyayı utf-8 formatında okuyoruz
    const data = await fs.readFile(PATH_DB, 'utf-8');

    // Okunan string (metin) verisini JSON formatından JavaScript dizisine çevirip döndürüyoruz
    return JSON.parse(data);
  } catch (error) {
    console.error('Dosya okunurken bir hata oluştu:', error);
    return []; // Hata durumunda kodun çökmemesi için boş bir dizi dönüyoruz
  }
};
