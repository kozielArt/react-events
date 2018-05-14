import uuid from 'uuid';
import Axios from 'axios';

const apiUrl = 'http://localhost:3000/events';
// ADD_EVENT
export const createEventSuccess = (event) => ({
  type: 'CREATE_EVENT_SUCCESS',
  event
});

export const createEventError = (event) => ({
  type: 'CREATE_EVENT_ERROR',
});

export const createEvent = (event) => {
  return (dispatch) => {
    return Axios.post(apiUrl, event)
      .then(response => {
        dispatch(createEventSuccess(response.data))
      })
      .catch(error => {
        dispatch(createEventError())
        throw (error);
      });
  };
}
