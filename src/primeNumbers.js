'use strict'

//finds all prime numbers from 2 to 'limit'
const primeNumbers = (limit) => {

    let grid = {};
    
    //mark all the numbers as prime
    for (let i = 2; i < limit; i++) {
        grid[i] = { isPrime: true };
    }

    //mark multiples as not prime
    for (let i = 2; i < Math.sqrt(limit); i++) {
        for (let x = 2 * i; x < limit; x += i) {
            grid[x].isPrime = false;
        }
    }

    //final result will consist of numbers that are marked as prime
    let result = [];
    for (let i = 2; i < limit; i++) {
        if (grid[i].isPrime) {
            result.push(i);
        }
    }

    return result;
}

export default primeNumbers;