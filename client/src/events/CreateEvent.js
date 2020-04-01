import React, { Component } from 'react';
import axios from 'axios';

class CreateEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      event_description: '',
      event_priority: '',
      event_completed: false,
      event_startDate: '',
      event_endDate: '',
      calendar_description: ''
    };
  }

  render() {
    return (
      <div>
        <h2>Create an Event</h2>
      </div>
    );
  }
}

export default CreateEvent;
