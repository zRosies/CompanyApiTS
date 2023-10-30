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

    // Generate a custom token for your application, e.g., JWT

    // const customToken = generateCustomToken({ user: 'your-username' }); // Replace with your token generation logic

    // Set the custom token as a cookie with a 1-hour expiration
    const tokenCookie = cookie.serialize('git_token', token, {
      httpOnly: true,
      maxAge: 5 * 60 * 1000, // 5min
      sameSite: 'lax',
    });

    // Add the cookie to the response headers
    res.setHeader('Set-Cookie', tokenCookie);

    // Redirect the user to a different route or respond as needed
    res.redirect('/account'); // Replace with your desired route
  } catch (err) {
    res.status(500).json({ err: err});
  }
};

oauth.get('/oauth', redirect);
oauth.get('/oauth-callback', callback);

export default oauth;