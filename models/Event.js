const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  calendar: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'calendar',
  },
  event_description: {
    type: String,
  },

  event_priority: {
    type: String,
  },
  event_completed: {
    type: Boolean,
  },
  event_startDate: {
    type: Date,
  },
  event_endDate: {
    type: Date,
  },

  calendar_description: {
    type: String,
  },
});

module.exports = Event = mongoose.model('event', EventSchema);
