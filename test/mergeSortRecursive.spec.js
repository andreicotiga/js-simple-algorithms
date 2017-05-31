import chai from 'chai'
import mergeSortRecursive from '../src/mergeSortRecursive'

let expect = chai.expect;

describe('Merge Sort recursive', () => {
    it('should sort multiple element list', () => {
        let list = [23, 4, 42, 15, 16, 8];

        mergeSortRecursive(list);

        expect(list).to.deep.equal([4, 8, 15, 16, 23, 42]);
    })

    it('should sort two element list', () => {
        let list = [2, 1];

        mergeSortRecursive(list);

        expect(list).to.deep.equal([1, 2]);
    })

    it('should sort one element list', () => {
        let list = [5];

        mergeSortRecursive(list);

        expect(list).to.deep.equal([5]);
    })

    it('should sort empty list', () => {
        let list = [];

        mergeSortRecursive(list);

        expect(list).to.deep.equal([]);
    })
});