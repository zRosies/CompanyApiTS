import express from 'express';
import swaggerUI from 'swagger-ui-express';
import {swaggerDocument} from '../swagger'
import swaggerDoc from '../swagger.json';

console.log(swaggerDoc);



const router: any = express.Router()

router.use('/',swaggerUI.serve)
router.get('/',swaggerUI.setup(swaggerDoc))


export default router;

