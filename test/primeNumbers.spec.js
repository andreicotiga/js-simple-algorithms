import chai from 'chai'
import primeNumbers from '../src/primeNumbers'

let expect = chai.expect;

describe('Prime Numbers', () => {
    it('should return correct prime numbers', () => {
        let list = primeNumbers(20);

        expect(list).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19]);
    })
});