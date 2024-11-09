"use strict";

function containsValue(array, value) {
    return array.includes(value);
}

console.log(containsValue([1, 2, 3], 2)); // true
console.log(containsValue([1, 2, 3], 4)); // false
console.log(containsValue(['a', 'b', 'c'], 'b')); // true
console.log(containsValue(['a', 'b', 'c'], 'd')); // false
