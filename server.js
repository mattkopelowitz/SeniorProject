const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//Connecting to database in MongoDB -> we still need to set up mongoBD though
mongoose.connect('mongodb://localhost/my-database', { useNewUrlParser: true });

//makes it so that we can read the data held in JSON format in MongoDB
app.use(bodyParser.json());

//connecting to front-end through the same port
const port = process.env.PORT || 3000;

// Define outes and middleware here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
