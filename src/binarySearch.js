'use strict'

//searches a list for 'lookForValue' using the 'Binary Search' algorithm
//the list must be sorted ascending
const binarySearch = (sortedList, lookForValue) => {
    let minIndex = 0, maxIndex = sortedList.length;

    while (minIndex <= maxIndex) {
        
        //calculate the middle element
        let middleIndex = Math.floor((minIndex + maxIndex) / 2);

        //if it's the value we are looking for, return it
        if (sortedList[middleIndex] === lookForValue) {
            return middleIndex;
        }
        else {
            //if the value we are looking for is greater than the middle, look after the middle index, otherwise look at the elements before the middle index
            if (sortedList[middleIndex] < lookForValue) { 
                minIndex = middleIndex + 1; 
            } else { 
                maxIndex = middleIndex - 1; 
            }
        }
    }

    return -1;
}

export default binarySearch;