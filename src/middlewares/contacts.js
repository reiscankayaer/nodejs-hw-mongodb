import { Router } from 'express';
import { authenticate } from '../middlewares/authenticate.js';
// ... diğer importların

const router = Router();

router.use(authenticate); // Tüm /contacts rotalarını koruma altına alır

// router.get('/', ...);
// router.get('/:contactId', ...);
// router.post('/', ...);
// router.patch('/:contactId', ...);
// router.delete('/:contactId', ...);

export default router;