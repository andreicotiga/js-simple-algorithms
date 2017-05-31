import chai from 'chai'
import bubbleSort from '../src/bubbleSort'

let expect = chai.expect;

describe('Bubble Sort', () => {
    it('should sort multiple element list', () => {
        let list = [23, 4, 42, 15, 16, 8];

        bubbleSort(list);

        expect(list).to.deep.equal([4, 8, 15, 16, 23, 42]);
    })

    it('should sort two element list', () => {
        let list = [2, 1];

        bubbleSort(list);

        expect(list).to.deep.equal([1, 2]);
    })

    it('should sort one element list', () => {
        let list = [5];

        bubbleSort(list);

        expect(list).to.deep.equal([5]);
    })

    it('should sort empty list', () => {
        let list = [];

        bubbleSort(list);

        expect(list).to.deep.equal([]);
    })
});