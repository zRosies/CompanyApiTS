import express from 'express';
import {getAllUsers,getUserById, deleteUser, updateUser, createNewUser} from '../controllers/users'
import {validateUser,validate} from '../validation/validationRules'
import oauth from './oauth';
import { authenticate } from './midddlewareAuthenticate';

const router: any = express.Router();

router.get('/', authenticate, getAllUsers)
router.get('/:id', authenticate, getUserById)
router.delete('/:id', authenticate, deleteUser)
router.post('/', validateUser(),validate, authenticate, createNewUser)
router.put('/:id',validateUser(),validate, authenticate, updateUser)


export default router;