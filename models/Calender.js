const mongoose = require('mongoose');

let CalenderSchema = new mongoose.Schema({
  event_description: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'calevent'
  },
  event_type: [
    {
      event_typeId: Number,
      event_description: String,
      ref: 'calevent'
    }
  ],
  events: [CalEvent]
});

module.exports = Calender = mongoose.model('calender', CalenderSchema);
