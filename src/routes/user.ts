import express from 'express';
import {getAllUsers,getUserById, deleteUser, updateUser, createNewUser} from '../controllers/users'
import {validateUser,validate} from '../validation/validationRules'
import oauth from './oauth';
import { authenticate } from './midddlewareAuthenticate';

const router: any = express.Router();

router.get('/', getAllUsers)
router.get('/:id',  getUserById)
router.delete('/:id', authenticate, deleteUser)
router.post('/', validateUser(),validate, authenticate, createNewUser)
router.put('/:id',validateUser(),validate, authenticate, updateUser)


export default router;