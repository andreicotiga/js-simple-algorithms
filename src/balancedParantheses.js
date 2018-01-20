'use strict'

const balancedParantheses = (input) => {

	let parantheses = new Map([
		['(', ')'],
		['{', '}'],
		['[', ']']
	]);
	let openParanthesesFound = [];

	let open = Array.from(parantheses.keys());
	let close = Array.from(parantheses.values());

	for (let c of input) {

		if (open.indexOf(c) >= 0) {
			openParanthesesFound.push(c);
		} else {
			if (close.indexOf(c) >= 0) {

				if (openParanthesesFound.length > 0 && parantheses.get(openParanthesesFound[openParanthesesFound.length - 1]) === c) {
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