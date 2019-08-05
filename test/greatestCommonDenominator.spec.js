import chai from 'chai'
import getGreatestCommonDenominator from '../src/greatestCommonDenominator'

let expect = chai.expect;

describe('greatestCommonDenominator', () => {
	it('computes correct value for a and b where a > b', () => {

		let a = 39;
		let b = 26;

		let gcd = getGreatestCommonDenominator(a, b);

		expect(gcd).to.equal(13);
	})

	it('computes correct value for a and b where a < b', () => {

		let a = 34;
		let b = 102;

		let gcd = getGreatestCommonDenominator(a, b);

		expect(gcd).to.equal(34);
	})

	it('computes 1 as greatest common denominator of 2 prime numbers', () => {

		let a = 23;
		let b = 47;

		let gcd = getGreatestCommonDenominator(a, b);

		expect(gcd).to.equal(1);
	})

	it('throws if a is null', () => {

		let a = null;
		let b = 47;

		expect(getGreatestCommonDenominator.bind(null, a, b)).to.throw('Invalid arguments');
	})

	it('throws if b is null', () => {

		let a = 23;
		let b = null;

		expect(getGreatestCommonDenominator.bind(null, a, b)).to.throw('Invalid arguments');
	})
});