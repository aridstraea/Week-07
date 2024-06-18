// 1. Create an array called "ages" that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// a. Subtract the first value from the last value in the array
// b. Add a new age to the end of the array, then repeat step a.
// c. Find the average age.

let ages = [3, 9, 23, 64, 2, 8, 28, 93]; // Array of ages

console.log("1a. " + (ages[ages.length - 1] - ages[0])); // A

ages.push(45); // B
console.log("1b. " + (ages[ages.length - 1] - ages[0])); // B

let sum = 0;
for (let i = 0; i < ages.length; i++) { // C
    sum += ages[i];
}
console.log("1c. " + sum / ages.length); // C

// 2. Create an array called "named" that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
// a. Calculate the average number of letters
// b. Concatenate all the names together, separated by spaces

let named = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; // Array of names

let totalLetters = 0;
for (let i = 0; i < named.length; i++) { // A
    totalLetters += named[i].length;
}
console.log("2a. " + totalLetters / named.length); // A

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
console.log("5. " + nameLengths);

// 6. Calculate the sum of nameLengths.
let sumNameLengths = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sumNameLengths += nameLengths[i];
}

console.log("6. " + sumNameLengths);

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
console.log("9. " + sumGreaterThan100([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // false
console.log("9. " + sumGreaterThan100([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100])); // true

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
function average(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}
console.log("10. " + average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 5.5

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array 
// is greater than the average of the elements in the second array.

function compareAverages(array1, array2) { // standalone version
    let sum1 = 0;
    for (let i = 0; i < array1.length; i++) {
        sum1 += array1[i];
    }
    let sum2 = 0;
    for (let i = 0; i < array2.length; i++) {
        sum2 += array2[i];
    }
    return sum1 / array1.length > sum2 / array2.length;
}

function compareAveragesWithAverageFunction(array1, array2) { // using average function
    return average(array1) > average(array2);
}

console.log("11. " + compareAverages([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])); // false
console.log("11. " + compareAveragesWithAverageFunction([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])); // false

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
// and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && (moneyInPocket > 10.50);
}

console.log("12. " + willBuyDrink(true, 10)); // false
console.log("12. " + willBuyDrink(true, 11)); // true

// 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

// This function will tell you if you should go to class. If you're sick (or it's a holiday), you shouldn't go at all.
// Otherwise, determine if it's a schoolday and if it's not summer. If both are true, you should go to class.
function willGoToClass(weekday, month, isHoliday, isSick) {
    if (isSick) return false; // If sick, don't go to class
    if (isHoliday) return false; // If holiday, don't go to class
    if (weekday === 0 || weekday === 6) return false; // If weekend, don't go to class
    if (month > 5 && month < 9) return false; // If summer, don't go to class

    return true; // Otherwise, go to class
}

console.log("13. " + willGoToClass(1, 1, false, false)); // true
console.log("13. " + willGoToClass(0, 1, false, false)); // false