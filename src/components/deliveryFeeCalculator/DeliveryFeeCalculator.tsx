import { useState } from 'react';
import { Button } from '../button/Button';
import { Input } from '../input/Input';
import { Output } from '../output/Output';
import { ButtonType, InputType } from '../../models';
import { calculateDeliveryPrice } from '../../functions/functions';

export const DeliveryFeeCalculator = () => {
  // ta gerando uma hora a menos
  // reset button, para initial value to empty, number X string
  // output 2.5 nao 2.50
  const now = new Date()
    .toISOString()
    .slice(0, new Date().toISOString().lastIndexOf(':'));
  const [cartValue, setCartValue] = useState<number>();
  const [deliveryDistance, setDeliveryDistance] = useState<number>();
  const [numberOfItems, setNumberOfItems] = useState<number>();
  const [orderDate, setOrderDate] = useState<string>(now);
  const [deliveryFee, setDeliveryFee] = useState<number>();
  const [isCalculating, setIsCalculating] = useState<boolean>(true);

  const calculateFee = (e: React.FormEvent) => {
    e.preventDefault();
    const newFee = calculateDeliveryPrice({
      cartValue,
      deliveryDistance,
      numberOfItems,
      orderDate: new Date(orderDate),
    });
    setDeliveryFee(newFee);
    setIsCalculating(false);
  };

  return (
    <>
      <h1>Delivery Fee Calculator</h1>
      <form onSubmit={calculateFee}>
        <Input
          label='Cart value (€)'
          htmlFor='cart-value'
          dataTestId='cartValue'
          inputType={InputType.NUMBER}
          id='cart-value'
          onChange={(value: number) => {
            setCartValue(value);
          }}
          value={cartValue}
          min='1'
          step='0.01'
          required={true}
        />
        <Input
          label='Delivery distance (m)'
          htmlFor='delivery-distance'
          dataTestId='deliveryDistance'
          inputType={InputType.NUMBER}
          id='delivery-distance'
          onChange={(value: number) => {
            setDeliveryDistance(value);
          }}
          value={deliveryDistance}
          min='1'
          required={true}
        />
        <Input
          label='Number of items'
          htmlFor='number-of-items'
          dataTestId='numberOfItems'
          inputType={InputType.NUMBER}
          id='number-of-items'
          onChange={(value: number) => {
            setNumberOfItems(value);
          }}
          value={numberOfItems}
          min='1'
          required={true}
        />
        <Input
          label='Order time (UTC)'
          htmlFor='order-time'
          dataTestId='orderTime'
          inputType={InputType.DATE_TIME}
          id='order-time'
          onChange={(value: string) => {
            setOrderDate(value);
          }}
          value={orderDate}
          min={now}
          required={true}
        />
        <Button
          // disabled={isCalculating}
          text='Calculate delivery price'
          type={ButtonType.SUBMIT}
          dataTestId='calculateDeliveryPrice'
        />
        <Output
          label='Delivery price:'
          output={deliveryFee}
          htmlFor='delivery-price'
          dataTestId='fee'
          id='delivery-price'
        />
        {!isCalculating && (
          <Button
            text='New calculation'
            type={ButtonType.BUTTON}
            dataTestId='newCalculation'
            onClick={() => {
              setCartValue(0),
                setDeliveryDistance(0),
                setNumberOfItems(0),
                setOrderDate(now),
                setDeliveryFee(0),
                setIsCalculating(true);
            }}
          />
        )}
      </form>
    </>
  );
};
