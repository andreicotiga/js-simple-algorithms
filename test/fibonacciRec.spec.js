import chai from 'chai'
import fibonacciRec from '../src/fibonacciRec'

let expect = chai.expect;

describe('Fibonacci Recursive', () => {
    it('finds correct value for index 0', () => {

        var value = fibonacciRec(0);

        expect(value).to.equal(0);
    })

    it('finds correct value for index 1', () => {

        var value = fibonacciRec(1);

        expect(value).to.equal(1);
    })

    it('finds correct value for index', () => {

        var value = fibonacciRec(10);

        expect(value).to.equal(55);
    })
});