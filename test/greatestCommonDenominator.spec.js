import chai from 'chai'
import greatestCommonDenominator from '../src/greatestCommonDenominator'

let expect = chai.expect;

describe('greatestCommonDenominator', () => {
	it('computes correct value for a and b where a > b', () => {

		let a = 39;
		let b = 26;

		let gcd = greatestCommonDenominator(a, b);

		expect(gcd).to.equal(13);
	})

	it('computes correct value for a and b where a < b', () => {

		let a = 34;
		let b = 102;

		let gcd = greatestCommonDenominator(a, b);

		expect(gcd).to.equal(34);
	})

	it('computes 1 as greatest common denominator of 2 prime numbers', () => {

		let a = 23;
		let b = 47;

		let gcd = greatestCommonDenominator(a, b);

		expect(gcd).to.equal(1);
	})
});