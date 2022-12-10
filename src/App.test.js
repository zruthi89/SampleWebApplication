import { render, screen } from '@testing-library/react';
import App from './App';

test('renders VideoJS Player', () => {
  render(<App />);
  const playerElement = screen.getByText(/VideoJS Player/i);
  expect(playerElement).toBeInTheDocument();
});
