export interface Cart {
  cartValue: number;
  deliveryDistance: number;
  numberOfItems: number;
  orderDate: Date;  
}

export const calculateDeliveryPrice = (cart: Cart): number => {
  if (cart.cartValue >= 200) return 0;

  let deliveryFee: number = 2;

  if(cart.cartValue < 10) {
    deliveryFee += (10 - cart.cartValue)
  }

  if (cart.deliveryDistance > 1000) {
    deliveryFee += Math.ceil((cart.deliveryDistance - 1000) / 500);
  }

  if (cart.numberOfItems >= 5) {
    // deliveryFee += cart.numberOfItems * 0.5;
    // it is not rigth
    deliveryFee += (cart.numberOfItems - 4) * 0.5;
    // 'an additional 50 cent surcharge is added for each item above and including the fifth item..'
    // maybe 0.5 is not applyed to item 1, 2, 3, and 4!
  }

  if (cart.numberOfItems > 12) {
    deliveryFee += 1.2;
  }

  if(isRushHour(cart.orderDate)) {
    deliveryFee *= 1.2
  }

  if(deliveryFee > 15) {
    deliveryFee = 15
  }

  return parseFloat(deliveryFee.toFixed(2));
};

const isRushHour = (timestamp: Date): boolean => {
  const daysOfWeek = ['Sunday', 'Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const weekDay = daysOfWeek[timestamp.getDay()]
  const hour = timestamp.getHours()
  
  return weekDay === 'Friday' && hour >= 15 && hour < 19
}