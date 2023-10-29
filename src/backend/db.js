const mongoose = require('mongoose');

// MongoDB connection URL
const mongoURI = 'mongodb+srv://gatoradvisor2:gatoradvisor2@cluster.mongodb.net/database'; 
// Replace with your MongoDB URL


// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
