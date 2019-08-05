import chai from 'chai'
import {
    findPrimeNumbers
} from '../src/primeNumbers'

let expect = chai.expect;

describe('findPrimeNumbers', () => {
    it('returns correct prime numbers', () => {
        let list = findPrimeNumbers(20);

        expect(list).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19]);
    })

    it('returns just 2 if the limit is 3', () => {
        let list = findPrimeNumbers(3);

        expect(list).to.deep.equal([2]);
    })

    it('returns empty list if limit is lower than 2', () => {
        let list = findPrimeNumbers(1);

        expect(list).to.deep.equal([]);
    })
});