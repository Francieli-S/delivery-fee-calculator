import { Button } from '../button/Button';
import { Input } from '../input/Input';
import { Output } from '../output/Output';

export const DeliveryFeeCalculator = () => {

  const calculateDeliveryPrice = () => {
  }
  
  return (
    <>
      <h1>Delivery Fee Calculator</h1>
      <form>
        <Input
          label='Cart value'
          htmlFor='cart-value'
          dataTestId='cartValue'
          inputType='number'
          id='cart-value'
          labelDetail='$'
          // value='string'
          // onChange={() => {}}
        />
        <Input
          label='Delivery distance'
          htmlFor='delivery-distance'
          dataTestId='deliveryDistance'
          inputType='number'
          id='delivery-distance'
          labelDetail='m'
          // value='string'
          // onChange={() => {}}
        />
        <Input
          label='Number of items'
          htmlFor='number-of-items'
          dataTestId='numberOfItems'
          inputType='number'
          id='number-of-items'
          labelDetail=''
          // value='string'
          // onChange={() => {}}
        />
        <Input
          label='Time'
          htmlFor='order-time'
          dataTestId='orderTime'
          inputType='date'
          id='order-time'
          labelDetail='calendar'
          // value='string'
          // onChange={() => {}}
        />
        <Button
          text='Calculate delivery price'
          onClick={calculateDeliveryPrice}
        />
        <Output 
          label='Delivery price:'
          output={0}
          htmlFor='delivery-price'
          dataTestId='fee'
          id='delivery-price'
        />
      </form>
    </>
  );
};
