import React, { Component } from 'react';
import axios from 'axios';

class CreateEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      event_description: '',
      event_priority: '',
      event_startDate: '',
      event_endDate: '',
      calendar_description: '',
      event_completed: false
    };
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create an Event</h3>

        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Description: </label>
            <input
              type='text'
              className='form-control'
              value={this.state.event_description}
              onChange={this.onChangeEventDescription}
            />
          </div>

         

          <div className='form-group'>
            <label>Start Date: </label>
            <input
              type='date'
              className='form-control'
              value={this.state.event_startDate:}
              onChange={this.onChangeEventStartDate}
            />
          </div>

          <div className='form-group'>
            <label>Completion Date: </label>
            <input
              type='date'
              className='form-control'
              value={this.state.event_endDate}
              onChange={this.onChangeEventEndDate}
            />
          </div>

          <div className='form-group'>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='priorityOptions'
                id='priorityLow'
                value='Low'
                checked={this.state.event_priority === 'Low'}
                onChange={this.onChangeEventPriority}
              />
              <label className='form-check-label'>Low</label>
            </div>

            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='priorityOptions'
                id='priorityMedium'
                value='Medium'
                checked={this.state.event_priority === 'Medium'}
                onChange={this.onChangeEventPriority}
              />
              <label className='form-check-label'>Medium</label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='priorityOptions'
                id='priorityHigh'
                value='High'
                checked={this.state.event_priority === 'High'}
                onChange={this.onChangeEventPriority}
              />
              <label className='form-check-label'>High</label>
            </div>
          </div>

          <div className='form-group'>
            <input
              type='submit'
              value='Create Todo'
              className='btn btn-primary'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateEvent;
