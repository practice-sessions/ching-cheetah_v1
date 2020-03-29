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
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Event not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route POST api/events/calendar/:calendar_id
// @desc Create an event on a calendar

router.post('/calendar/:calendar_id', async (req, res) => {
  console.log(req.body);
  try {
    await await Event.findOne({ calendar: req.params.calendar_id });

    const newEvent = new Event({
      event_description: req.body.event_description,
      event_priority: req.body.event_priority,
      event_completed: req.body.event_completed,
      event_startDate: req.body.event_startDate,
      event_endDate: req.body.event_endDate,
      calendar_description: req.body.calendar_description,
      calendar: req.params.calendar_id
    });

    const event = await newEvent.save();
    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route DELETE api/events/:event_id/:calendar_id
// @desc Delete an event

router.delete('/:event_id/:calendar_id', async (req, res) => {
  try {
    await Calendar.findOne({ calendar: req.params.calendar_id });
    const event = await Event.findByIdAndRemove(req.params.event_id);

    //  Make sure event exists
    if (!event) {
      return res.status(404).json({ msg: 'Event not found' });
    }

    res.json({ msg: 'Event Deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
