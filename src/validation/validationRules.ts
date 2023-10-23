import { Request, Response, NextFunction } from 'express';
import { check, validationResult } from 'express-validator';

export const validateUser = ()=> {
    return [
    check('userName', 'Name is required').not().isEmpty(),
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
    ]
};

export const validateEmployee = ()=>{
    return [
        check('firstName','Name is required' ).not().isEmpty(),
        check('lastName','Last Name is required' ).not().isEmpty(),
        check('role','Role is required' ).not().isEmpty(),
        check('salary','Salary must be a number' ).isNumeric(),
        check('phone','Phone must be a number with at least 6 digits' ).isNumeric().isLength({min:6}),
        check('email','Type the email correctly' ).isEmail().normalizeEmail({gmail_remove_dots:true}),
        check('address','Type your address' ).not().isEmpty()    

    ]
}

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors: Record<string, string>[] = [];

    errors.array().map((err) => {
        extractedErrors.push({ [err.msg]: err.msg });
    });

    return res.status(422).json({
        errors: extractedErrors,
    });
};