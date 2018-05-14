import React from 'react';
import { shallow } from 'enzyme';
import EventForm from '../../components/EventForm';

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<EventForm />);
  expect(wrapper).toMatchSnapshot();
});


test('should render error for invalid form submission', () => {
  const wrapper = shallow(<EventForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set first name on input change', () => {
  const value = 'Jan';
  const wrapper = shallow(<EventForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('firstName')).toBe(value);
});

test('should set last name on input change', () => {
  const value = 'Kowalski';
  const wrapper = shallow(<EventForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('lastName')).toBe(value);
});

test('should set email on input change', () => {
  const value = 'jkowalski@gmail.com';
  const wrapper = shallow(<EventForm />);
  wrapper.find('input').at(2).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('email')).toBe(value);
});
