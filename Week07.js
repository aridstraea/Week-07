// 1. Create an array called "ages" that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// a. Subtract the first value from the last value in the array
// b. Add a new age to the end of the array, then repeat step a.
// c. Find the average age.

let ages = [3, 9, 23, 64, 2, 8, 28, 93]; // Array of ages

console.log("1a." + ages[ages.length - 1] - ages[0]); // A

ages.push(45); // B
console.log("1b." + ages[ages.length - 1] - ages[0]); // B

let sum = 0;
for (let i = 0; i < ages.length; i++) { // C
    sum += ages[i];
}
console.log("1c." + sum / ages.length); // C

// 2. Create an array called "named" that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
// a. Calculate the average number of letters
// b. Concatenate all the names together, separated by spaces

let named = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; // Array of names

let totalLetters = 0;
for (let i = 0; i < named.length; i++) { // A
    totalLetters += named[i].length;
}
console.log("2a." + totalLetters / named.length); // A

let allNames = '';
for (let i = 0; i < named.length; i++) { // B
    allNames += named[i] + ' ';
}
console.log("2b. " + allNames); // B

// 3. How do you access the last element of any array?
console.log("3. array[array.length - 1]");

// 4. How do you access the first element of any array?
console.log("4. array[0]");

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = [];
for (let i = 0; i < named.length; i++) {
    nameLengths.push(named[i].length);
}
console.log("5." + nameLengths);

// 6. Calculate the sum of nameLengths.
let sumNameLengths = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sumNameLengths += nameLengths[i];
}

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
// (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
function concatenateWord(word, n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += word;
    }
    return result;
}

console.log("7. " + concatenateWord('Hello', 3));

// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name 
// (the full name should be the first and the last name separated by a space).
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}

console.log("8. " + fullName('John', 'Doe'));

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function sumGreaterThan100(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum > 100;
}
console.log("9. " + sumGreaterThan100([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log("9. " + sumGreaterThan100([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100]));
