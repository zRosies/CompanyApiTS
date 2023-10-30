import express from 'express';
import employees from "./employees"
import user from './user'
import swagger from './swagger'
import oauth from './oauth';
import { Request, Response } from 'express';
import path  from 'path';

//main router
const router = express.Router();


router.use('/employee' ,employees)
router.use('/user', user)
router.use('/api-docs', swagger)
router.use('/', oauth)
router.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../front/index.html'));
  });

router.get('/account', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../front/logged.html'));
  });

// router.use('oAuth',)


export default router;