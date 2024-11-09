"use strict";
function removeDuplicates(numbers) {
    let uniqueNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (uniqueNumbers.includes(numbers[i]) === false) {
            uniqueNumbers.push(numbers[i]);
        }
    }
    return uniqueNumbers;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
