'use strict'

Array.prototype.head = function () {
    if (this.length > 0) {
        return this[0];
    }

    return null;
}

Array.prototype.tail = function () {
    if (this.length > 0) {
        return this.slice(1, this.length);
    }

    return null;
}

const recureIn = (list, fn) => {

    let head = list.head();
    let tail = list.tail();

    if (head && fn) {
        fn(head);
    }

    if (tail && fn) {
        recureIn(tail, fn);
    }
}

const primeNumbersRec = (limit) => {

    let list = [];

    //mark all as prime
    for (var i = 2; i < limit; i++) {
        list[i] = { index: i, isPrime: true };
    }

    //mark multiples as not prime
    for (var i = 2; i < limit; i++) {
        recureIn(list, function (val) {
            if (val.index > i && val.index % i === 0) {
                val.isPrime = false;
            }
        });
    }

    var result = [];

    //values that are still prime will be our result
    recureIn(list, function (val) {
        if (val.isPrime) {
            result.push(val.index);
        }
    });

    return result;
}

export default primeNumbersRec;