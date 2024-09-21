import sql from '../db/db.js';

export const createClient = async(authId, address, lastAppointment, nextAppointment, long, lat) => {
    const result = await db.sql(
        'INSERT INTO users(auth_id, address, last_appointment, name, next_appointment, long, lat, employee) VALUES ($1, $2, $3, $4) RETURNING *', 
        [authId, address, lastAppointment, name, nextAppointment, long, lat, employee]
        );
    return result.rows[0];
}

export const getClient = async(authId) => {
    const result = await db(
        'SELECT * FROM users WHERE user_id = $1', 
        [authId]
        );
    return result.rows[0];
}

export const getAllClients = async() => {
    const result = await sql`SELECT * FROM clients`;
    return result;
}

export const noStaff = async() => {
    const result = await sql`SELECT * FROM waitlist`;
    return result;
}
