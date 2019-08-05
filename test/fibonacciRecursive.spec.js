import chai from 'chai'
import {
    getFibonacciRecursive
} from '../src/fibonacci'

let expect = chai.expect;

describe('fibonacciRecursive', () => {
    it('finds correct value for index 0', () => {

        var value = getFibonacciRecursive(0);

        expect(value).to.equal(0);
    })

    it('finds correct value for index 1', () => {

        var value = getFibonacciRecursive(1);

        expect(value).to.equal(1);
    })

    it('finds correct value for index', () => {

        var value = getFibonacciRecursive(10);

        expect(value).to.equal(55);
    })

    it('throws when position is lower than 0', () => {
        expect(getFibonacciRecursive.bind(null, -1)).to.throw('Invalid position');
    })
});