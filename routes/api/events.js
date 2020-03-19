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
      return res.status(404).json({ msg: 'No such calendar date' });
    }
    await event.save();
    res.json(event.calendars);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
