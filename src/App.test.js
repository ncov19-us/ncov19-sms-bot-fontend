import React from 'react';
import { render, getByTitle } from '@testing-library/react';
import App from './App';

test('app compiles and renders', () => {
  const { getByTitle } = render(<App />);
  const linkElement = getByTitle(/app/i);
  expect(linkElement).toBeInTheDocument();
});
