import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
  try {
    // 1. Mevcut kişileri oku (Eğer dosya boşsa [] dönecek)
    const existingContacts = await readContacts();

    // 2. İstenen sayı kadar yeni kişi oluştur
    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }

    // 3. Mevcut liste ile yeni oluşturulan kişileri birleştir (Spread operatörü '...' kullanıyoruz)
    const updatedContacts = [...existingContacts, ...newContacts];

    // 4. Güncellenmiş tüm listeyi dosyaya geri yaz
    await writeContacts(updatedContacts);

    console.log(`${number} adet yeni kişi başarıyla eklendi!`);
  } catch (error) {
    console.error('Kişiler oluşturulurken bir hata meydana geldi:', error);
  }
};

// Fonksiyonu çalıştırıp test etmek için (Ödev yönergesine göre varsayılan 5 kişi eklenebilir)
generateContacts(5);
