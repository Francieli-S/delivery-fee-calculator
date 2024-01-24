import { render, screen } from '@testing-library/react';
import { DeliveryFeeCalculator } from './DeliveryFeeCalculator';

describe('DeliveryFeeCalculator', () => {
  test('renders correctly', () => {
    render(<DeliveryFeeCalculator />);

    const headingElement = screen.getByRole('heading', {name: 'Delivery Fee Calculator' });
    expect(headingElement).toBeInTheDocument();

    const cartValueElement = screen.getByLabelText('Cart value');
    expect(cartValueElement).toBeInTheDocument();

    const cartValueId = screen.getByTestId('cartValue');
    expect(cartValueId).toBeInTheDocument();
    
    const currencySignElement = screen.getByText('$')
    expect(currencySignElement).toBeInTheDocument()

    const deliveryDistanceElement = screen.getByLabelText('Delivery distance');
    expect(deliveryDistanceElement).toBeInTheDocument();

    const deliveryDistanceId = screen.getByTestId('deliveryDistance');
    expect(deliveryDistanceId).toBeInTheDocument();

    const distanceSignElement = screen.getByText('m')
    expect(distanceSignElement).toBeInTheDocument()

    const numberOfItemsElement = screen.getByLabelText('Number of items');
    expect(numberOfItemsElement).toBeInTheDocument();

    const numberOfItemsId = screen.getByTestId('numberOfItems');
    expect(numberOfItemsId).toBeInTheDocument();

    const orderTimeElement = screen.getByLabelText('Time');
    expect(orderTimeElement).toBeInTheDocument();

    const orderTimeId = screen.getByTestId('orderTime');
    expect(orderTimeId).toBeInTheDocument();

    const submitButtonElement = screen.getByRole('button', {name: 'Calculate delivery price' });
    expect(submitButtonElement).toBeInTheDocument();

    const deliveryPriceElement = screen.getByLabelText('Delivery price:');
    expect(deliveryPriceElement).toBeInTheDocument();

    const deliveryPriceId = screen.getByTestId('fee');
    expect(deliveryPriceId).toBeInTheDocument();
  });
});
