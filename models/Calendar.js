const mongoose = require('mongoose');

let CalendarSchema = new mongoose.Schema({
  event_description: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'calevent'
    }
  ],
  event_type: [
    {
      event_typeId: {
        type: Number
      },
      event_description: [
        {
          type: String,
          ref: 'calevent'
        }
      ]
    }
  ]
  // events: [{ CalEvent }]
});

module.exports = Calendar = mongoose.model('calendar', CalendarSchema);
