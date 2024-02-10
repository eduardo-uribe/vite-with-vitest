import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App component test', () => {
  test('loads and displays the board', async () => {
    // arrange
    const { getByText } = render(<App />);

    // assert
    expect(getByText('Next player: X')).toBeInTheDocument();
  });
});
