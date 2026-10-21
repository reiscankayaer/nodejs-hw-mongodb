import { Router } from 'express';
import {
  getContactsController,
  getContactByIdController,
  createContactController,
  patchContactController,
  deleteContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

// Tüm kişileri listeleme
router.get('/contacts', ctrlWrapper(getContactsController));

// ID'ye göre tek kişi getirme
router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));

// Yeni kişi oluşturma
router.post('/contacts', ctrlWrapper(createContactController));

// Mevcut kişiyi güncelleme (PATCH)
router.patch('/contacts/:contactId', ctrlWrapper(patchContactController));

// Kişiyi silme (DELETE)
router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));

export default router;
