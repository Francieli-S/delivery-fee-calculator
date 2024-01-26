import { Cart, calculateDeliveryPrice } from "./functions";

// test('calculateDeliveryPrice return price', () => {
//     const result = calculateDeliveryPrice({})
//     expect(result).toBe(11)
// })

const baseCart: Cart = {
    cartValue: 50,
    numberOfItems: 1,
    orderTime: "",
    deliveryDistance: 1
}

describe('DeliveryFeeCalculator', () => {
    
    test('when cart value less than 10€ add difference as surcharded', () => {
        let result = calculateDeliveryPrice({...baseCart, cartValue: 0.01})
        expect(result).toBe(9.99)

        result = calculateDeliveryPrice({...baseCart, cartValue: 5})
        expect(result).toBe(5)

        result = calculateDeliveryPrice({...baseCart, cartValue: 9.99})
        expect(result).toBe(0.01)

        result = calculateDeliveryPrice({...baseCart, cartValue: 10})
        expect(result).toBe(0)
    })



    //if cart value = 0, there is probably no delivery. Value could be yero maybe
    test('when cart value is equal or more than 200, delivery fee is 0', () => {
        let result = calculateDeliveryPrice({...baseCart, cartValue: 200})
        expect(result).toBe(0)

        result = calculateDeliveryPrice({...baseCart, cartValue: 201})
        expect(result).toBe(0)
    })
})