"use strict";
// Problem-1;
let numbers = [1, 2, 3, 4, 5];
function sumArray(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum = sum + number;
    }
    return sum;
}
console.log(sumArray(numbers));
