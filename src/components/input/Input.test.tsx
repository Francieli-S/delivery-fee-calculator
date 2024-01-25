import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  test('input renders correctly', () => {
    render(
        <Input
          label='Input value'
          htmlFor='input-value'
          dataTestId='inputValue'
          inputType='date'
          id='input-value'
          labelDetail='labelDetail'
        />
    );

    const input = screen.getByLabelText('Input value');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('data-testid', 'inputValue')
    expect(input).toHaveAttribute('type', 'date')
    expect(input.id).toEqual('input-value')       
    
    const labelDetail = screen.getByText('labelDetail')
    expect(labelDetail).toBeInTheDocument()
  });
});
