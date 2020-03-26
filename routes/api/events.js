const express = require('express');
const router = express.Router();
const Event = require('../../models/Event');
const Calendar = require('../../models/Calendar');
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

// @route GET api/events/:id
// @desc Get events by ID

router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({
        msg: 'Event does not exist'
      });
    }

    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route POST api/events
// @desc Create an event on a calendar

router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const calendar = await Calendar.findOne({ calendar: req.calendar.id });

    const newEvent = new Event({
      event_description: req.body.event_description,
      event_priority: req.body.event_priority,
      event_completed: req.body.event_completed,
      event_startDate: req.body.event_startDate,
      event_endDate: req.body.event_endDate,
      calendar: req.calendar.id
    });

    const event = await newEvent.save();
    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route DELETE api/events/:id
// @desc Delete event

router.delete('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ msg: 'Event not found' });
    }

    // Check calendar
    if (event.calendar.toString() !== req.calendar.id) {
      return res.status(401).json({ msg: 'Error occuied' });
    }

    await event.remove();

    res.json({ msg: 'Event deleted' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Event not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
