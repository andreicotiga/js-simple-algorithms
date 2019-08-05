import chai from 'chai'
import {
    getFibonacci
} from '../src/fibonacci'

let expect = chai.expect;

describe('fibonacci', () => {
    it('finds correct value for index 0', () => {

        var value = getFibonacci(0);

        expect(value).to.equal(0);
    })

    it('finds correct value for index 1', () => {

        var value = getFibonacci(1);

        expect(value).to.equal(1);
    })

    it('finds correct value for index', () => {

        var value = getFibonacci(10);

        expect(value).to.equal(55);
    })

    it('throws when position is lower than 0', () => {
        expect(getFibonacci.bind(null, -1)).to.throw('Invalid position');
    })
});