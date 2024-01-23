import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
  test('renders correctly', () => {
    render(<App />);
    
    const pageHeading = screen.getByRole('heading', {level: 1})
    expect(pageHeading).toBeInTheDocument()

    const textHeading = screen.getByText('hello')
    expect(textHeading).toBeInTheDocument()
  });
});
