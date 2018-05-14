import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';  
import eventsReducer from '../reducers/events';

export default () => {
  return createStore(eventsReducer, applyMiddleware(thunk))
};
