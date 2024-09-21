const express = require('express');
const app = express();

const port = process.env.PORT || 3000; // Use the port provided by the host or default to 3000
app.listen(port, () => {
 console.log(`Server listening on port ${port}`);
});
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
