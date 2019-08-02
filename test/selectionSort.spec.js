import chai from 'chai'
import selectionSort from '../src/selectionSort'

let expect = chai.expect;

describe('selectionSort', () => {
    it('sorts a list with multiple elements correctly', () => {
        let list = [23, 4, 42, 15, 16, 8];

        list = selectionSort(list);

        expect(list).to.deep.equal([4, 8, 15, 16, 23, 42]);
    })

    it('sorts a list with duplicate elements correctly', () => {
        let list = [23, 4, 42, 15, 16, 8, 23, 4];

        list = selectionSort(list);

        expect(list).to.deep.equal([4, 4, 8, 15, 16, 23, 23, 42]);
    })

    it('sorts an already sorted list correctly', () => {
        let list = [4, 8, 15, 16, 23, 42];

        list = selectionSort(list);

        expect(list).to.deep.equal([4, 8, 15, 16, 23, 42]);
    })

    it('sorts a 2-element list correctly', () => {
        let list = [2, 1];

        list = selectionSort(list);

        expect(list).to.deep.equal([1, 2]);
    })

    it('sorts a 1-element list correctly', () => {
        let list = [5];

        list = selectionSort(list);

        expect(list).to.deep.equal([5]);
    })

    it('sorts an empty list', () => {
        let list = [];

        list = selectionSort(list);

        expect(list).to.deep.equal([]);
    })

    it('throws when given a null list', () => {
        let list = null;

        expect(selectionSort.bind(list)).to.throw('Invalid list');
    })
});