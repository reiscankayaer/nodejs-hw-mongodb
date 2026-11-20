import { Router } from 'express';
import { authenticate } from '../middlewares/authenticate.js';
import { isValidId } from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  getContactsController,
  getContactByIdController,
  createContactController,
  patchContactController,
  deleteContactController,
} from '../controllers/contacts.js';

const router = Router();

router.use(authenticate);

// Listeleme (GET)
router.get('/', ctrlWrapper(getContactsController));

// Tek Kişi Getirme (GET by ID)
router.get('/:contactId', isValidId, ctrlWrapper(getContactByIdController));

// Kişi Oluşturma (POST)
router.post(
  '/',
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

// Kişi Güncelleme (PATCH)
router.patch(
  '/:contactId',
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(patchContactController),
);

// Kişi Silme (DELETE)
router.delete('/:contactId', isValidId, ctrlWrapper(deleteContactController));

export default router;