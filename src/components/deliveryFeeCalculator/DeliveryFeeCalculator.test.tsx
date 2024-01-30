import { render, screen } from '@testing-library/react';
import { DeliveryFeeCalculator } from './DeliveryFeeCalculator';

let mockDate: Date;

describe('DeliveryFeeCalculator', () => {
  beforeEach(() => {
    mockDate = new Date('2023-01-01T01:01:01.001Z');

    jest.useFakeTimers();
    jest.setSystemTime(mockDate);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('renders correctly', () => {
    render(<DeliveryFeeCalculator />);

    // é melhor separar os testes? tipo render heading, render cart value field, render button...
    // since I want to test the behaviour, add a test that when the button is clicked an output is displayed. Not only that .toHaveBeenCalled.

    const headingElement = screen.getByRole('heading', {name: 'Delivery Fee Calculator' });
    expect(headingElement).toBeInTheDocument();

    const cartValueElement = screen.getByLabelText('Cart value (€)');
    expect(cartValueElement).toBeInTheDocument();
    expect(cartValueElement).toHaveDisplayValue('')

    const cartValueId = screen.getByTestId('cartValue');
    expect(cartValueId).toBeInTheDocument();

    const deliveryDistanceElement = screen.getByLabelText('Delivery distance (m)');
    expect(deliveryDistanceElement).toBeInTheDocument();
    expect(deliveryDistanceElement).toHaveDisplayValue('')

    const deliveryDistanceId = screen.getByTestId('deliveryDistance');
    expect(deliveryDistanceId).toBeInTheDocument();

    const numberOfItemsElement = screen.getByLabelText('Number of items');
    expect(numberOfItemsElement).toBeInTheDocument();
    expect(numberOfItemsElement).toHaveDisplayValue('')

    const numberOfItemsId = screen.getByTestId('numberOfItems');
    expect(numberOfItemsId).toBeInTheDocument();

    const orderTimeElement = screen.getByLabelText('Order time (UTC)');
    expect(orderTimeElement).toBeInTheDocument();
    expect(orderTimeElement).toHaveDisplayValue(mockDate.toISOString().slice(0, new Date().toISOString().lastIndexOf(':')))
    
    const orderTimeId = screen.getByTestId('orderTime');
    expect(orderTimeId).toBeInTheDocument();

    const submitButtonElement = screen.getByRole('button', {name: 'Calculate delivery price'});
    expect(submitButtonElement).toBeInTheDocument();
    // expect(submitButtonElement).toBeDisabled() ver se precisa

    const submitButtonId = screen.getByTestId('calculateDeliveryPrice');
    expect(submitButtonId).toBeInTheDocument();

    const deliveryPriceElement = screen.getByLabelText('Delivery price:');
    expect(deliveryPriceElement).toBeInTheDocument();
    // expect(deliveryPriceElement.).toHaveDisplayValue('')

    const deliveryPriceId = screen.getByTestId('fee');
    expect(deliveryPriceId).toBeInTheDocument();

    // test the output

    const newCalculationButtonElement = screen.queryByRole('button', {name: 'New Calculation'})
    expect(newCalculationButtonElement).not.toBeInTheDocument()

    const newCalculationButtonId = screen.queryByTestId('newCalculation');
    expect(newCalculationButtonId).not.toBeInTheDocument();
  });
});
