const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new mongoose.Schema({
  calendar: {
    type: Schema.Types.ObjectId,
    ref: 'calenders'
  },
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
  },

  events_types: [
    {
      calendar: {
        type: Schema.Types.ObjectId,
        ref: 'calendars'
      },
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
    }
  ]
});

module.exports = Event = mongoose.model('event', EventSchema);
