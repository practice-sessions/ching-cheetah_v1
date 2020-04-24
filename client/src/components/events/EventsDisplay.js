import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Event = (props) => (
  <tr>
    <td className={props.event.event_completed ? 'completed' : ''}>
      {props.event.event_description}
    </td>
    <td className={props.event.event_completed ? 'completed' : ''}>
      {props.event.calendar_description}
    </td>

    <td className={props.event.event_completed ? 'completed' : ''}>
      {props.event.event_startDate}
    </td>
    <td className={props.event.event_completed ? 'completed' : ''}>
      {props.event.event_endDate}
    </td>
    <td className={props.event.event_completed ? 'completed' : ''}>
      {props.event.event_priority}
    </td>
    <td>
      <Link to={'/update/' + props.event._id}>Edit</Link>
    </td>

    <td>
      <Link to={'/delete/' + props.event._id}>Delete</Link>
    </td>
  </tr>
);

class EventsDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
  }
  componentDidMount() {
    axios
      .get('http://localhost:4020/api/events/events')
      .then((response) => {
        this.setState({ events: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  eventsDisplay() {
    return this.state.events.map((currentEvent, i) => {
      return <Event event={currentEvent} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3>Events</h3>
        <table className='table table-striped' style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Calendar Date</th>
              <th>Start Date</th>
              <th>Completed Date</th>
              <th>Priority</th>
              <th>Edit Event</th>
              <th>Delete Event</th>
            </tr>
          </thead>
          <tbody>{this.eventsDisplay()}</tbody>
        </table>
      </div>
    );
  }
}
export default EventsDisplay;
