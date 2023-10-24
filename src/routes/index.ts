import express from 'express';
import { getAllEmployees } from '../controllers/employee';
import employees from "./employees"
import user from './user'
import swagger from './swagger'
import { redirect } from './oatuh';


const router = express.Router();


router.use('/employee' , employees)
router.use('/user', user)
router.use('/api-docs', swagger)
router.use('/auth', redirect)
// router.use('oAuth',)


export default router;