const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const app = express();

app.use(cors());

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


app.post('/signup', async (req, res) => {
  try {
    // Extract user registration data from the request body
    const { username, password } = req.body;

    // Check if the username and password meet validation requirements
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required.' });
    }

    // Implement user registration logic (e.g., saving user data to a database)
    // Here, we'll simulate a successful registration
    const newUser = {
      username,
      // Hash the password before saving it in a real application
      password,
    };

    // Replace the above code with actual database operations (e.g., using Mongoose for MongoDB)

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

    // Find the user by their username in the database
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Check if the provided password matches the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Create and send a JSON Web Token (JWT) for authentication
    const token = jwt.sign({ username: user.username }, 'your-secret-key');

    // You can also send the user data (without the password) if needed
    res.json({ message: 'Login successful', token, user: { username: user.username } });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Server error' });
  }
});



//server runs on a different port than front-end 
const port = process.env.PORT || 3001;

// Define outes and middleware here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
