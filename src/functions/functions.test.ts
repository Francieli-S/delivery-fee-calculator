import { Cart, calculateDeliveryPrice } from "./functions";

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

    test('when distance is more than 1000m, add 1€ per each next 500m', () => {
        let result = calculateDeliveryPrice({...baseCart, deliveryDistance: 1499})
        expect(result).toBe(3)

        result = calculateDeliveryPrice({...baseCart, deliveryDistance: 1500})
        expect(result).toBe(3)

        result = calculateDeliveryPrice({...baseCart, deliveryDistance: 1501})
        expect(result).toBe(4)
    })
})