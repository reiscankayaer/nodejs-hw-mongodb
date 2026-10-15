import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    // 1. Dosyaya boş bir dizi yazarak tüm içeriği sıfırla
    await writeContacts([]);

    console.log('Tüm kişiler başarıyla silindi!');
  } catch (error) {
    console.error('Kişiler silinirken bir hata oluştu:', error);
  }
};

removeAllContacts();
