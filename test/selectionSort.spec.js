import chai from 'chai'
import selectionSort from '../src/selectionSort'

let expect = chai.expect;

describe('Selection Sort', () => {
    it('should sort multiple element list', () => {
        let list = [23, 4, 42, 15, 16, 8];

        list = selectionSort(list);
        
        expect(list).to.deep.equal([4, 8, 15, 16, 23, 42]);
    })

    it('should sort multiple element list with duplicates', () => {
        let list = [23, 4, 42, 15, 16, 8, 23, 4];

        list = selectionSort(list);

        expect(list).to.deep.equal([4, 4, 8, 15, 16, 23, 23, 42]);
    })

    it('should sort already sorted list', () => {
        let list = [4, 8, 15, 16, 23, 42];

        list = selectionSort(list);

        expect(list).to.deep.equal([4, 8, 15, 16, 23, 42]);
    })

    it('should sort two element list', () => {
        let list = [2, 1];

        list = selectionSort(list);

        expect(list).to.deep.equal([1, 2]);
    })

    it('should sort one element list', () => {
        let list = [5];

        list = selectionSort(list);

        expect(list).to.deep.equal([5]);
    })

    it('should sort empty list', () => {
        let list = [];

        list = selectionSort(list);

        expect(list).to.deep.equal([]);
    })
});