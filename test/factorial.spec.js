import chai from 'chai';
import factorialRec from '../src/factorialRec';

let expect = chai.expect;

describe('Factorial recursive', () => {
	it('calculates correct value for a number', () => {
		let number = 5;
		let result = factorialRec(number);

		expect(result).to.equal(120);
	});

	it('calculates 1 for number 1', () => {
		let number = 1;
		let result = factorialRec(number);

		expect(result).to.equal(1);
	});

	it('throws for number 0', () => {
		let number = 0;

		expect(factorialRec.bind(null, number)).to.throw('Invalid number');
	});
});