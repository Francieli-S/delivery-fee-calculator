import { useState } from 'react';
import { Button } from '../button/Button';
import { Input } from '../input/Input';
import { Output } from '../output/Output';
import { InputType } from '../../models';
import { calculateDeliveryPrice } from '../../functions/functions';

export const DeliveryFeeCalculator = () => {
  const now = new Date().toISOString().slice(0, new Date().toISOString().lastIndexOf(":"))
  const [cartValue, setCartValue] = useState<number>(0);
  const [deliveryDistance, setDeliveryDistance] = useState<number>(0);
  const [numberOfItems, setNumberOfItems] = useState<number>(0);
  const [orderDate, setOrderDate] = useState<string>(now);
  const [deliveryFee, setDeliveryFee] = useState<number>(0);

  return (
    <>
      <h1>Delivery Fee Calculator</h1>
      <form>
        <Input
          label='Cart value'
          htmlFor='cart-value'
          dataTestId='cartValue'
          inputType={InputType.NUMBER}
          id='cinputTart-value'
          onChange={(value: number) => {setCartValue(value)}}
          value={cartValue}
        />
        <Input
          label='Delivery distance'
          htmlFor='delivery-distance'
          dataTestId='deliveryDistance'
          inputType={InputType.NUMBER}
          id='delivery-distance'
          onChange={(value: number) => {setDeliveryDistance(value)}}
          value={deliveryDistance}
        />
        <Input
          label='Number of items'
          htmlFor='number-of-items'
          dataTestId='numberOfItems'
          inputType={InputType.NUMBER}
          id='number-of-items'
          onChange={(value: number) => {setNumberOfItems(value)}}
          value={numberOfItems}
        />
        <Input
          label='Time'
          htmlFor='order-time'
          dataTestId='orderTime'
          inputType={InputType.DATE_TIME}
          id='order-time'
          onChange={(value: string) => {setOrderDate(value)}}
          min={now}
          value={orderDate}
        />
        <Button
          text='Calculate delivery price'
          onClick={() => {
            const newFee = calculateDeliveryPrice({
              cartValue,
              numberOfItems,
              orderDate: new Date(orderDate),
              deliveryDistance
            })
            setDeliveryFee(newFee)
          }
        }
        />
        <Output
          label='Delivery price:'
          output={deliveryFee}
          htmlFor='delivery-price'
          dataTestId='fee'
          id='delivery-price'
        />
      </form>
    </>
  );
};
