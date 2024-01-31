import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event'
import { DeliveryFeeCalculator } from '../DeliveryFeeCalculator';

const mockDate: string = '2023-01-01T01:01';
describe('DeliveryFeeCalculator', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date(mockDate + ':01.001Z'));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('renders correctly', () => {
    render(<DeliveryFeeCalculator />);

    const headingElement = screen.getByRole('heading', {name: 'Delivery Fee Calculator' });
    expect(headingElement).toBeInTheDocument();

    const cartValue = getByTestId('cartValue');
    expect(cartValue).toBeInTheDocument();
    expect(cartValue.value).toBe('0')

    const deliveryDistance = getByTestId('deliveryDistance');
    expect(deliveryDistance).toBeInTheDocument();
    expect(deliveryDistance.value).toBe('0')

    const numberOfItems = getByTestId('numberOfItems');
    expect(numberOfItems).toBeInTheDocument();
    expect(numberOfItems.value).toBe('0')

    const orderTime = getByTestId('orderTime');
    expect(orderTime).toBeInTheDocument();
    expect(orderTime.value).toBe(mockDate)
    
    const submitButton = getByTestId('calculateDeliveryPrice');
    expect(submitButton).toBeInTheDocument();

    const deliveryPrice = getByTestId('fee');
    expect(deliveryPrice).toBeInTheDocument();
    expect(deliveryPrice.value).toBe('€0.00')

    const cleanButton = getByTestId('clean');
    expect(cleanButton).toBeInTheDocument();
  });

  test('clean button cleans input fields', async () => {
    const userEvent = user.setup({ delay: null })
    render(<DeliveryFeeCalculator />);

    const cartValue = getByTestId('cartValue');
    await userEvent.type(cartValue, '10')
    expect(cartValue.value).toBe('10')

    const deliveryDistance = getByTestId('deliveryDistance');
    await userEvent.type(deliveryDistance, '1000')
    expect(deliveryDistance.value).toBe('1000')

    const numberOfItems = getByTestId('numberOfItems');
    await userEvent.type(numberOfItems, '5')
    expect(numberOfItems.value).toBe('5')

    const orderTime = getByTestId('orderTime');
    userEvent.clear(orderTime)
    await userEvent.type(orderTime, '2024-01-02T02:02')
    expect(orderTime.value).toBe('2024-01-02T02:02')

    await userEvent.click(getByTestId('clean'))

    expect(cartValue.value).toBe('0')
    expect(deliveryDistance.value).toBe('0')
    expect(numberOfItems.value).toBe('0')
    expect(orderTime.value).toBe(mockDate)
    expect(getByTestId('fee').value).toBe('€0.00')
  });

  test('submit button calculates delivery fee', async () => {
    const userEvent = user.setup({ delay: null })
    render(<DeliveryFeeCalculator />);

    const cartValue = getByTestId('cartValue');
    await userEvent.type(cartValue, '10')

    const deliveryDistance = getByTestId('deliveryDistance');
    await userEvent.type(deliveryDistance, '1000')

    const numberOfItems = getByTestId('numberOfItems');
    await userEvent.type(numberOfItems, '5')

    const orderTime = getByTestId('orderTime');
    userEvent.clear(orderTime)
    await userEvent.type(orderTime, '2024-01-02T02:02')

    await userEvent.click(getByTestId('calculateDeliveryPrice'))

    const output = getByTestId('fee');
    expect(output).toBeInTheDocument();
    expect(output.value).toBe('€2.50')
  });
});

const getByTestId = (testId: string): HTMLInputElement => {
  return screen.getByTestId(testId) as HTMLInputElement;
}