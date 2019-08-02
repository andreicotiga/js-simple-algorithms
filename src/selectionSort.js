'use strict'

//sorts a list ascending using the 'Selection Sort' algorithm
const selectionSort = (list) => {
    for (let i = 0; i < list.length - 1; i++) {
        
        let minIndex =i;

        for (let j = i + 1; j < list.length; j++) {
            if (list[j] < list[minIndex]) {
                minIndex = j;
            }
        }

        if (i !== minIndex){
            [list[i], list[minIndex]] = [list[minIndex], list[i]] //swap
        }
    }

    return list;
}

export default selectionSort;