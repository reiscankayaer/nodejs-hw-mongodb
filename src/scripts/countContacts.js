import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    // 1. Dosyadaki tüm kişileri oku
    const contacts = await readContacts();

    // 2. Dizinin eleman sayısını (.length) bul
    const totalCount = contacts.length;

    // 3. Ekrana yazdır
    console.log(`Toplam kişi sayısı: ${totalCount}`);

    // 4. Sayıyı döndür
    return totalCount;
  } catch (error) {
    console.error('Kişi sayısı hesaplanırken bir hata oluştu:', error);
  }
};

// Fonksiyonu çalıştır
countContacts();
