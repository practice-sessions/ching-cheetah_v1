const mongoose = require('mongoose');

let CalEventSchema = new mongoose.Schema({
  event_description: {
    type: String
  },
  event_typeId: {
    type: Number
  },
  event_responsible: {
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
  },
  event_startTime: {
    type: String
  },
  event_endTime: {
    type: String
  }
});

module.exports = CalEvent = mongoose.model('calevent', CalEventSchema);
