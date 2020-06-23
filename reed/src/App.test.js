import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Search button', () => {
  const { getByText } = render(<App />);
  const searchButton = getByText(/Search/i);
  expect(searchButton).toBeInTheDocument();
});
