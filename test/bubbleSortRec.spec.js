import chai from 'chai'
import bubbleSortRec from '../src/bubbleSortRec'

let expect = chai.expect;

describe('Bubble Sort Recursive', () => {
    it('should sort multiple element list', () => {
        let list = [9, 99, 8, 1, 25, 9, 67];

        bubbleSortRec(list);

        expect(list).to.deep.equal([1, 8, 9, 9, 25, 67, 99]);
    })

    it('should sort multiple element list with duplicates', () => {
        let list = [23, 4, 42, 15, 16, 8, 23, 4];

        bubbleSortRec(list);

        expect(list).to.deep.equal([4, 4, 8, 15, 16, 23, 23, 42]);
    })

    it('should sort already sorted list', () => {
        let list = [4, 8, 15, 16, 23, 42];

        bubbleSortRec(list);

        expect(list).to.deep.equal([4, 8, 15, 16, 23, 42]);
    })

    it('should sort two element list', () => {
        let list = [68, 67];

        bubbleSortRec(list);

        expect(list).to.deep.equal([67, 68]);
    })

    it('should sort one element list', () => {
        let list = [100];

        bubbleSortRec(list);

        expect(list).to.deep.equal([100]);
    })

    it('should sort empty list', () => {
        let list = [];

        bubbleSortRec(list);

        expect(list).to.deep.equal([]);
    })
});