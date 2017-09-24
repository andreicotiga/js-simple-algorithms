'use strict';

const bubbleSort = (list) => {
    if (list.length < 2) {
        return list;
    }

    //tells us if we need to repeat the cycle
    let doItAgain = false;

    do {
        doItAgain = false;

        for (var i = 0; i < list.length - 1; i++) {
            if (list[i] > list[i + 1]) {
                //if we find 2 elements that are not sorted, sort them and and set doItAgain as true, so we repeat the cycle
                let aux = list[i];
                list[i] = list[i + 1];
                list[i + 1] = aux;
                doItAgain = true;
            }
        }
    }
    while (doItAgain);
}

export default bubbleSort;