const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 3000;


app.use(cors());


// MongoDB connection string TAKE PASSOWRD 
const uri = "mongodb+srv://gkim574:U62FeDW8fqo9KpN2@cluster0.rniw4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

// Route to fetch data from MongoDB
app.get('/api/data', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('dummyData');
    const collection = database.collection('dummy');

    // Fetch all data from the collection
    const data = await collection.find({}).toArray();

    res.json(data); // Send the data as JSON response
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching data');
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
