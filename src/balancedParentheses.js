'use strict'

//The function checks if the string contains balanced parentheses
//Balanced parentheses means:
// - that each open parentheses has a closing parentheses of the same type
// - the pairs of parentheses are properly nested. 
// Example: "[(2 + 3) * 5 -7] % 2" is a string containing balanced parentheses
// 	        "{a -7 * [2 +3)}" is a string that does not contain balanced parentheses

const hasBalancedParentheses = (input) => {

	if (!input) {
		return true;
	}

	let parentheses = new Map([
		['(', ')'],
		['{', '}'],
		['[', ']']
	]);
	let openParenthesesFound = [];
	let open = Array.from(parentheses.keys());
	let closed = Array.from(parentheses.values());

	for (let char of input) {
		if (open.indexOf(char) >= 0) {
			openParenthesesFound.push(char);
		} else {
			if (closed.indexOf(char) >= 0) {
				if (openParenthesesFound.length > 0 && parentheses.get(openParenthesesFound[openParenthesesFound.length - 1]) === char) {
					openParenthesesFound.pop();
				} else {
					return false;
				}
			}
		}
	}

	return openParenthesesFound.length == 0;
}

export default hasBalancedParentheses;