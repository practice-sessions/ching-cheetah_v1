const express = require('express');
const router = express.Router();
const Calendar = require('../../models/Calendar');
const Event = require('../../models/Event');

// @route GET api/calendar
// @dec Get all calendar

router.get('/', async (req, res) => {
  try {
    const calendars = await Calendar.find();
    res.json(calendars);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route POST api/calendar
// @dec Create calendar

router.post('/add', async (req, res) => {
  console.log(req.body);
  try {
    const newCalendar = new Calendar({
      calendar_description: req.body.calendar_description,
    });

    const calendar = await newCalendar.save();
    res.json(calendar);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route GET api/calendar/:id
// @dec Find calendar by id

router.get('/:id', async (req, res) => {
  let id = req.params.id;
  try {
    const calendar = await Calendar.findById(id);

    if (!calendar) {
      return res.status(404).json({ msg: 'Calendar not found' });
    }

    res.json(calendar);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
