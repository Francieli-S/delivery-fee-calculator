import { Button } from '../button/Button';
import { Input } from '../input/Input';
import { Output } from '../output/Output';
import { InputType } from '../../models';
import { calculateDeliveryPrice } from '../../functions/functions';

export const DeliveryFeeCalculator = () => {
  return (
    <>
      <h1>Delivery Fee Calculator</h1>
      <form>
        <Input
          label='Cart value'
          htmlFor='cart-value'
          dataTestId='cartValue'
          inputType={InputType.NUMBER}
          id='cart-value'
          labelDetail='€'
          // value='string'
          // onChange={() => {}}
        />
        <Input
          label='Delivery distance'
          htmlFor='delivery-distance'
          dataTestId='deliveryDistance'
          inputType={InputType.NUMBER}
          id='delivery-distance'
          labelDetail='m'
          // value='string'
          // onChange={() => {}}
        />
        <Input
          label='Number of items'
          htmlFor='number-of-items'
          dataTestId='numberOfItems'
          inputType={InputType.NUMBER}
          id='number-of-items'
          labelDetail=''
          // value='string'
          // onChange={() => {}}
        />
        <Input
          label='Time'
          htmlFor='order-time'
          dataTestId='orderTime'
          inputType={InputType.DATE_TIME}
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
