const express = require('express');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 4020;
const app = express();
const cors = require('cors');

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());
// Define Routes
app.use('/api/events', require('./routes/api/events'));
app.use('/api/calendar', require('./routes/api/calendars'));

app.listen(PORT, () => {
  console.log(`Server is live on PORT ${PORT}`);
});
