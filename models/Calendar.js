const mongoose = require('mongoose');

const CalendarSchema = new mongoose.Schema({
  // event: {
  //   type: moogoose.Schema.Types.ObjectId,
  //   ref: 'event'
  // },

  calendar_description: {
    type: String
  },
  event_types: [
    {
      event_typeId: {
        type: Number
      },
      event_description: {
        type: String
      }
    }
  ]
});

module.exports = Calendar = mongoose.model('Calendar', CalendarSchema);
