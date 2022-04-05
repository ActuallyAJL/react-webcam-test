// This is not my original work, but was created by following the tutorial found here:

// https://itnext.io/accessing-the-webcam-with-javascript-and-react-33cbe92f49cb

// All credit for this app goes to Gökhan İpek , @ https://gokhanipek.medium.com/

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
