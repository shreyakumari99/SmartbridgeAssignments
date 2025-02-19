// Task 1: Declare age and check if it's adult
let age = 25;
let isAdult = age >= 18; // true if age is 18 or more, otherwise false
console.log("Is Adult:", isAdult);

// Task 2: Perform arithmetic operations
let x = 10;
let y = 5;
let addition = x + y;
let multiplication = x * y;
let modulus = x % y;

console.log("Addition:", addition);
console.log("Multiplication:", multiplication);
console.log("Modulus:", modulus);

// Task 3: Check if a number is even or odd
let n = 7; // Example number
let isEven = n % 2 === 0 ? "Even" : "Odd";
console.log(`The number ${n} is ${isEven}.`);

// Task 4: Store numbers from 1 to 5 in an array
let numbersArray = [];
for (let i = 1; i <= 5; i++) {
    numbersArray.push(i);
}
console.log("Numbers array:", numbersArray);

// Task 5: Function to return the square of a number
function square(num) {
    return num * num;
}
console.log("Square of 4:", square(4)); // Example usage
