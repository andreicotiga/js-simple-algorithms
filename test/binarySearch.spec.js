import chai from 'chai'
import binarySearch from '../src/binarySearch'

let expect = chai.expect;

describe("binarySearch", () => {
    it("returns the index of value in the list", () => {
        var list = [4, 8, 15, 16, 23, 42];

        var index = binarySearch(list, 23);

        expect(index).to.equal(4);
    });

    it("returns -1 if value does not exist in the list", () => {
        var list = [4, 8, 15, 16, 23, 42];

        var index = binarySearch(list, 5);

        expect(index).to.equal(-1);
    });

    it("returns 0 if the value is the first in the list", () => {
        var list = [5, 7];

        var index = binarySearch(list, 5);

        expect(index).to.equal(0);
    });

    it("returns correct index if value is last in the list", () => {
        var list = [0, 7, 9, 11, 21];

        var index = binarySearch(list, 21);

        expect(index).to.equal(4);
    });

    it('throws for null list', () => {
        expect(binarySearch.bind(null, null, 5)).to.throw('Invalid list');
    });

    it('throws for null value', () => {
        var list = [0, 7, 9, 11, 21];

        expect(binarySearch.bind(null, list, null)).to.throw('Invalid value');
    });

});