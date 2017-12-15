'use strict'

import chai from 'chai';
import balancedParantheses from '../src/balancedParantheses';

let expect = chai.expect;

describe('Balanced Parantheses', () => {
	it('returns true for a balanced parantheses input', () => {
		let input = 'this ( is) [ a ] text where {the} parentheses [are] correct.';

		let isBalanced = balancedParantheses(input);

		expect(isBalanced).to.be.true;

	});

	it('returns true for a nested balanced parantheses input', () => {
		let input = 'this ( {is a text where [(the)] parentheses [are] correct}).';

		let isBalanced = balancedParantheses(input);

		expect(isBalanced).to.be.true;

	});

	it('returns true for parantheses only input', () => {
		let input = '[{()}]';

		let isBalanced = balancedParantheses(input);

		expect(isBalanced).to.be.true;

	});

	it('returns false for unbalanced input', () => {
		let input = 'this ( {is a text where [(the)] parentheses [are] not correct)}.';

		let isBalanced = balancedParantheses(input);

		expect(isBalanced).to.be.false;

	});

	it('returns false for input starting with closed parantheses', () => {
		let input = 'his ) {is a text where [(the)] parentheses [are] not correct}(.';

		let isBalanced = balancedParantheses(input);

		expect(isBalanced).to.be.false;

	});
});