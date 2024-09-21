
// import express from 'express';
import sql from '../db/db.js';

//get the lat, long for all employees from db here
const getEmployees = async() =>{
    try{
        const result = await sql.query('SELECT lat, long FROM employee');
    } catch(e){
        console.error('Error receiving employee positions: ', e );
    }
}

//get the lat, long for all clients from db here
const getAllClientPos = async() =>{
    try{
        const result = await sql.query('SELECT lat, long FROM client');
    } catch(e){
        console.error('Error receiving client positions: ', e );
    }
}

//get the lat, long for client_id = clientID from db here
const getClientPos = async(clientID) =>{
    try{
        const result = await sql.query('SELECT lat, long FROM users WHERE client_id = $1', [clientID]);
    } catch(e){
        console.error('Error receiving client positions for requested client: ', e );
    }
}

 //get the lat, long for employee_id = employeeId from db here
const getEmployeePos = async(employeeID) =>{
    try{
    const result = await sql.query('SELECT lat, long FROM users WHERE employee_id = $1', [employeeID]);
    } catch(e){
        console.error('Error receiving employee positions for requested employee: ', e );
    }
}


//UPDATE THE USER LAT, LONG HERE (every 10 sec from frontend)
 
const newUserPos= async() => {
    try{
    const result = await sql.query('UPDATE users SET lat = $1, long = $2 WHERE user_id = $3', [lat, long, userId]);
  
      if (result.rowCount > 0) {
        res.json({ message: 'User position updated successfully' });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error updating user position:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  ;
}


 



