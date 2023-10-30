const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt'); // for password hashing
const jwt = require('jsonwebtoken'); // for creating JWTs

const app = express();
app.use(cors());

// Set your MongoDB Atlas connection string
const mongoURI = 'mongodb+srv://gatoradvisor2:gatoradvisor2@cluster0.zfsboxj.mongodb.net/userinfo';
console.log(mongoURI)
// Connect to MongoDB Atlas
mongoose.connect(mongoURI, {
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

// Create a User model for MongoDB
const User = mongoose.model('User', new mongoose.Schema({
  username: String,
  password: String, // Passwords should be hashed and stored securely, but for simplicity, we're using plaintext here
}));

// Configure body parser and other middleware
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

app.post('/signup', async (req, res) => {
  try {
    // Extract user registration data from the request body
    const { username, password } = req.body;
    console.log(username)
    console.log(password)

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required.' });
    }


    if (!username.endsWith('@ufl.edu')) {
      return res.status(401).json({ message: 'Only UF email addresses are allowed for registration.' });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: 'Username is already taken.' });
    }
    
  

    // Simulate user registration and save user data to the "userinfo" database
    const newUser = new User({ username, password });

    // Save the user to the "userinfo" database
    await newUser.save();

    // Respond with a success message
    return res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    // Handle registration errors (e.g., database errors)
    console.error('Error during user registration:', error);
    return res.status(500).json({ message: 'Registration failed. Please try again later.' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by their username in the "userinfo" database
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    console.log(user.password)
    // Check if the provided password matches the stored password
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Create and send a JSON Web Token (JWT) for authentication
    const token = jwt.sign({ username: user.username }, 'security');

    res.json({ message: 'Login successful', token, user: { username: user.username } });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

//server runs on a different port than front-end
const port = process.env.PORT || 3001;

// Define routes and middleware here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
