'use strict'

const balancedParantheses = (input) => {

	let parantheses = new Map([
		['(', ')'],
		['{', '}'],
		['[', ']']
	]);
	let found = [];

	let open = Array.from(parantheses.keys());
	let close = Array.from(parantheses.values());

	for (let c of input) {

		if (open.indexOf(c) >= 0) {
			found.push(c);
		} else {
			if (close.indexOf(c) >= 0) {

				if (found.length > 0 && parantheses.get(found[found.length - 1]) === c) {
					found.pop();
				} else {
					return false;
				}
			}
		}
	}

	return found.length == 0;
}

export default balancedParantheses;