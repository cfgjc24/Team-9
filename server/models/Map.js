const db = require('../db/db');

//get the lat, long for all employees from db here
const getEmployees = async() =>{
    try{
        const result = await db.query('SELECT lat, long FROM users WHERE employee = true');
    } catch(e){
        console.error('Error receiving employee positions: ', e )
    }
}

//get the lat, long for all clients from db here
const getAllClientPos = async() =>{
    try{
        const result = await db.query('SELECT lat, long FROM users WHERE client = true');
    } catch(e){
        console.error('Error receiving client positions: ', e )
    }
}

//get the lat, long for client_id = clientID from db here
const getClientPos = async(clientID) =>{
    try{
        const result = await db.query('SELECT lat, long FROM users WHERE client_id = $1', [clientID]);
    } catch(e){
        console.error('Error receiving client positions for requested client: ', e )
    }
}

 //get the lat, long for employee_id = employeeId from db here
 const getEmployeePos = async(employeeID) =>{
    try{
    const result = await db.query('SELECT lat, long FROM users WHERE employee_id = $1', [employeeID]);
    } catch(e){
        console.error('Error receiving employee positions for requested employee: ', e )
    }
}


//UPDATE THE USER LAT, LONG HERE (every 10 sec from frontend)



