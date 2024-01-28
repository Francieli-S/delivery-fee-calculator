import { render, screen } from '@testing-library/react';
import { Input } from './Input';
import { InputType } from '../../models';

describe('Input', () => {
  test('input renders correctly', () => {
    render(
        <Input
          label='Input value'
          htmlFor='input-value'
          dataTestId='inputValue'
          inputType={InputType.DATE_TIME}
          id='input-value'
          onChange={jest.fn()}
          value='initial-value'
        />
    );

    const input = screen.getByLabelText('Input value');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('data-testid', 'inputValue')
    expect(input).toHaveAttribute('type', 'datetime-local')
    expect(input.id).toEqual('input-value')       
    //expect(input.value).toEqual('initial-value') 
  });
});
