import express from "express";
import { getAllEmployees, getEmployeeById, createNewEmployee, deleteEmployee, updateEmployee } from "../controllers/employee";
import { validate, validateEmployee } from "../validation/validationRules";
import { authenticate } from "./midddlewareAuthenticate";


const router: any = express.Router();

router.get('/',  getAllEmployees)
router.get('/:id', getEmployeeById)
router.post('/', authenticate, validateEmployee(), validate,  createNewEmployee)
router.put('/:id', authenticate, validateEmployee(), validate,  updateEmployee)
router.delete('/:id', authenticate, deleteEmployee)


export default router;