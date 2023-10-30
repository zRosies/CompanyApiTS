import express from 'express';
import {getAllUsers,getUserById, deleteUser, updateUser, createNewUser} from '../controllers/users'
import {validateUser,validate} from '../validation/validationRules'
import oauth from './oauth';
import { authenticate } from './midddlewareAuthenticate';

const router: any = express.Router();

router.get('/', authenticate, getAllUsers)
router.get('/:id', getUserById)
router.delete('/:id', deleteUser)
router.post('/', validateUser(),validate, createNewUser)
router.put('/:id',validateUser(),validate, updateUser)


export default router;