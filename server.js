const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//Connecting to database in MongoDB -> we still need to set up mongoBD though
mongoose.connect('mongodb://localhost/my-database', { 
  useNewUrlParser: true,
  useUnifiedTopology: true, 
});


// MongoDB schema and model (for "items" collection)
const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  // more fields can be added
});

const Item = mongoose.model('Item', itemSchema);

//makes it so that we can read the data held in JSON and url format in MongoDB
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/search', async (req, res) => {
  try {
    const searchTerm = req.query.term;
    const results = await Item.find({ name: { $regex: searchTerm, $options: 'i' } }); // Case-insensitive search

    res.json(results);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

//server runs on a different port than front-end
const port = process.env.PORT || 3000;

// Define outes and middleware here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
