import chai from 'chai'
import quickSort from '../src/quickSort'

let expect = chai.expect;

describe('Quick Sort', () => {
    it('should sort multiple element list', () => {
        let list = [23, 4, 42, 15, 16, 8];

        list = quickSort(list);
        
        expect(list).to.deep.equal([4, 8, 15, 16, 23, 42]);
    })

    it('should sort multiple element list with duplicates', () => {
        let list = [23, 4, 42, 15, 16, 8, 23, 4];

        list = quickSort(list);

        expect(list).to.deep.equal([4, 4, 8, 15, 16, 23, 23, 42]);
    })

    it('should sort already sorted list', () => {
        let list = [4, 8, 15, 16, 23, 42];

        quickSort(list);

        expect(list).to.deep.equal([4, 8, 15, 16, 23, 42]);
    })

    it('should sort two element list', () => {
        let list = [2, 1];

        list = quickSort(list);

        expect(list).to.deep.equal([1, 2]);
    })

    it('should sort one element list', () => {
        let list = [5];

        list = quickSort(list);

        expect(list).to.deep.equal([5]);
    })

    it('should sort empty list', () => {
        let list = [];

        list = quickSort(list);

        expect(list).to.deep.equal([]);
    })
});