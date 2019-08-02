'use strict'

import chai from 'chai';
import hasBalancedParentheses from '../src/balancedParentheses';

let expect = chai.expect;

describe('hasBalancedParentheses', () => {
	it('returns true for a balanced parentheses input', () => {
		let input = 'this ( is) [ a ] text where {the} parentheses [are] correct.';

		let isBalanced = hasBalancedParentheses(input);

		expect(isBalanced).to.be.true;

	});

	it('returns true for a nested balanced parentheses input', () => {
		let input = 'this ( {is a text where [(the)] parentheses [are] correct}).';

		let isBalanced = hasBalancedParentheses(input);

		expect(isBalanced).to.be.true;

	});

	it('returns true for parentheses only input', () => {
		let input = '[{()}]';

		let isBalanced = hasBalancedParentheses(input);

		expect(isBalanced).to.be.true;

	});

	it('returns false for unbalanced input', () => {
		let input = 'this ( {is a text where [(the)] parentheses [are] not correct)}.';

		let isBalanced = hasBalancedParentheses(input);

		expect(isBalanced).to.be.false;

	});

	it('returns false for input starting with closed parentheses', () => {
		let input = 'his ) {is a text where [(the)] parentheses [are] not correct}(.';

		let isBalanced = hasBalancedParentheses(input);

		expect(isBalanced).to.be.false;

	});

	it('returns true for input without any parentheses', () => {
		let input = 'this is a text with no parentheses';

		let isBalanced = hasBalancedParentheses(input);

		expect(isBalanced).to.be.true;

	});

	it('returns true for an empty input', () => {
		let input = '';

		let isBalanced = hasBalancedParentheses(input);

		expect(isBalanced).to.be.true;
	});

	it('returns true for a null input', () => {
		let input = null;

		let isBalanced = hasBalancedParentheses(input);

		expect(isBalanced).to.be.true;
	});
});