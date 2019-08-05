import chai from 'chai'
import quickSort from '../src/quickSort'

let expect = chai.expect;

describe('quickSort', () => {
    it('sorts list', () => {
        let list = [23, 4, 42, 15, 16, 8];

        list = quickSort(list);

        expect(list).to.deep.equal([4, 8, 15, 16, 23, 42]);
    })

    it('sorts list with duplicate elements', () => {
        let list = [23, 4, 42, 15, 16, 8, 23, 4];

        list = quickSort(list);

        expect(list).to.deep.equal([4, 4, 8, 15, 16, 23, 23, 42]);
    })

    it('sorts an already sorted list', () => {
        let list = [4, 8, 15, 16, 23, 42];

        list = quickSort(list);

        expect(list).to.deep.equal([4, 8, 15, 16, 23, 42]);
    })

    it('sorts an 1-element list', () => {
        let list = [5];

        list = quickSort(list);

        expect(list).to.deep.equal([5]);
    })

    it('sorts an empty list', () => {
        let list = [];

        list = quickSort(list);

        expect(list).to.deep.equal([]);
    })

    it('throws for null list', () => {
        expect(quickSort.bind(null, null)).to.throw('Invalid list');
    })
});