'use strict'

//sorts a list using the 'Selection Sort' algorithm
const selectionSort = (list) => {
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[i] > list[j]) {
                let aux = list[i];
                list[i] = list[j];
                list[j] = aux;
            }
        }
    }

    return list;
}

export default selectionSort;