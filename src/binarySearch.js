'use strict'

const binarySearch = (list, lookFor) => {
    let minIndex = 0, maxIndex = list.length;

    while (minIndex <= maxIndex) {
        
        let middleIndex = Math.floor((minIndex + maxIndex) / 2);

        if (list[middleIndex] === lookFor) {
            return middleIndex;
        }
        else {
            if (list[middleIndex] < lookFor) { 
                minIndex = middleIndex + 1; 
            } else { 
                maxIndex = middleIndex - 1; 
            }
        }
    }

    return -1;
}

export default binarySearch;