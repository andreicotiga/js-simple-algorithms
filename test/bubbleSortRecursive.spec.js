import chai from 'chai'
import bubbleSortRecursive from '../src/bubbleSortRecursive'

let expect = chai.expect;

describe('Bubble Sort Recursive', () => {
    it('should sort multiple element list', () => {
        let list = [9, 99, 8, 1, 25, 9, 67];

        bubbleSortRecursive(list);

        expect(list).to.deep.equal([1, 8, 9, 9, 25, 67, 99]);
    })

    it('should sort two element list', () => {
        let list = [68, 67];

        bubbleSortRecursive(list);

        expect(list).to.deep.equal([67, 68]);
    })

    it('should sort one element list', () => {
        let list = [100];

        bubbleSortRecursive(list);

        expect(list).to.deep.equal([100]);
    })

    it('should sort empty list', () => {
        let list = [];

        bubbleSortRecursive(list);

        expect(list).to.deep.equal([]);
    })
});