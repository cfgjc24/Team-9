import { Router } from 'express';
import * as Employee from '../models/SignUp.js';

const router = Router();

router.get('/getAllEmployeesPos', async (req, res) => {
    try {
        const pos = await Employee.getAllEmployeePos();
        res.json(pos);
    }
    catch (err){
        res.status(500).json({error: `The error is ${err}`});
    }
})

