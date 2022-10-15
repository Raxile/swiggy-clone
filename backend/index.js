const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors');

connectToMongo();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());    // middleware for req.body in json format 

// Available Routes
app.use('/api/resturants', require('./routes/resturant'));
app.use('/api/fooditem',require('./routes/foodItem'));
app.use('/api/bill',require('./routes/bill'));
  

app.listen(port, () => {
  console.log(`Swiggy backend listening at http://localhost:${port}`);
})