import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    // 1. Mevcut kişileri oku
    const contacts = await readContacts();

    // 2. Eğer listede en az 1 kişi varsa işlemi yap
    if (contacts.length > 0) {
      contacts.pop(); // Dizinin son elemanını çıkarır

      // 3. Güncel listeyi dosyaya geri yaz
      await writeContacts(contacts);

      console.log('Son kişi başarıyla silindi!');
    } else {
      console.log('Silinecek kişi bulunamadı (Liste zaten boş).');
    }
  } catch (error) {
    console.error('Son kişi silinirken bir hata oluştu:', error);
  }
};

removeLastContact();
