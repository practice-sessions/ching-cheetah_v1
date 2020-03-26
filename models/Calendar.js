const mongoose = require('mongoose');

const CalendarSchema = new mongoose.Schema({
  calendar_description: {
    type: String
  }

  // eventId: {
  //   type: String,
  //   required: true
  // }
});

module.exports = Calendar = mongoose.model('Calendar', CalendarSchema);
