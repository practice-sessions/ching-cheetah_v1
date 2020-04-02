import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import CreateEvent from './events/CreateEvent';
import DeleteEvent from './events/DeleteEvent';
import EditEvent from './events/EditEvent';
import EventsDisplay from './events/EventsDisplay';

class App extends Component {
  state = {
    date: new Date()
  };

  onChange = date => this.setState({ date });

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
                    Todos
                  </Link>
                </li>
                <li className='navbar-item'>
                  <Link to='/create' className='nav-link'>
                    Create Events
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path='/' exact component={App} />
          <Route path='/create' component={CreateEvent} />
          <Route path='/edit/:id' component={EditEvent} />
          <Route path='/delete/id' component={DeleteEvent} />
          <Route path='/events' component={EventsDisplay} />
          <div className='calendar'>
            <Calendar onChange={this.onChange} value={this.state.date} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
