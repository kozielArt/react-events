const eventsReducerDefaultState = [];

export default (state = eventsReducerDefaultState, action) => {
  switch (action.type) {
    case 'CREATE_EVENT_SUCCESS':
      return {
        ...state,
        data: action
      };
    case 'CREATE_EVENT_ERROR':
      return {
        ...state,
        data: "Error. Try again."
      };
    default:
      return state;
  }
};
