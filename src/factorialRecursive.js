'use strict'

//The function calculates the factorial of a given number (n) recursively
const factorialRecursive = (n) => {
	if (n < 1) {
		throw new Error('Invalid number');
	}

	if (n == 1) {
		return n;
	}

	return n * factorialRecursive(n - 1);
}

export default factorialRecursive;