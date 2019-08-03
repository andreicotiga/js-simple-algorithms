'use strict'

//The function reverses a string recursively
const reverseStringRecursive = (stringToReverse) => {
    if (!stringToReverse || stringToReverse.length <= 1) {
        return stringToReverse;
    }

    return reverseStringRecursive(stringToReverse.substring(1)) + stringToReverse[0];
}

export default reverseStringRecursive;