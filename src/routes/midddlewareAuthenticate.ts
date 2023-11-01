import { Response, Request, NextFunction } from "express";
import cookie from 'cookie';

interface CustomRequest extends Request {
  query: {
    token: string;
    
  };
}

export const authenticate = (req: CustomRequest, res: Response, next: NextFunction) => {
  // Check if the user is authenticated, e.g., by verifying the presence of an access token.
  const cookies = cookie.parse(req.headers?.cookie || '');
  const customToken = cookies.git_token; 

  // Simple authentication checking the token
  if (customToken) {
    if (customToken === "null" || customToken == "undefined") {
      res.json(`Your token is: ${customToken}! Validade your access before continuing`);
    } else {
      next();
    }
   
  } else {
    // User is not authenticated, send a 401 Unauthorized response or redirect to a login page
    res
      .status(401)
      .send("Unauthorized! You have no token to perform this operation!");
  }
};