import chai from 'chai'
import {
    bubbleSortRecursive
} from '../src/bubbleSort'

let expect = chai.expect;

describe('bubbleSortRecursive', () => {
    it('sorts list', () => {
        let list = [9, 99, 8, 1, 25, 9, 67];

        bubbleSortRecursive(list);

        expect(list).to.deep.equal([1, 8, 9, 9, 25, 67, 99]);
    })

    it('sorts list with duplicate elements', () => {
        let list = [23, 4, 42, 15, 16, 8, 23, 4];

        bubbleSortRecursive(list);

        expect(list).to.deep.equal([4, 4, 8, 15, 16, 23, 23, 42]);
    })

    it('sorts already sorted list', () => {
        let list = [4, 8, 15, 16, 23, 42];

        bubbleSortRecursive(list);

        expect(list).to.deep.equal([4, 8, 15, 16, 23, 42]);
    })

    it('sorts 1-element list', () => {
        let list = [100];

        bubbleSortRecursive(list);

        expect(list).to.deep.equal([100]);
    })

    it('sorts empty list', () => {
        let list = [];

        bubbleSortRecursive(list);

        expect(list).to.deep.equal([]);
    })

    it('throws for null list', () => {
        expect(bubbleSortRecursive.bind(null, null)).to.throw('Invalid list');
    })
});