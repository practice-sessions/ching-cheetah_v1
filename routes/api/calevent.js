const express = require('express');
const router = express.Router();
const CalEvent = require('../../models/CalEvent');
const Calendar = require('../../models/Calendar');
const mongoose = require('mongoose');

// @route GET api/events
// @desc List all events

router.get('/', (req, res) => {
  let start = Number(req.body.event_startDate.date('U'));
  let end = Number(req.body.event_endDate.date('U'));

  if (req.body.calendar && req.body.calendar.id) {
    Calendar.aggregate([
      { $match: { _id: mongoose.Types.ObjectId(req.body.calendar._id) } },
      { $unwind: '$events' },
      { $match: { 'events.event_startDate': { $gte: start, $lte: end } } }
    ]);
  }

  (events, err) => {
    if (err) {
      console.log(err);
    }
    if (events) {
      res.json({ events: events });
    }
  };
});

module.exports = router;
