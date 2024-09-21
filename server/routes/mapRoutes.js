import { Router } from 'express';
const router = Router();

router.get('/getAllEmployeesPos', async (req, res) => {
    try {
        //get the lat, long for all employees from db here
        res.send({status:'WOrks'});
    }
    catch (err){
        res.status(500).json({error: `The error is ${err}`});
    }
})

router.get('/getAllClientsPos', async (req, res) => {
    //get the lat, long for all clients from db here
    try {
        end({status:'WOrks'});
    }
    catch (err){
        res.status(500).json({error: `The error is ${err}`});
    }
})

router.get('/getClientPos/:id', async (req, res) => {
    try {
        //get the lat, long for client_id = clientId from db here
        res.send({status:'WOrks'});
    }
    catch (err){
        res.status(500).json({error: `The error is ${err}`});
    }
})

router.get('/getEmployeePos/:id', async (req, res) => {
    try {
        //get the lat, long for employee_id = employeeId from db here
        res.send({status:'WOrks'});
    }
    catch (err){
        res.status(500).json({error: `The error is ${err}`});
    }
})

router.put('/newEmployeePos', async (req, res) => {
    const { Id, latitude, longitude } = req.body;

    try {  
        //const user = await (get user to change their lat, long)
        
        if (user.rows.length === 0) {
        return res.status(404).json({ error: 'Employee not found' });
        }
        
        //const updateLocation = await (UPDATE THE USER LAT, LONG HERE (every 10 sec from frontend)
    
        res.json({ message: 'Location updated successfully', user: updateLocation.rows[0] });
    } 
    catch (err) {
        res.status(500).json({error: `The error is ${err}`});
    }
})

export default router;