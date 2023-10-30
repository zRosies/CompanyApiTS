import express from 'express';
import swaggerUI from 'swagger-ui-express';
import swaggerDoc from '../testAuth.json';


const router: any = express.Router()

router.use('/',swaggerUI.serve)
router.get('/',swaggerUI.setup(swaggerDoc))


// const ui = swaggerUI(swaggerDoc);


// ui.initOAuth({
//   clientId: process.env.GITHUB_CLIENT_ID,
//   clientSecret: process.env.GITHUB_SECRET,
//   realm: "your-realms",
//   appName: "CompanyApi",
//   scopeSeparator: " ",
//   scopes: "openid profile",
//   additionalQueryStringParams: { test: "hello" },
//   useBasicAuthenticationWithAccessCodeGrant: true,
//   usePkceWithAuthorizationCodeGrant: true,
// });

export default router;

