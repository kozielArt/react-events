import React from 'react';
import { connect } from 'react-redux';
import EventForm from './EventForm';
import Header from './Header';
import { createEvent } from '../actions/events';

const AddEventPage = (props) => (
  <div>
    <Header subtitle={"Add event"} />
    {props.event && props.event.type === "CREATE_EVENT_SUCCESS" ? <p className="result-message">Event saved in the database :)</p> : <p></p>}
    {props.event && props.event.type === "CREATE_EVENT_ERROR" ? <p className="result-message">Error when saving the event. Try again)</p> : <p></p>}
    <EventForm
      onSubmit={(userEvent) => {
        props.dispatch(createEvent(userEvent));
      }}
    />
  </div>
);

const mapStateToProps = (state) => {
  return {
    event: state.data
  };
};

export default connect(mapStateToProps)(AddEventPage)