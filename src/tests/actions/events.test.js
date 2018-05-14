import { createEventSuccess } from '../../actions/events';

test('should setup add event action object with provided values', () => {
  const eventData = {
    firstName: 'Artur',
    lastName: 'Kozieł',
    createdAt: 1000,
    email: 'koziel.art@gmail.com'
  };
  const action = createEventSuccess(eventData);
  expect(action).toEqual({
    type: 'CREATE_EVENT_SUCCESS',
    event: {
      ...eventData,
    }
  });
});