import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event'
import { Button } from './Button';

describe('Button', () => {
  test('button renders correctly', () => {
    const onClickMock = jest.fn();
    render(<Button text='button text' onClick={onClickMock} />);
    const button = screen.getByRole('button', { name: 'button text' });
    expect(button).toBeInTheDocument();
    expect(onClickMock).toHaveBeenCalledTimes(0)
  });

  test('button calls the function when it is clicked', async () => {
    const onClickMock = jest.fn();
    user.setup()
    render(<Button text='button text' onClick={onClickMock} />);
    const button = screen.getByRole('button', { name: 'button text' });
    await user.click(button)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  });
});
