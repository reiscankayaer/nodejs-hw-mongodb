import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    // 1. Dosyadaki tüm kişileri oku
    const contacts = await readContacts();

    // 2. Kişileri konsola yazdır (Test etmek için)
    console.log(contacts);

    // 3. Diziyi döndür
    return contacts;
  } catch (error) {
    console.error('Kişiler getirilirken bir hata oluştu:', error);
  }
};

// Fonksiyonu çalıştır
getAllContacts();
    