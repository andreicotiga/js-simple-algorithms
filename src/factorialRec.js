'use strict'

const factorialRec = (n) => {
	if (n < 1) {
		throw new Error('Invalid number');
	}

	if (n == 1) {
		return n;
	}

	return n * factorialRec(n - 1);
}

export default factorialRec;