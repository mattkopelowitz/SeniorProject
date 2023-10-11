const mongoose = require('mongoose');

// MongoDB connection URL
const mongoURI = 'mongodb+srv://mattkopelowitz:a3zDQ%40au4%40XaU36E@cluster0.zfsboxj.mongodb.net/'; 
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
