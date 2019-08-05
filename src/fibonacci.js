'use strict'

const initial = [0, 1];

//The function computes the Fibonacci number at the specified position in the Fibonacci sequence
export const getFibonacci = (position) => {

    if (position < 0) {
        throw "Invalid position"
    }

    if (position < 2) {
        return initial[position];
    }

    for (var i = 2; i <= position; i++) {
        initial.push(initial[i - 1] + initial[i - 2]);
    }

    return initial[position];
}

//The function computes the Fibonacci number at the specified position in the Fibonacci sequence recursively
export const getFibonacciRecursive = (position) => {

    if (position < 0) {
        throw "Invalid position"
    }

    if (position < 2) {
        return initial[position];
    } else {
        return getFibonacciRecursive(position - 1) + getFibonacciRecursive(position - 2);
    }
}