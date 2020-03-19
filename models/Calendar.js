const mongoose = require('mongoose');

const CalendarSchema = new mongoose.Schema({
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'events'
  },

  calendar_description: {
    type: String
  },

  eventId: {
    type: String
  }
});

module.exports = Calendar = mongoose.model('Calendar', CalendarSchema);
