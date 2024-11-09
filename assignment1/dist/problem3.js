"use strict";
function countWordOccurrences(sentence, word) {
    // Split by non-word characters to ignore punctuation
    const words = sentence.toLowerCase().split(/\W+/);
    const searchWord = word.toLowerCase();
    let count = 0;
    for (let w of words) {
        if (w === searchWord) {
            count++;
        }
    }
    return count;
}
console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript")); // Output: 2
console.log(countWordOccurrences("I love TypeScript!", "typescript")); // Output: 1
console.log(countWordOccurrences("I love TypeScript. TypeScript is great. TypeScript is great", "typescript")); // Output: 3
