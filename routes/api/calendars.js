const express = require('express');
const router = express.Router();
const Calendar = require('../../models/Calendar');
const Event = require('../../models/Event');

// @route POST api/calendar
// @dec Create calendar

router.post('/add', async (req, res) => {
  console.log(req.body);
  try {
    const newCalendar = new Calendar({
      calendar_description: req.body.calendar_description
    });

    const calendar = await newCalendar.save();
    res.json(calendar);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

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

module.exports = router;
