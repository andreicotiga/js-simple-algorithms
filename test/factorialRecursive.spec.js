import chai from 'chai';
import factorialRecursive from '../src/factorialRecursive';

let expect = chai.expect;

describe('factorialRecursive', () => {
	it('calculates correct value for a number', () => {
		let number = 5;
		let result = factorialRecursive(number);

		expect(result).to.equal(120);
	});

	it('calculates 1 for number 1', () => {
		let number = 1;
		let result = factorialRecursive(number);

		expect(result).to.equal(1);
	});

	it('throws for number 0', () => {
		let number = 0;

		expect(factorialRecursive.bind(null, number)).to.throw('Invalid number');
	});
});