import sql from '../db/db.js';

//get the lat, long for all employees from db here
export const getAllEmployeePos = async() =>{
    try{
        const result = await sql`SELECT id, latitutde, longitude FROM employee`;
        return result;
    } catch(e){
        console.error('Error receiving employee positions: ', e );
    }
}

//get the lat, long for all clients from db here
export const getAllClientPos = async() =>{
    try{
        const result = await sql`SELECT latitude, longitude FROM client`;
    } catch(e) {
        console.error('Error receiving client positions: ', e );
    }
}

//get the lat, long for client_id = clientID from db here
export const getClientPos = async(clientId) =>{
    try{
        const result = await sql`SELECT latitude, longitude FROM users WHERE id = ${clientId}`;
        return result;
    } catch(e) {
        console.error('Error receiving client positions for requested client: ', e );
    }
}

 //get the lat, long for employee_id = employeeId from db here
export const getEmployeePos = async(employeeId) =>{
    try{
        const result = await sql`SELECT lat, long FROM users WHERE employee_id = ${employeeId}`;
        return result;
    } catch(e) {
        console.error('Error receiving employee positions for requested employee: ', e );
    }
}

//UPDATE THE USER LAT, LONG HERE (every 10 sec from frontend
export const newUserPos = async(latitude, longitude, id) => {
    try{
        const result = await sql`UPDATE users SET latitutde = ${latitude}, longitude = ${longitude} WHERE id = ${id}`;
  
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


 



