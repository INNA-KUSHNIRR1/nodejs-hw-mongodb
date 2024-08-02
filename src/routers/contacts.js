import { Router } from 'express';
import {
  createContactController,
  getContactByIdController,
  getContactsController,
  updateContactController,
  deleteContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));
router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));
router.post('/contacts', ctrlWrapper(createContactController));
router.patch('/contacts/:contactId', ctrlWrapper(updateContactController));
router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));
export default router;
