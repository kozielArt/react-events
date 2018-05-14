import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: props.event ? props.event.firstName : '',
      lastName: props.event ? props.event.lastName : '',
      email: props.event ? props.event.email : '',
      createdAt: props.event ? moment(propss.event.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
  onFirstNameChange = (e) => {
    const firstName = e.target.value;
    this.setState(() => ({ firstName }));
  };
  onLastNameChange = (e) => {
    const lastName = e.target.value;
    this.setState(() => ({ lastName }));
  };
  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.firstName || !this.state.lastName || !this.state.email || !this.state.createdAt) {
      this.setState(() => ({ error: 'Please provide all the data to the form' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        createdAt: this.state.createdAt.valueOf(),
        email: this.state.email,
      });
    }
  };
  render() {
    return (
      <div className="container">
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}

        <form className="add-option" onSubmit={this.onSubmit}>
          <input className="add-option__input"
            type="text"
            placeholder="First name"
            autoFocus
            value={this.state.firstName}
            onChange={this.onFirstNameChange}
          />
          <input className="add-option__input"
            type="text"
            placeholder="Last name"
            value={this.state.lastName}
            onChange={this.onLastNameChange}
          />
          <input className="add-option__input"
            type="email"
            placeholder="E-mail"
            value={this.state.email}
            onChange={this.onEmailChange}
          >
          </input>
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <button className="button">Add Event</button>
        </form>
      </div>
    )
  }
}
