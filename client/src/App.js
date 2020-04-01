import React, { Fragment, Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from 'react-calendar';

class App extends Component {
  state = {
    date: ''
  };

  render() {
    return (
      <Fragment>
        <h1>Calendar Event App</h1>
        <div className='calendar'>
          <Calendar />
        </div>
      </Fragment>
    );
  }
}
export default App;
