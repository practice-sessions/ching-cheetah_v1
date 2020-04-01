import React, { Fragment, Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class App extends Component {
  state = {
    date: new Date()
  };

  onChange = date => this.setState({ date });

  render() {
    return (
      <Fragment>
        <h1 className='Heading'>Calendar Event App</h1>
        <div className='calendar'>
          <Calendar onChange={this.onChange} value={this.state.date} />
        </div>
      </Fragment>
    );
  }
}
export default App;
