const express = require('express');
const router = express.Router();
const Event = require('../../models/Event');
const Calendar = require('../../models/Calendar');
const mongoose = require('mongoose');
require('date-format-lite');

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

// @route POST api/events/add
// @desc Create new event

router.post('/add', (req, res) => {
  Calendar.findOne({ _id: req.body.calendar._id }, (err, calendar) => {
    if (err) {
      console.log(err);
    }
    let event_description = req.body.event_description;
    let event_priority = req.body.event_priority;
    let event_completed = req.body.event_completed;
    let event_startDate = Number((req.body.event_startDate + 'Z+0').date('U'));
    let event_endDate = Number((req.body.event_endDate + 'Z+0').date('U'));
    let event_startTime = req.body.event_startTime;
    let event_endTime = req.body.event_endTime;

    if (calendar.events) {
      Calendar.update(
        { _id: calendar._id },
        {
          $push: {
            events: {
              event_description: event_description,
              event_priority: event_priority,
              event_completed: event_completed,
              event_startDate: event_startDate,
              event_endDate: event_endDate,
              event_startTime: event_startTime,
              event_endTime: event_endTime,
              event_typeId: event_type
            }
          }
        },
        (err, newEvent) => {
          if (err) {
            console.log(err);
          }
          res.status(200).json({
            event: {
              event_startDate: event_startDate,
              event_endDate: event_endDate,
              origStart: req.body.event_endDate,
              converted: req.body.event_startDate
            }
          });
        }
      );
    } else {
      Calendar.update(
        { _id: calendar_id },
        {
          $addToSet: {
            events: {
              event_description: event_description,
              event_priority: event_priority,
              event_completed: event_completed,
              event_startDate: event_startDate,
              event_endDate: event_endDate,
              event_startTime: event_startTime,
              event_endTime: event_endTime,
              event_typeId: event_type
            }
          }
        },
        (err, newEvent) => {
          if (err) {
            console.log(err);
          }
          res.json({ event: newEvent });
        }
      );
    }
  });
});

module.exports = router;
