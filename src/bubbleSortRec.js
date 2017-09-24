'use strict'

//sorts a list using the 'Bubble Sort' algorithm
const bubbleSortRec = (list) => {
    if (list.length < 2) {
        return list;
    }

    //tells us if we need to call the function again
    let doItAgain = false;

    for (var i = 0; i < list.length - 1; i++) {
        if (list[i] > list[i + 1]) {
            //if we find 2 elements that are not sorted, sort them and and set doItAgain as true, so the function is called again
            let aux = list[i];
            list[i] = list[i + 1];
            list[i + 1] = aux;
            doItAgain = true;
        }
    }

    if (doItAgain) {
        bubbleSortRec(list);
    }
}

export default bubbleSortRec;