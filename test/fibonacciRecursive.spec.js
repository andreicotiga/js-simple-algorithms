import chai from 'chai'
import {
    fibonacciRecursive
} from '../src/fibonacci'

let expect = chai.expect;

describe('fibonacciRecursive', () => {
    it('finds correct value for index 0', () => {

        var value = fibonacciRecursive(0);

        expect(value).to.equal(0);
    })

    it('finds correct value for index 1', () => {

        var value = fibonacciRecursive(1);

        expect(value).to.equal(1);
    })

    it('finds correct value for index', () => {

        var value = fibonacciRecursive(10);

        expect(value).to.equal(55);
    })

    it('throws when position is lower than 0', () => {
        expect(fibonacciRecursive.bind(null, -1)).to.throw('Invalid position');
    })
});