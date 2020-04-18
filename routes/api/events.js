const express = require('express');
const router = express.Router();
const Event = require('../../models/Event');
const Calendar = require('../../models/Calendar');
require('date-format-lite');

// @route GET api/events
// @desc List all events

router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
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
    let id = req.params.id;
    console.log(id);
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({
        msg: 'Event does not exist',
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

// @route POST api/events/calendar/add/:cal_id
// @desc Create an event on a calendar

router.post('/calendar/add/:cal_id', async (req, res) => {
  try {
    let cal_id = req.params.id;
    await Event.findById(cal_id);

    const newEvent = new Event({
      event_description: req.body.event_description,
      event_priority: req.body.event_priority,
      event_completed: req.body.event_completed,
      event_startDate: req.body.event_startDate,
      event_endDate: req.body.event_endDate,
      calendar_description: req.body.calendar_description,
    });

    const event = await newEvent.save();
    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route DELETE api/events/delete/:id
// @desc Delete an event

router.delete('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    //  Make sure event exists
    if (!event) {
      return res.status(404).json({ msg: 'Event not found' });
    }

    await event.remove();

    res.json({ msg: 'Event Deleted' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Event not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route PUT api/events/update/:id/:cal_id
// @desc Edit an event

router.put('/update/:id/:cal_id', async (req, res) => {
  try {
    await Calendar.findOne({ calendar: req.params.cal_id });

    let event = await Event.findById(req.params.id);

    //  Make sure event exists
    if (!event) {
      return res.status(404).json({ msg: 'Event not found' });
    } else event.event_description = req.body.event_description;
    event.event_priority = req.body.event_priority;
    event.event_completed = req.body.event_completed;
    event.event_startDate = req.body.event_startDate;
    event.event_endDate = req.body.event_endDate;
    event.calendar_description = req.body.calendar_description;

    event.save();

    return res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
