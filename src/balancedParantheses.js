'use strict'

const balancedParantheses = (input) => {

	let parantheses = new Map([
		['(', ')'],
		['{', '}'],
		['[', ']']
	]);
	let foundOpen = [];

	let open = Array.from(parantheses.keys());
	let close = Array.from(parantheses.values());

	for (let c of input) {

		if (open.indexOf(c) >= 0) {
			foundOpen.push(c);
		} else {
			if (close.indexOf(c) >= 0) {

				if (foundOpen.length > 0 && parantheses.get(foundOpen[foundOpen.length - 1]) === c) {
					foundOpen.pop();
				} else {
					return false;
				}
			}
		}
	}

	return foundOpen.length == 0;
}

export default balancedParantheses;