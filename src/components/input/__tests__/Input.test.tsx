import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Input } from '../Input';
import { InputType } from '../../models';

describe('Input', () => {
  test('input renders correctly', () => {
    const onChangeMock = jest.fn();
    render(
      <Input
        label='Input value'
        htmlFor='input-value'
        dataTestId='inputValue'
        inputType={InputType.DATE_TIME}
        id='input-value'
        value=''
        onChange={(value: number) => onChangeMock(value)}
        min='1'
        step='1'
      />
    );

    const input = screen.getByTestId('inputValue');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('data-testid', 'inputValue');
    expect(input).toHaveAttribute('type', 'datetime-local');
    expect(input).toHaveAttribute('id', 'input-value');
    expect(input).toHaveAttribute('value', '');
    expect(input).toHaveAttribute('min', '1');
    expect(input).toHaveAttribute('step', '1');
    expect(onChangeMock).not.toHaveBeenCalled();
  });

  test('input field receives a value and call onChange', async () => {
    const onChangeMock = jest.fn();
    render(
      <Input
        label='Input value'
        htmlFor='input-value'
        dataTestId='inputValue'
        inputType={InputType.NUMBER}
        id='input-value'
        value='0'
        onChange={(value: number) => onChangeMock(value)}
      />
    );

    const input = screen.getByTestId('inputValue');

    await user.setup().type(input, '9');

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith('9');
  });
});
