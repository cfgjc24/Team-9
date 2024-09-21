//login logic
const mongoose = require('mongoose');


const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./userRoutes');  // Import routes

const app = express();

app.use(bodyParser.json());
app.use('/users', userRoutes);  // Use the routes

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});




//const express = require('express');
//const app = express();

//const port = process.env.PORT || 3000; // Use the port provided by the host or default to 3000
//app.listen(port, () => {
//  console.log(`Server listening on port ${port}`);
//});
let arr = [["1", "1234 Main St", "2021-10-01", "John Doe", "2021-10-15"], 
["2", "5678 Elm St", "2021-10-02", "Jane Doe", "2021-10-16"], 
["3", "91011 Oak St", "2021-10-03", "John Smith", "2021-10-17"], 
["4", "121314 Pine St", "2021-10-04", "Jane Smith", "2021-10-18"],
["5", "151617 Maple St", "2021-10-05", "John Johnson", "2021-10-19"],
["6", "181920 Birch St", "2021-10-06", "Jane Johnson", "2021-10-20"],
["7", "212223 Cedar St", "2021-10-07", "John Brown", "2021-10-21"],
["8", "242526 Walnut St", "2021-10-08", "Jane Brown", "2021-10-22"],
["9", "272829 Cherry St", "2021-10-09", "John White", "2021-10-23"],
["10", "303132 Peach St", "2021-10-10", "Jane White", "2021-10-24"]]
// Define a route to handle incoming requests
app.get('/', (req, res) => {
  res.send(arr);
});


//const express = require('express');

//require('dotenv').config(); // Load environment variables

//const app = express();
//const port = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB', err));

// Define a Mongoose schema
const addressSchema = new mongoose.Schema({
    id: String,
    address: String,
    startDate: String,
    name: String,
    endDate: String
});

// Create a model from the schema
const Address = mongoose.model('Address', addressSchema);

// Define a route to handle fetching all addresses
app.get('/', async (req, res) => {
    try {
        const addresses = await Address.find();
        res.json(addresses);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Error fetching data from MongoDB', error });
    }
});

// Additional route for adding a new address (optional)
app.post('/addresses', async (req, res) => {
    const newAddress = new Address(req.body);
    try {
        const savedAddress = await newAddress.save();
        res.status(201).json(savedAddress);
    } catch (error) {
        console.error('Error saving address:', error);
        res.status(400).json({ message: 'Error saving address', error });
    }
});




/*
function createData(
    id: string,
    address: string,
    last_appointment: string,
    employee: string,
    next_appointment: string
): Dashboard {
    return { id, address, last_appointment, employee, next_appointment };
}


const rows = [
    createData(),
    createData("2", "5678 Elm St", "2021-10-02", "Jane Doe", "2021-10-16"),
    createData("3", "91011 Oak St", "2021-10-03", "John Smith", "2021-10-17"),
    createData("4", "121314 Pine St", "2021-10-04", "Jane Smith", "2021-10-18"),
    createData("5", "151617 Maple St", "2021-10-05", "John Johnson", "2021-10-19"),
    createData("6", "181920 Birch St", "2021-10-06", "Jane Johnson", "2021-10-20"),
    createData("7", "212223 Cedar St", "2021-10-07", "John Brown", "2021-10-21"),
    createData("8", "242526 Walnut St", "2021-10-08", "Jane Brown", "2021-10-22"),
    createData("9", "272829 Cherry St", "2021-10-09", "John White", "2021-10-23"),
    createData("10", "303132 Peach St", "2021-10-10", "Jane White", "2021-10-24"),
];
*/