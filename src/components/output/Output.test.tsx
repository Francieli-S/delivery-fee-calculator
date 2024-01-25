import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import { Output } from './Output';

describe('Output', () => {
  test('output renders correctly', () => {
    render(
      <Output
        label='Output value'
        output={123456}
        htmlFor='output-value'
        dataTestId='outputValue'
        id='output-value'
      />
    );

    const output = screen.getByLabelText('Output value');
    expect(output).toBeInTheDocument();
    expect(output).toHaveAttribute('data-testid', 'outputValue');
    expect(output.id).toEqual('output-value');
    expect(output.childNodes.length).toEqual(1);
    expect(within(output).getByText('123456')).toBeInTheDocument();
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

    const output = screen.getByLabelText('Other output value');
    expect(output).toBeInTheDocument();
    expect(output).toHaveAttribute('data-testid', 'otherOutputValue');
    expect(output.id).toEqual('other-output-value');
    expect(output.childNodes.length).toEqual(0);
  });
});
