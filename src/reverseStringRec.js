'use strict'

//reverses a string recursively
const reverseStringRec = (stringToReverse) => {
    if (!stringToReverse || stringToReverse.length <= 1){
        return stringToReverse;
    }

    return reverseStringRec(stringToReverse.substring(1)) + stringToReverse[0];
}

export default reverseStringRec;