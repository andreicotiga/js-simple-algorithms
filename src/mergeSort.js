'use strict'


const mergeSort = (list) => {
    if (list.length < 2) {
        return list;
    }

    //split the list in half
    const middle = list.length / 2;
    const left = list.slice(0, middle);
    const right = list.slice(middle, list.length);

    //merge the 2 halfs in a sorting fashion
    return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {

    let result = [];

    while (left.length || right.length) {
        if (left.length && right.length) {

            //push into result the min element at index 0
            if (left[0] < right[0]) {
                result.push(left.shift());
            }
            else {
                result.push(right.shift())
            }
        }
        else if (left.length) {
            // only left has elements so push them
            result.push(left.shift());
        }
        else {
            // only right has elements so push them
            result.push(right.shift());
        }
    }

    return result;
}

export default mergeSort;