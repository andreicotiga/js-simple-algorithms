import chai from 'chai'
import binarySearch from '../src/binarySearch'

let expect = chai.expect;

describe("binarySearch", () => {
    it("should return index of value in multiple element list", () => {
        var list = [4, 8, 15, 16, 23, 42];

        var index = binarySearch(list, 23);

        expect(index).to.equal(4);
    });

    it("should return -1 if value does not exist in multiple element list", () => {
        var list = [4, 8, 15, 16, 23, 42];

        var index = binarySearch(list, 5);

        expect(index).to.equal(-1);
    });

    it("should return -1 if value does not exist in 2 element list", () => {
        var list = [0, 1];

        var index = binarySearch(list, 5);

        expect(index).to.equal(-1);
    });

    it("should return 0 if element is first in the list", () => {
        var list = [5, 7];

        var index = binarySearch(list, 5);

        expect(index).to.equal(0);
    });

    it("should return correct index if value is last in the list", () => {
        var list = [0, 7, 9, 11, 21];

        var index = binarySearch(list, 21);

        expect(index).to.equal(4);
    });

});