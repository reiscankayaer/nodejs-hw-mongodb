import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    // 1. Mevcut kişileri dosyadan oku
    const contacts = await readContacts();

    // 2. Bir tane yeni sahte kişi oluştur
    const newContact = createFakeContact();

    // 3. Yeni kişiyi mevcut listenin sonuna ekle
    contacts.push(newContact);

    // 4. Güncellenmiş listeyi dosyaya geri yaz
    await writeContacts(contacts);

    console.log('1 yeni kişi başarıyla listeye eklendi!');
  } catch (error) {
    console.error('Kişi eklenirken bir hata oluştu:', error);
  }
};

// Fonksiyonu çalıştır
addOneContact();
