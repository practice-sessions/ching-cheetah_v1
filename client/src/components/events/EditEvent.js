import React, { Component } from 'react';
import axios from 'axios';

class EditEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      event_description: '',
      calendar_description: '',
      event_priority: '',
      event_startDate: '',
      event_endDate: '',
      event_completed: false,
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:4020/api/events' + this.props.match.params.id)
      .then((response) => {
        this.setState({
          event_decription: response.data.event_decription,
          calendar_description: response.data.calendar_description,
          event_priority: response.data.event_priority,
          event_startDate: response.data.event_startDate,
          event_endDate: response.data.event_endDate,
          event_completed: response.data.event_completed,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeEventDescription = (e) => {
    this.setState({
      event_description: e.target.value,
    });
  };

  onChangeCalendarDescription = (e) => {
    this.setState({
      calendar_description: e.target.value,
    });
  };

  onChangeEventPriority = (e) => {
    this.setState({
      event_priority: e.target.value,
    });
  };

  onChangeEventStartDate = (e) => {
    this.setState({
      event_startDate: e.target.value,
    });
  };

  onChangeEventEndDate = (e) => {
    this.setState({
      event_endDate: e.target.value,
    });
  };

  onChangeEventCompleted = (e) => {
    this.setState({
      event_completed: !this.state.event_completed,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const obj = {
      event_decription: this.state.event_decription,
      calendar_description: this.state.calendar_description,
      event_startDate: this.state.event_startDate,
      event_endDate: this.state.event_endDate,
      event_priority: this.state.event_priority,
      event_completed: this.state.event_completed,
    };

    console.log(obj);

    axios
      .post(
        'http://localhost:4020/api/events/update/' + this.props.match.params.id,

        obj
      )
      .then((res) => console.log(res.data));
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h3 align='center'>Edit Event</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Description:</label>
            <input
              type='text'
              className='form-control'
              value={this.state.event_description}
              onChange={this.onChangeEventDescription}
            />
          </div>

          <div className='form-group'>
            <label>Calendar Date</label>
            <input
              type='text'
              className='form-control'
              value={this.state.calendar_description}
              onChange={this.onChangeCalendarDescription}
            />
          </div>
          <div className='form-group'>
            <label>Start Date</label>
            <input
              type='date'
              className='form-control'
              value={this.state.event_startDate}
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

          <div className='form-check'>
            <input
              className='form-check-input'
              id='completedCheckbox'
              type='checkbox'
              name='completedCheckbox'
              onChange={this.onChangeEventCompleted}
              checked={this.state.event_completed}
              value={this.state.event_completed}
            />
            <label className='form-check-label' htmlFor='completedCheckbox'>
              Completed
            </label>
          </div>

          <div className='form-group'>
            <input
              type='submit'
              value='Update Event'
              className='btn btn-primary'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default EditEvent;
