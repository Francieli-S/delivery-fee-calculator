//  cart value, number of items in the cart, time of the order, delivery distance.

export interface Cart {
  cartValue: number
  numberOfItems: number
  orderTime: string
  deliveryDistance: number
}

export const calculateDeliveryPrice = (cart: Cart): number => {
  if(cart.cartValue >= 200) return 0

  let deliveryFee: number = 0;
  deliveryFee += cart.cartValue < 10 ? 10 - cart.cartValue : 0

  return parseFloat(deliveryFee.toFixed(2))
};