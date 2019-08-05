'use strict';

//The function sorts a list using the 'Bubble Sort' algorithm
export const bubbleSort = (list) => {

    if (!list) {
        throw "Invalid list"
    }

    if (list.length < 2) {
        return list;
    }

    //tells if we need to repeat the cycle
    let doItAgain = false;

    do {
        doItAgain = false;

        for (var i = 0; i < list.length - 1; i++) {
            if (list[i] > list[i + 1]) {
                //if found 2 elements that are not sorted, sort them and and set doItAgain as true, so we repeat the cycle
                let aux = list[i];
                list[i] = list[i + 1];
                list[i + 1] = aux;
                doItAgain = true;
            }
        }
    }
    while (doItAgain);
}

//The function sorts a list using the 'Bubble Sort' recursive algorithm
export const bubbleSortRecursive = (list) => {

    if (!list) {
        throw "Invalid list"
    }

    if (list.length < 2) {
        return list;
    }

    //tells if we need to call the function again
    let doItAgain = false;

    for (var i = 0; i < list.length - 1; i++) {
        if (list[i] > list[i + 1]) {
            //if found 2 elements that are not sorted, sort them and and set doItAgain as true, so the function is called again
            let aux = list[i];
            list[i] = list[i + 1];
            list[i + 1] = aux;
            doItAgain = true;
        }
    }

    if (doItAgain) {
        bubbleSortRecursive(list);
    }
}