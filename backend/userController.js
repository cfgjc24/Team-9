// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./userModel');  // Import user model

const JWT_SECRET = 'your_jwt_secret_key';

// Login function
exports.login = async (req, res) => {
    const { username, password } = req.body;

    // Find the user in the database
    const user = await User.findByUsername(username);
    if (!user) {
        return res.status(400).send('User not found');
    }

    // Compare password
    // const isPasswordValid = await bcrypt.compare(password, user.password);
    // if (!isPasswordValid) {
    //     return res.status(401).send('Invalid credentials');
    // }

    // Generate JWT token
    const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
};
