//  cart value, number of items in the cart, time of the order, delivery distance.

export interface Cart {
  cartValue: number
  numberOfItems: number
  orderTime: object
  deliveryDistance: number
}

export const calculateDeliveryPrice = (cart: Cart): number => {
  if(cart.cartValue >= 200) return 0

  let deliveryFee: number = 0; // > 2 && < 15
  
  deliveryFee += cart.cartValue < 10 ? 10 - cart.cartValue : 0

  
  if(cart.deliveryDistance > 1000) {    
    deliveryFee += 2 // add 2 as initial later
    deliveryFee += (Math.ceil((cart.deliveryDistance - 1000) / 500)) 
 }

  if(cart.numberOfItems >= 5) {
    deliveryFee += cart.numberOfItems * 0.5
  } 
  
  if(cart.numberOfItems > 12) {
    deliveryFee += 1.2
  }

  return parseFloat(deliveryFee.toFixed(2))
};