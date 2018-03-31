'use strict'

//checks if the string contains balanced parantheses
//balanced parantheses means:
// - that each open parantheses has a closing parantheses of the same type
// - the pairs of parantheses are propertly nested
const balancedParantheses = (input) => {

	let parantheses = new Map([
		['(', ')'],
		['{', '}'],
		['[', ']']
	]);
	let openParanthesesFound = [];
	let open = Array.from(parantheses.keys());
	let closed = Array.from(parantheses.values());

	for (let char of input) {
		if (open.indexOf(char) >= 0) {
			openParanthesesFound.push(char);
		} else {
			if (closed.indexOf(char) >= 0) {
				if (openParanthesesFound.length > 0 && parantheses.get(openParanthesesFound[openParanthesesFound.length - 1]) === char) {
					openParanthesesFound.pop();
				} else {
					return false;
				}
			}
		}
	}

	return openParanthesesFound.length == 0;
}

export default balancedParantheses;