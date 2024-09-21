const db = require('./db');  // Your database connection

// Define the user model
const User = {};

// Find a user by username
User.findByUsername = async (username) => {
    const result = await db.query('SELECT * FROM users WHERE username = $1', [username]);
    return result.rows[0];  // Return the user
};

module.exports = User;
