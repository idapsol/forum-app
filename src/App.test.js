import { render, screen } from '@testing-library/react';
import App from './App';

test('forum', () => {
  render(<App />);
  const linkElement = screen.getByText(/forum/i);
  expect(linkElement).toBeInTheDocument();
});
