import chai from 'chai'
import mergeSort from '../src/mergeSort'

let expect = chai.expect;

describe('Merge Sort', () => {
    it('should sort multiple element list', () => {
        let list = [23, 4, 42, 15, 16, 8];

        list = mergeSort(list);

        expect(list).to.deep.equal([4, 8, 15, 16, 23, 42]);
    })

    it('should sort multiple element list with duplicates', () => {
        let list = [23, 4, 42, 15, 16, 8, 23, 4];

        list = mergeSort(list);

        expect(list).to.deep.equal([4, 4, 8, 15, 16, 23, 23, 42]);
    })

    it('should sort already sorted list', () => {
        let list = [4, 8, 15, 16, 23, 42];

        list = mergeSort(list);

        expect(list).to.deep.equal([4, 8, 15, 16, 23, 42]);
    })

    it('should sort two element list', () => {
        let list = [2, 1];

        list = mergeSort(list);

        expect(list).to.deep.equal([1, 2]);
    })

    it('should sort one element list', () => {
        let list = [5];

        list = mergeSort(list);

        expect(list).to.deep.equal([5]);
    })

    it('should sort empty list', () => {
        let list = [];

        list = mergeSort(list);

        expect(list).to.deep.equal([]);
    })
});