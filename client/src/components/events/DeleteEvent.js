import React, { Component } from 'react';
import axios from 'axios';

class DeleteEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      event_decription: '',
      calendar_description: '',
      event_priority: '',
      event_completed: false
    };
  }

  componentDidMount() {
    axios
      .get('http://api/events/' + this.props.match.event_id)
      .then(response => {
        this.setState({
          event_decription: response.data.event_decription,
          calendar_description: response.data.calendar_description,
          event_priority: response.data.event_priority
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  onChangeCalendarDescription = e => {
    this.setState({ event_decription: e.target.value });
  };

  onChangeCalendarDescription = e => {
    this.setState({ calendar_description: e.target.value });
  };

  onChangeEventPriority = e => {
    this.setState({ event_priority: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const obj = {
      event_decription: this.state.event_decription,
      calendar_description: this.state.calendar_description,
      event_priority: this.state.event_priority
    };

    console.log(obj);

    axios
      .delete(
        'http://api/events/delete/' +
          this.props.match.event_id +
          this.props.match.calendar_id,
        obj
      )
      .then(res => console.log(res.data));
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h3 align='center'>Delete Event</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Description:</label>
            <imput
              type='text'
              className='form-control'
              value={this.state.event_decription}
              onChange={this.onChangeEventDecription}
            />
          </div>

          <div className='form-group'>
            <label>Calendar Date:</label>
            <imput
              type='text'
              className='form-control'
              value={this.state.calendar_description}
              onChange={this.onChangeCalendarDescription}
            />
          </div>

          <div className='form-group'>
            <div className='form-check form-check-inline'>
              <imput
                className='form-check-imput'
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
              <imput
                className='form-check-input'
                type='radio'
                name='prioriyOptions'
                id='priorityMedium'
                value='Medium'
                checked={this.state.event_priority === 'Medium'}
                onChange={this.onChangeEventPriority}
              />
              <label className='form-check-label'>Medium</label>
            </div>
            <div className='form-check form-check-inline'>
              <imput
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
            <br />

            <div className='form-group'>
              <input
                type='submit'
                value='Delete Event'
                className='btn btn-danger'
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default DeleteEvent;
