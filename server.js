const express = require('express');
const connectDB = require('./config/db');
const app = express();
const PORT = process.env.PORT || 5030;

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Route
//app.use('/api/events', require('./route/api/events'))

app.listen(PORT, () => {
  console.log(`Server is live on PORT ${PORT}`);
});
