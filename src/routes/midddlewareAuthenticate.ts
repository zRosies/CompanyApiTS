import { Response, Request, NextFunction } from "express";
import cookie from 'cookie';

interface CustomRequest extends Request {
  query: {
    token: string;
    // Add other query parameters as needed
  };
}

export const authenticate = (req: CustomRequest, res: Response, next: NextFunction) => {
  // Check if the user is authenticated, e.g., by verifying the presence of an access token.
  const cookies = cookie.parse(req.headers?.cookie || ''); // Parse cookies from the request
  const customToken = cookies.git_token; // Assuming the token is passed as a cookie

  if (customToken) {
    // User is authenticated, proceed to the next middleware/route handler
    next();
  } else {
    // User is not authenticated, send a 401 Unauthorized response or redirect to a login page
    res.status(401).send('Unauthorized');
  }
};