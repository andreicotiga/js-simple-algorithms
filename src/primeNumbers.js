'use strict'

//The function finds all prime numbers between 2 and 'limit' (limit excluded)
export const primeNumbers = (limit) => {

    let searchLimit = Math.sqrt(limit);
    if (searchLimit < 2) {
        searchLimit = 2;
    }

    let notPrimes = new Map();

    //mark multiples as not primes
    for (let i = 2; i < searchLimit; i++) {
        for (let x = 2 * i; x < limit; x += i) {
            notPrimes.set(x, false);
        }
    }

    //result will consist of numbers that were not marked as not primes
    let result = [];
    for (let i = 2; i < limit; i++) {
        if (!notPrimes.has(i)) {
            result.push(i);
        }
    }

    return result;
}


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

//The function finds all prime numbers between 2 and 'limit' recursively (limit excluded)
export const primeNumbersRecursive = (limit) => {

    let list = [];

    //mark all as prime
    for (var i = 2; i < limit; i++) {
        list[i] = {
            index: i,
            isPrime: true
        };
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

    //final result will consist of numbers that are marked as prime
    recureIn(list, function (val) {
        if (val.isPrime) {
            result.push(val.index);
        }
    });

    return result;
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