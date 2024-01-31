import { useState } from 'react';
import { Button } from '../button/Button';
import { Input } from '../input/Input';
import { Output } from '../output/Output';
import { ButtonType, InputType } from '../models';
import { calculateDeliveryPrice } from '../../functions/functions';
import './DeliveryFeeCalculator.css';

export const DeliveryFeeCalculator = () => {
  const getDateNow = () => {
    const timeZoneOffset = new Date().getTimezoneOffset() * 60000;
    return new Date(Date.now() - timeZoneOffset)
      .toISOString()
      .slice(0, new Date().toISOString().lastIndexOf(':'));
  };

  const [cartValue, setCartValue] = useState<number>(0);
  const [deliveryDistance, setDeliveryDistance] = useState<number>(0);
  const [numberOfItems, setNumberOfItems] = useState<number>(0);
  const [orderDate, setOrderDate] = useState<string>(getDateNow());
  const [deliveryFee, setDeliveryFee] = useState<number>(0);

  const calculateFee = (e: React.FormEvent) => {
    e.preventDefault();
    const newFee = calculateDeliveryPrice({
      cartValue,
      deliveryDistance,
      numberOfItems,
      orderDate: new Date(orderDate),
    });
    setDeliveryFee(newFee);
  };

  const outPutFormat = Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  });

  return (
    <div className='container'>
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
          min={getDateNow()}
          required={true}
        />
        <div className='container-buttons'>
          <Button
            text='Calculate'
            type={ButtonType.SUBMIT}
            dataTestId='calculateDeliveryPrice'
          />
          <Button
            text='Clean'
            type={ButtonType.BUTTON}
            dataTestId='clean'
            onClick={() => {
              setCartValue(0),
                setDeliveryDistance(0),
                setNumberOfItems(0),
                setOrderDate(getDateNow()),
                setDeliveryFee(0);
            }}
          />
        </div>
        <Output
          label='Delivery price:'
          output={outPutFormat.format(deliveryFee)}
          htmlFor='delivery-price'
          dataTestId='fee'
          id='delivery-price'
        />
      </form>
    </div>
  );
};
