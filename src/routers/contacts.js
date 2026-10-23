import { Router } from 'express';
import {
  getContactsController,
  getContactByIdController,
  createContactController,
  patchContactController,
  deleteContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

// Middleware ve Şemaları İçe Aktarma
import { isValidId } from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';

const router = Router();

// Listeleme (GET)
router.get('/', ctrlWrapper(getContactsController));

// Tek Kişi Getirme (GET by ID) - isValidId eklendi
router.get('/:contactId', isValidId, ctrlWrapper(getContactByIdController));

// Kişi Oluşturma (POST) - validateBody ve createContactSchema eklendi
router.post(
  '/',
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

// Kişi Güncelleme (PATCH) - isValidId, validateBody ve updateContactSchema eklendi
router.patch(
  '/:contactId',
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(patchContactController),
);

// Kişi Silme (DELETE) - isValidId eklendi
router.delete('/:contactId', isValidId, ctrlWrapper(deleteContactController));
export default router;
