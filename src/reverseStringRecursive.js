'use strict'

//The function reverses a string recursively
const reverseStringRecursive = (string) => {
    if (!string || string.length <= 1) {
        return string;
    }

    return reverseStringRecursive(string.substring(1)) + string[0];
}

export default reverseStringRecursive;