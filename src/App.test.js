import React from 'react';
import { render, getByTitle, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('app compiles and renders', () => {
  const { getByTitle } = render(<App />);
  const linkElement = getByTitle(/app/i);
  expect(linkElement).toBeInTheDocument();
});

test('inputs working as expected', () =>{
  render(<App/>);
  const zipInput = screen.getByPlaceholderText(/please enter zipcode/i);
  const phoneInput = screen.getByPlaceholderText(/please enter phone number/i);
  const mockZip = "33569";
  const mockPhone = "0005556702";
  fireEvent.change(zipInput, {target: {value: mockZip}});
  fireEvent.change(phoneInput, {target: {value: mockPhone}});
  expect(zipInput.value).toEqual(mockZip);
  expect(phoneInput.value).toEqual(mockPhone);
});