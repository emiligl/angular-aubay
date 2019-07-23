import { factorial } from "./08_testing";

describe('Cálculo del factorial', () => {    
    it('4 should be 4', () => {
        let x = 4
        expect(x).toBe(4)
    });

    it('5 should not be 4', () => {
        let x = 5
        expect(x).not.toBe(4)
    });

    it('0! should be 1', () => {
        let x = 0
        expect(factorial(x)).toBe(1)
    });

    it('1! should be 1', () => {
        let x = 1
        expect(factorial(x)).toBe(1)
    });

    it('5! should be 120', () => {
        let x = 5
        expect(factorial(x)).toBe(120)
    });

    it('-5! should throw error', () => {
        let x = -5
        // expect(factorial(x)).toThrow() // Esto falla hay que usar funcion anonima
        expect(()=> factorial(x)).toThrowError('Número negativo')
    });

    it('5.5! should throw error', () => {
        let x = 5.5
        // expect(factorial(x)).toThrowError()
        expect(()=> factorial(x)).toThrowError(/Número decimal/)
    });

});