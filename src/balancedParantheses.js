'use strict'

const balancedParantheses = (input) => {

	let parantheses = new Map([
		['(', ')'],
		['{', '}'],
		['[', ']']
	]);
<<<<<<< master
	let foundOpen = [];
=======
	let openParanthesesFound = [];
>>>>>>> renamed symbol to be more readable

	let open = Array.from(parantheses.keys());
	let close = Array.from(parantheses.values());

	for (let c of input) {

		if (open.indexOf(c) >= 0) {
<<<<<<< master
			foundOpen.push(c);
		} else {
			if (close.indexOf(c) >= 0) {

				if (foundOpen.length > 0 && parantheses.get(foundOpen[foundOpen.length - 1]) === c) {
					foundOpen.pop();
=======
			openParanthesesFound.push(c);
		} else {
			if (close.indexOf(c) >= 0) {

				if (openParanthesesFound.length > 0 && parantheses.get(openParanthesesFound[openParanthesesFound.length - 1]) === c) {
					openParanthesesFound.pop();
>>>>>>> renamed symbol to be more readable
				} else {
					return false;
				}
			}
		}
	}

<<<<<<< master
	return foundOpen.length == 0;
=======
	return openParanthesesFound.length == 0;
>>>>>>> renamed symbol to be more readable
}

export default balancedParantheses;