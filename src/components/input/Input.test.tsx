import { render, screen } from '@testing-library/react';
import { Input } from './Input';
import { InputType } from '../../models';
import test from 'node:test';

describe('Input', () => {
  test('input renders correctly', () => {
    const onChangeMock = jest.fn()
    render(
        <Input
          label='Input value'
          htmlFor='input-value'
          dataTestId='inputValue'
          inputType={InputType.DATE_TIME}
          id='input-value'
          onChange={onChangeMock}
          value='initial-value'
        />
    );

    const input = screen.getByLabelText('Input value') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('data-testid', 'inputValue')
    expect(input.type).toEqual('datetime-local')
    expect(input.id).toEqual('input-value')  
    expect(input).toHaveAttribute('value', 'initial-value')     
    // expect(input.value).toBe('initial-value')
    // expect(input.onchange).toBe(onChangeMock)      
  });
});
