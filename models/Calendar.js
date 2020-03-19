const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CalendarSchema = new mongoose.Schema({
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'events'
  },

  calendar_name: {
    type: String
  },

  events_types: [
    {
      event: {
        type: Schema.Types.ObjectId,
        ref: 'events'
      },
      event_description: {
        type: String
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
      }
    }
  ]
});

module.exports = Calendar = mongoose.model('Calendar', CalendarSchema);
