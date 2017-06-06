'use strict'

const fibonacci = (position) => {
    let initial = [0, 1]

    if (position < 2) {
        return initial[position];
    }
    else {
        return fibonacci(position - 1) + fibonacci(position - 2);
    }
}

export default fibonacci;