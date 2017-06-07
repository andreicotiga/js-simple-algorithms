'use strict'

const primeNumbers = (limit) => {

    let grid = {};
    
    //mark all the numbers as prime
    for (let i = 0; i < limit; i++) {
        grid[i] = { marked: false };
    }

    //mark multipliers as non prime
    for (let i = 2; i < Math.sqrt(limit); i++) {
        for (let x = 2 * i; x < limit; x += i) {
            grid[x].marked = true;
        }
    }

    //final result will consist of numbers that have marked: false
    let result = [];
    for (let i = 0; i < limit; i++) {
        if (!grid[i].marked) {
            result.push(i);
        }
    }

    return result;
}

export default primeNumbers;