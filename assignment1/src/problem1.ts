// Problem-1;
let numbers: number[] = [1, 2, 3, 4, 5]
function sumArray(numbers: number[]): number {
    
    let sum = 0;

    for (let number of numbers) {
        sum = sum + number;
    }

    return sum;
}

console.log(sumArray(numbers)); 


