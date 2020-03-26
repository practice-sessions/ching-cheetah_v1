const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
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
    type: Date
  },
  event_endDate: {
    type: Date
  }

  // events_types: [
  //   {
  //     calendar: {
  //       type: Schema.Types.ObjectId,
  //       ref: 'calendars'
  //     },
  //     event_description: {
  //       type: String
  //     },

  //     event_priority: {
  //       type: String
  //     },
  //     event_completed: {
  //       type: Boolean
  //     },
  //     event_startDate: {
  //       type: Date
  //     },
  //     event_endDate: {
  //       type: Date
  //     }
  //   }
  // ]
});

module.exports = Event = mongoose.model('event', EventSchema);
