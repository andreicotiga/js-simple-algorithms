'use strict'

//The function computes the greatest common denominator of 2 numbers using Euclid's algorithm
const greatestCommonDenominator = (a, b) => {

	while (b !== 0) {
		let r = a % b;
		a = b;
		b = r;
	}

	return a;
};

export default greatestCommonDenominator;