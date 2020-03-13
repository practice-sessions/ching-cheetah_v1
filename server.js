const express = require('express');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5030;
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/calevent', require('./routes/api/calevent'));
app.use('/api/calendar', require('./routes/api/calendar'));

app.listen(PORT, () => {
  console.log(`Server is live on PORT ${PORT}`);
});
