import chai from 'chai'
import fibonacci from '../src/fibonacci'

let expect = chai.expect;

describe('Fibonacci ', () => {
    it('finds correct value for index 0', () => {

        var value = fibonacci(0);

        expect(value).to.equal(0);
    })

    it('finds correct value for index 1', () => {

        var value = fibonacci(1);

        expect(value).to.equal(1);
    })

    it('finds correct value for index', () => {

        var value = fibonacci(10);

        expect(value).to.equal(55);
    })
});