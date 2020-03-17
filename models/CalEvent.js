const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  event_description: {
    type: String
  },
  event_typeId: {
    type: Number
  },

  event_priority: {
    type: Number,
    default: 1
  },
  event_completed: {
    type: Boolean
  },
  event_startDate: {
    type: Number
  },
  event_endDate: {
    type: Number
  },
  event_startTime: {
    type: String
  },
  event_endTime: {
    type: String
  }
});

module.exports = CalEvent = mongoose.model('CalEvent', EventSchema);
