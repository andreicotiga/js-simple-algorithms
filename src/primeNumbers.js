'use strict'

//finds all prime numbers between 2 to 'limit'
const primeNumbers = (limit) => {

    let notPrimes = new Map();

    //mark multiples as not primes
    for (let i = 2; i < Math.sqrt(limit); i++) {
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

export default primeNumbers;