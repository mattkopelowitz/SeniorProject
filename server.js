const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define outes and middleware here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
