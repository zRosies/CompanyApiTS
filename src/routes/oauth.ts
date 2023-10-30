import { Response, Request } from "express";
import express from "express";
import axios from 'axios';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';

const oauth: any = express.Router();

// Secret key for signing the JWT (keep this secret)
const jwtSecret = 'your-secret-key';

function generateCustomToken(userData:any) {
  const token = jwt.sign(userData, jwtSecret, {
    expiresIn: '1h', // Token expires in 1 hour
  });
  return token;
}

const redirect = (req: Request, res: Response) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
};

const callback = async ({ query: { code } }: { query: { code: any } }, res: Response) => {
  const body: object = {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_SECRET,
    code,
  };
  const opts = { headers: { accept: 'application/json' } };

  try {
    // Make the POST request to GitHub for the access token
    const response = await axios.post('https://github.com/login/oauth/access_token', body, opts);
    const token = response.data.access_token;

    const tokenCookie = cookie.serialize('git_token', token, {
      httpOnly: true,
      maxAge: 5 * 60 * 1000, // 5min
      sameSite: 'lax',
    });

  
    res.setHeader('Set-Cookie', tokenCookie);


    
    //redirecting to the account page
    res.redirect('/account') 
  } catch (err) {
    res.status(500).json({ err: err});
  }
};


const logout = (req:Request, res:Response)=>{
  res.clearCookie('git_token')
  res.redirect('/')

}

oauth.get('/oauth', redirect);
oauth.get('/oauth-callback', callback);
oauth.get('/logout', logout)

export default oauth;