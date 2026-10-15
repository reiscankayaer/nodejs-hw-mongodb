import fs from "node:fs/promises";
import { PATH_DB } from "../constants/contacts.js";

export const writeContacts = async (updatedContacts) => {
  try {
    // JavaScript dizisini JSON metnine çeviriyoruz. (null, 2) parametreleri dosyanın düzenli ve okunaklı görünmesini sağlar.
    const data = JSON.stringify(updatedContacts, null, 2);
    
    // Çevrilen metni dosyaya yazıyoruz
    await fs.writeFile(PATH_DB, data, "utf-8");
  } catch (error) {
    console.error("Dosyaya yazılırken bir hata oluştu:", error);
  }
};