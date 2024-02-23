import { Cart, calculateDeliveryPrice } from '../functions';

const baseCart: Cart = {
  cartValue: 50,
  deliveryDistance: 1,
  numberOfItems: 1,
  orderDate: new Date(),
};

const minimalDeliveyFee = 2;
describe('DeliveryFeeCalculator', () => {
  test('when distance is less than or equal to 1000m, the minimal delivery fee is 2€', () => {
    const result = calculateDeliveryPrice({
      ...baseCart,
      deliveryDistance: 1000,
    });
    expect(result).toBe(2);
    expect(result).toBe(minimalDeliveyFee);
  });

  test('when distance is more than 1000m, add 1€ per each next 500m', () => {
    let result = calculateDeliveryPrice({
      ...baseCart,
      deliveryDistance: 1001,
    });
    expect(result).toBe(minimalDeliveyFee + 1);

    result = calculateDeliveryPrice({ ...baseCart, deliveryDistance: 1500 });
    expect(result).toBe(minimalDeliveyFee + 1);

    result = calculateDeliveryPrice({ ...baseCart, deliveryDistance: 1501 });
    expect(result).toBe(minimalDeliveyFee + 2);
  });

  test('when cart value less than 10€ add difference as surcharded', () => {
    let result = calculateDeliveryPrice({ ...baseCart, cartValue: 0.01 });
    expect(result).toBe(minimalDeliveyFee + 9.99);

    result = calculateDeliveryPrice({ ...baseCart, cartValue: 5 });
    expect(result).toBe(minimalDeliveyFee + 5);

    result = calculateDeliveryPrice({ ...baseCart, cartValue: 9.99 });
    expect(result).toBe(minimalDeliveyFee + 0.01);

    result = calculateDeliveryPrice({ ...baseCart, cartValue: 10 });
    expect(result).toBe(minimalDeliveyFee);
  });

  test('when number of itens is more then 4, add 0.5 per extra item to delivery fee', () => {
    let result = calculateDeliveryPrice({ ...baseCart, numberOfItems: 4 });
    expect(result).toBe(minimalDeliveyFee);

    result = calculateDeliveryPrice({ ...baseCart, numberOfItems: 5 });
    expect(result).toBe(minimalDeliveyFee + 0.5);

    result = calculateDeliveryPrice({ ...baseCart, numberOfItems: 10 });
    expect(result).toBe(minimalDeliveyFee + 3);
  });

  test('when number of itens is more then 12, add 1.2 to delivery fee', () => {
    let result = calculateDeliveryPrice({ ...baseCart, numberOfItems: 13 });
    expect(result).toBe(minimalDeliveyFee + 5.7);

    result = calculateDeliveryPrice({ ...baseCart, numberOfItems: 14 });
    expect(result).toBe(minimalDeliveyFee + 6.2);
  });

  test('when order date is during the Friday rush, 3-7pm, delivery fee * 1.2', () => {
    let result = calculateDeliveryPrice({
      ...baseCart,
      orderDate: new Date('2024-01-22T09:07'),
    });
    expect(result).toBe(minimalDeliveyFee);

    result = calculateDeliveryPrice({
      ...baseCart,
      orderDate: new Date('2024-01-22T17:00'),
    });
    expect(result).toBe(minimalDeliveyFee);

    result = calculateDeliveryPrice({
      ...baseCart,
      orderDate: new Date('2024-01-26T14:59'),
    });
    expect(result).toBe(minimalDeliveyFee);

    result = calculateDeliveryPrice({
      ...baseCart,
      orderDate: new Date('2024-01-26T19:01'),
    });
    expect(result).toBe(minimalDeliveyFee);

    result = calculateDeliveryPrice({
      ...baseCart,
      orderDate: new Date('2024-01-26T15:00'),
    });
    expect(result).toBe(minimalDeliveyFee * 1.2);

    result = calculateDeliveryPrice({
      ...baseCart,
      orderDate: new Date('2024-01-26T18:59'),
    });
    expect(result).toBe(minimalDeliveyFee * 1.2);
  });

  test('when delivery fee is more than 15€, the delivery fee is 15€', () => {
    const result = calculateDeliveryPrice({
      ...baseCart,
      cartValue: 1,
      deliveryDistance: 6501,
      numberOfItems: 14,
      orderDate: new Date('2024-01-26T18:59'),
    });
    expect(result).toBe(15);
  });

  test('when cart value is equal or more than 200, delivery fee is 0', () => {
    let result = calculateDeliveryPrice({ ...baseCart, cartValue: 200 });
    expect(result).toBe(0);

    result = calculateDeliveryPrice({ ...baseCart, cartValue: 201 });
    expect(result).toBe(0);
  });
});
