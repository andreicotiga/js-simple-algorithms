'use strict'

//The function searches a list for a 'value' using the 'Binary Search' algorithm
//Note: The method assumes the list is sorted ascending
const binarySearch = (sortedList, value) => {
    let minIndex = 0,
        maxIndex = sortedList.length;

    while (minIndex <= maxIndex) {

        //calculate the middle element
        let middleIndex = Math.floor((minIndex + maxIndex) / 2);

        //if it's the value we are looking for, return it
        if (sortedList[middleIndex] === value) {
            return middleIndex;
        } else {
            //if the value we are looking for is greater than the middle, look after the middle index, otherwise look at the elements before the middle index
            if (sortedList[middleIndex] < value) {
                minIndex = middleIndex + 1;
            } else {
                maxIndex = middleIndex - 1;
            }
        }
    }

    return -1;
}

export default binarySearch;