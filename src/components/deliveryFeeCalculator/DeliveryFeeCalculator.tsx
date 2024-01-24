export const DeliveryFeeCalculator = () => {
  return (
    <>
      <h1>Delivery Fee Calculator</h1>
      <form>
        <div>
          <label htmlFor='cart-value'>Cart value</label>
          <input
            data-testid='cartValue'
            type='number'
            id='cart-value'
            value='number'
            onChange={() => {}}
          />
          <span>$</span>
        </div>
        <div>
          <label htmlFor='delivery-distance'>Delivery distance</label>
          <input
            data-testid='deliveryDistance'
            type='number'
            id='delivery-distance'
            value='number'
            onChange={() => {}}
          />          
          <span>m</span>
        </div>
        <div>
          <label htmlFor='number-of-items'>Number of items</label>
          <input
            data-testid='numberOfItems'
            type='number'
            id='number-of-items'
            value='number'
            onChange={() => {}}
          />
          <span>empty</span>
        </div>
        <div>
          <label htmlFor='order-time'>Time</label>
          <input
            data-testid='orderTime'
            type='date'
            id='order-time'
            value='string'
            onChange={() => {}}
          />
          <span>calendar</span>
        </div>
        <div>
          <button>Calculate delivery price</button>
        </div>
        <div>
          <label htmlFor='delivery-price'>Delivery price:</label>
          <output data-testid='fee' id='delivery-price'>
            {' '}
            2 
            {/* <span>euros</span> */}
          </output>
        </div>
      </form>
    </>
  );
};