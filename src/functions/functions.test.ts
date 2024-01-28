import { Cart, calculateDeliveryPrice } from "./functions";

const baseCart: Cart = {
    cartValue: 50,
    numberOfItems: 1,
    orderDate: new Date(),
    deliveryDistance: 1
}

describe('DeliveryFeeCalculator', () => {
    
    test('when distance is more than 1000m, add 1€ per each next 500m', () => {
        let result = calculateDeliveryPrice({...baseCart, deliveryDistance: 1000})
        expect(result).toBe(2)

        result = calculateDeliveryPrice({...baseCart, deliveryDistance: 1001})
        expect(result).toBe(3)

        result = calculateDeliveryPrice({...baseCart, deliveryDistance: 1500})
        expect(result).toBe(3)

        result = calculateDeliveryPrice({...baseCart, deliveryDistance: 1501})
        expect(result).toBe(4)
    })
    
    test('when cart value less than 10€ add difference as surcharded', () => {
        let result = calculateDeliveryPrice({...baseCart, cartValue: 0.01})
        expect(result).toBe(11.99)

        result = calculateDeliveryPrice({...baseCart, cartValue: 5})
        expect(result).toBe(7)

        result = calculateDeliveryPrice({...baseCart, cartValue: 9.99})
        expect(result).toBe(2.01)

        result = calculateDeliveryPrice({...baseCart, cartValue: 10})
        expect(result).toBe(2)
    })   

    test('when number of itens is equal or more then 5, add 0.5/item to delivery fee', () => {
        let result = calculateDeliveryPrice({...baseCart, numberOfItems: 4})
        expect(result).toBe(2)

        result = calculateDeliveryPrice({...baseCart, numberOfItems: 5})
        expect(result).toBe(4.5)

        result = calculateDeliveryPrice({...baseCart, numberOfItems: 10})
        expect(result).toBe(7)
    })

    test('when number of itens is more then 12, add 1.2 to delivery fee', () => {
        const result = calculateDeliveryPrice({...baseCart, numberOfItems: 14})
        expect(result).toBe(10.2)
    })

     //if cart value = 0, there is probably no delivery. Value could be yero maybe
     test('when cart value is equal or more than 200, delivery fee is 0', () => {
        let result = calculateDeliveryPrice({...baseCart, cartValue: 200})
        expect(result).toBe(0)

        result = calculateDeliveryPrice({...baseCart, cartValue: 201})
        expect(result).toBe(0)
    })
})