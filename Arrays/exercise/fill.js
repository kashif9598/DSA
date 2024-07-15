/**
 * Task description: Write a method that creates a new array with given values
 * Expected Result: (3, 'a') => ['a', 'a', 'a']
 * Task Complexity: 1 of 5
 * @param {number} arraySize - size of array
 * @param {?} value - value to fill
 * @returns {Array}
 */

function fill(length, value){
    return newArray = new Array(length).fill(value)
}

let length = 3;
let value = 'a'
console.log(fill(length, value))