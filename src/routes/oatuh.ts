import { Response, Request } from "express";

export const redirect = (req:Request, res:Response) => {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}`)

}