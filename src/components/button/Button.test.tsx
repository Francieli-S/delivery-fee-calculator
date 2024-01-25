import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('button renders correctly', () => {
    const onClickMock = jest.fn()
    render(
        <Button
        text='button text'
        onClick={onClickMock}
        />
    );

    const button = screen.getByRole('button', {name: 'button text' });
    expect(button).toBeInTheDocument();
    expect(onClickMock.call.length).toEqual(1)
  });
});