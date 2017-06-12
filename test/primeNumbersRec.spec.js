import chai from 'chai'
import primeNumbersRec from '../src/primeNumbersRec'

let expect = chai.expect;

describe('Prime Numbers Recursive', () => {
    it('should return correct prime numbers', () => {
        let list = primeNumbersRec(20);

        expect(list).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19]);
    })
});