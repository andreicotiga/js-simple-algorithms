'use strict'

const fibonacci = (position) => {
    var cache = [0, 1];

    if (position < 2) {
        return cache[position];
    }

    for (var i = 2; i <= position; i++) {
        cache.push(cache[i - 1] + cache[i - 2]);
    }

    return cache[position];
}

export default fibonacci;

