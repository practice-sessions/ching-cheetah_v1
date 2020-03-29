const mongoose = require('mongoose');

const CalendarSchema = new mongoose.Schema({
  calendar_description: {
    type: String
  }
});

module.exports = Calendar = mongoose.model('Calendar', CalendarSchema);
