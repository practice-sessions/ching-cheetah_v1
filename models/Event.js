const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  event_description: {
    type: String
  },

  event_priority: {
    type: String
  },
  event_completed: {
    type: Boolean
  },
  event_startDate: {
    type: Number
  },
  event_endDate: {
    type: Number
  }
});

module.exports = Event = mongoose.model('event', EventSchema);
