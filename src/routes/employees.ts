import express from "express";
import { getAllEmployees, getEmployeeById, createNewEmployee, deleteEmployee, updateEmployee } from "../controllers/employee";
import { validate, validateEmployee } from "../validation/validationRules";



const router: any = express.Router();

router.get('/', getAllEmployees)
router.get('/:id', getEmployeeById)
router.post('/',validateEmployee(), validate, createNewEmployee)
router.put('/:id',validateEmployee(), validate, updateEmployee)
router.delete('/:id', deleteEmployee)


export default router;