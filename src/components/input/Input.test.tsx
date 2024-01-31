import { getByTestId, render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Input } from './Input';
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
        onChange={onChangeMock}
        min='1'
        step='1'
        required={true}
      />
    );

    const input = screen.getByLabelText('Input value');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('data-testid', 'inputValue');
    expect(input).toHaveAttribute('type', 'datetime-local');
    expect(input).toHaveAttribute('id', 'input-value');
    expect(input).toHaveAttribute('value', '');
    // expect(input).toHaveAttribute('onChange', 'onChangeMock') ??
    expect(onChangeMock).not.toHaveBeenCalled()
    expect(input).toHaveAttribute('min', '1');
    expect(input).toHaveAttribute('step', '1');
    // expect(input).toHaveAttribute('required', 'true') ??
  });
  test('input field receives a value and call onChange', async () => {
    const userEvent = user.setup({ delay: null });
    const onChangeMock = jest.fn();
    render(
      <Input
        label='Input value'
        htmlFor='input-value'
        dataTestId='inputValue'
        inputType={InputType.DATE_TIME}
        id='input-value'
        value=''
        onChange={onChangeMock}
        min='1'
        step='0.01'
        required={false}
      />
    );

    // const input = screen.getByLabelText('Input value') as HTMLInputElement;
    const inputValue = getByTestId('inputValue');
    userEvent.clear(input)
    await userEvent.type(input, '9.99');
  //   await userEvent.type(input, '9.99', {options.submitEditing = true});
  //   element: ReactTestInstance,
  // text: string,
  // options?: {
  //   skipPress?: boolean
  //   submitEditing?: boolean
  // }
    // expect(onChangeMock).toHaveBeenCalledTimes(1);
    //const value = screen.getAllByDisplayValue('9.99')
    expect(input.value).toHaveValue('9.99');
    //expect(value).toBe('9.99');
  });
});
