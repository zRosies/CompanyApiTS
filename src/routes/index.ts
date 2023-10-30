import express from 'express';
import employees from "./employees"
import user from './user'
import swagger from './swagger'
import oauth from './oauth';

//main router
const router = express.Router();


router.use('/employee' ,employees)
router.use('/user', user)
router.use('/api-docs', swagger)
router.use('/', oauth)

// router.use('oAuth',)


export default router;