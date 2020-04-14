import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import CreateEvent from './components/events/CreateEvent';
import DeleteEvent from './components/events/DeleteEvent';
import EditEvent from './components/events/EditEvent';
import EventsDisplay from './components/events/EventsDisplay';

class App extends Component {
  state = {
    date: new Date(),
    calendar_description: '',
    clickDay: false,
  };

  onChange = (date) => this.setState({ date });
  onClickDay = (calendar_description) =>
    this.setState({ calendar_description, clickDay: true });

  render() {
    return (
      <Router>
        <div className='container'>
          <nav className='navbar narbar-expand-lg navbar-light bg-light'>
            <Link to='/' className='navbar-brand'>
              <strong>Calendar Events App</strong>
            </Link>
            <div className='collapase navbar-collapase'>
              <ul className='navbar-nav mr-auto'>
                <li className='navbar-item'>
                  <Link to='/' className='nav-link'>
                    Calendar
                  </Link>
                </li>
                <li className='navbar-item'>
                  <Link to='/events' className='nav-link'>
                    Events
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />

          <h6 style={{ color: 'red' }}>
            Click on a calendar date to create an event
          </h6>
          <br />
          <div className='calendar'>
            <Calendar
              onChange={this.onChange}
              onClickDay={this.onClickDay}
              clickDay={this.state.calendar_description}
              value={this.state.date}
            />
          </div>
          <div>{this.state.clickDay && <CreateEvent />}</div>

          {/* <Route path='/' exact component={Calendar} /> */}
          <Route path='/edit/:id' component={EditEvent} />
          <Route path='/delete/id' component={DeleteEvent} />
          <Route path='/events' component={EventsDisplay} />
        </div>
      </Router>
    );
  }
}
export default App;
