import { render, screen } from '@testing-library/react';
import { Output } from '../Output';

describe('Output', () => {
  test('output renders correctly', () => {
    render(
      <Output
        label='Output value'
        output={'123456'}
        htmlFor='output-value'
        dataTestId='outputValue'
        id='output-value'
      />
    );

    const output = screen.getByTestId('outputValue');
    expect(output).toBeInTheDocument();
    expect(output).toHaveAttribute('id', 'output-value');
    expect(output).toHaveValue('123456');
  });

  test('output renders correctly without value', () => {
    render(
      <Output
        label='Other output value'
        htmlFor='other-output-value'
        dataTestId='otherOutputValue'
        id='other-output-value'
      />
    );

    const output = screen.getByTestId('otherOutputValue');
    expect(output).toBeInTheDocument();
    expect(output).toHaveValue('');
  });
});
