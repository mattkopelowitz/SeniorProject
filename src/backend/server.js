const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt'); // for password hashing
const jwt = require('jsonwebtoken'); // for creating JWTs
const nodemailer = require('nodemailer');
const crypto = require('crypto');

const app = express();
app.use(cors());

// Set your MongoDB Atlas connection string
const mongoURI = 'mongodb+srv://gatoradvisor2:gatoradvisor2@cluster0.zfsboxj.mongodb.net/userinfo';
console.log(mongoURI);

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
  email: String,
  verified: Boolean,
  verificationToken: String,
}));

// Configure body parser and other middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'smtp.qtp.ufl.edu',
  port: 587,
  secure: false,
  auth: {
    user: 'myuksel@ufl.edu',
    pass: '12345', 
  },
  tls: {
    ciphers: 'SSLv3',
  },
});

// Generate a unique verification token
function generateVerificationToken() {
  return crypto.randomBytes(20).toString('hex');
}

// Send a verification email
function sendVerificationEmail(user) {
  const mailOptions = {
    from: 'myuksel@ufl.edu',
    to: user.email,
    subject: 'Account Verification',
    text: `Please click the following link to verify your account: http://yourapp.com/verify?token=${user.verificationToken}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

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

    if (!username || !password) {
      return res.status(400).json({ message: 'Username, password, and email are required.' });
    }

    // Check if the email is from the allowed domain
    if (!username.endsWith('@ufl.edu')) {
      return res.status(401).json({ message: 'Only UF email addresses are allowed for registration.' });
    }

    // Check if the username is already taken
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: 'Username is already taken.' });
    }

    // Generate a verification token
    const verificationToken = generateVerificationToken();

    // Create a new user
    const newUser = new User({ username, password, verified: false, verificationToken });

    // Save the user to the database
    await newUser.save();

    // Send a verification email
    sendVerificationEmail(newUser);

    res.status(201).json({ message: 'User registered successfully. Check your UF email for verification.' });
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

// Define routes and middleware here

// Start the Express server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
