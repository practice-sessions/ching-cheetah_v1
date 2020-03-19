const express = require('express');
const router = express.Router();
const Event = require('../../models/Event');
const Calendar = require('../../models/Calendar');
const mongoose = require('mongoose');
require('date-format-lite');

// @route GET api/events
// @desc List all events

router.get('/', async (req, res) => {
  try {
    const events = await Event.find().sort({ date: -1 });
    res.json(events);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route GET api/events/:calendar.id
// @desc List all events by calendar id

router.get('/:calendar.id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(400).json({
        msg: 'Event does not exist'
      });
    }
    //Pull out calender
    const calendar = event.calendars.find(
      calendar => calendar.id === req.params.calendar.id
    );
    // Make sure calendar exist
    if (!calendar) {
      return res.status(404).json({ msg: 'No such calendar date for events' });
    }
    await event.save();
    res.json(event.calendars);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route POST api/events
// @desc Create an event

router.post('/add', async (req, res) => {
  try {
    const calendar = await Calendar.findById(req.calendar.id);

    const newEvents_type = new Events_types({
      event_description: req.body.event_description,
      event_priority: calendar.event_priority,
      event_completed: calendar.event_completed,
      event_startDate: calendar.event_startDate,
      event_endDate: calendar.event_endDate
    });
    event.events_types.unshift(newEvents_type);

    const event = await newEvents_type.save();
    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
