// Task 1: Use map to convert an array of numbers into an array of their cubes.
// Write a JavaScript function that takes an array of numbers as input and returns a new array containing the cubes of each number.

// Task 2: Use reduce to find the sum of all elements in an array.
// Write a JavaScript function that takes an array of numbers as input and returns the sum of all elements.

// Task 3: Use filter to find all prime numbers in an array.
// Write a JavaScript function that takes an array of numbers as input and returns a new array containing only the prime numbers.

// Task 4: Use map, reduce, and filter to calculate the average of squared odd numbers in an array.
// Write a JavaScript function that takes an array of numbers as input and calculates the average of the squares of all odd numbers in the array.

// Task 5: Use map, reduce, and filter to find the longest string in an array of strings.
// Write a JavaScript function that takes an array of strings as input and returns the longest string from the array.

// Task 6: Use map to capitalize the first letter of each word in a sentence.
// Write a JavaScript function that takes a sentence as input and returns the sentence with the first letter of each word capitalized.

// Task 7: Use filter to find all students who passed the exam.
// Write a JavaScript function that takes an array of student objects (with properties name and score) as input and returns an array containing only the students who passed the exam (scored 60 or above).

// Task 8: Create a Private Counter for Multiple Instances
// Write a closure-based function that creates multiple instances of a private counter. Each instance should have its own count, independent of the others. For example:

// const counter1 = createInstanceCounter();
// const counter2 = createInstanceCounter();

// console.log(counter1()); // Output: 1
// console.log(counter1()); // Output: 2
// console.log(counter2()); // Output: 1
// console.log(counter2()); // Output: 2

// Task 9: Create a Promise-Based Calculator
// Write a Promise-based calculator that takes two numbers and an operation (addition, subtraction, multiplication, or division) as input. Perform the corresponding operation and resolve the Promise with the result. Handle division by zero and any invalid operations by rejecting the Promise with an appropriate error message.

// Task 10: Calculate Total Score
// Write a JavaScript function that takes an array of objects, where each object contains a property score, and uses the forEach method to calculate the total score of all the objects in the array. Return the total score as the output.

// Code :
// Task 1 :
console.log("====================TASK 1=====================");
function findCube(numbers) {
    return numbers.map(number => number ** 3);
}

const arrayInput = [10, 20, 30, 40, 50];
const arrayCube = findCube(arrayInput);
console.log(arrayCube); 

// Task 2 :
console.log("====================TASK 2=====================");
function findSum(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

const sumTotal = findSum(arrayInput);
console.log(sumTotal);

//Task 3 :
console.log("====================TASK 3=====================");
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function filterPrimes(numbers) {
    return numbers.filter(isPrime);
}

const arr = [1, 2, 3, 4, 5];
const primeNumbers = filterPrimes(arr);
console.log(primeNumbers); 

//Task 4 :
console.log("====================TASK 4=====================");
function averageOfSquaredOdds(numbers) {
    const oddNumbers = numbers.filter(num => num % 2 !== 0);
    const squaredOdds = oddNumbers.map(num => num ** 2);
    const sumOfSquares = squaredOdds.reduce((acc, i) => acc + i, 0);
    const average = squaredOdds.length > 0 ? sumOfSquares / squaredOdds.length : 0;
    
    return average;
}

const array = [1, 2, 3, 4, 5];
const average = averageOfSquaredOdds(array);
console.log(average); 

//Task 5 :
console.log("====================TASK 5=====================");
function findLongestString(strings) {
    const lengths = strings.map(str => str.length);
    const maxLength = lengths.reduce((max, current) => Math.max(max, current), 0);
    const longestStrings = strings.filter(str => str.length === maxLength);
    return longestStrings.length > 0 ? longestStrings[0] : '';
}

const inputString = ['fruits', 'vegetables', 'apple', 'banana', 'watermelon'];
const longestString = findLongestString(inputString);
console.log(longestString); 

//Task 6 :
console.log("====================TASK 6=====================");
function capitalizeFirstLetter(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

const inputSentence = "this is a test sentence.";
const capitalizedSentence = capitalizeFirstLetter(inputSentence);
console.log(capitalizedSentence);

// Task 7 :
console.log("====================TASK 7=====================");
function findPassedStudents(students) {
    return students.filter(student => student.score >= 60);
}

const studentArray = [
    { name: 'A', score: 72 },
    { name: 'B', score: 66 },
    { name: 'C', score: 99 },
    { name: 'D', score: 45 },
    { name: 'E', score: 91 }
];

const passedStudents = findPassedStudents(studentArray);
console.log(passedStudents);

//Task 8 :
console.log("====================TASK 8=====================");
function createCounter() {
    let count = 0; 

    return function() {
        count++;
        return count; 
    };
}

const counter1 = createCounter();
const counter2 = createCounter();
const counter3 = createCounter();

console.log(counter1()); 
console.log(counter1()); 
console.log(counter2());
console.log(counter2()); 
console.log(counter3()); 
console.log(counter3());
console.log(counter3()); 

//Task 10:
console.log("====================TASK 10=====================");
function calculateTotalScore(objects) {
    let totalScore = 0; 

    objects.forEach(obj => {
        totalScore += obj.score; 
    });

    return totalScore;
}

const scores = [
    { score: 85 },
    { score: 92 },
    { score: 76 },
    { score: 88 },
    { score: 95 }
];

const total = calculateTotalScore(scores);
console.log('Total Score:', total); 

//Task 9 :
console.log("====================TASK 9=====================");
function promiseCalculator(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        switch (operation) {
            case 'addition':
                resolve(num1 + num2);
                break;
            case 'subtraction':
                resolve(num1 - num2);
                break;
            case 'multiplication':
                resolve(num1 * num2);
                break;
            case 'division':
                if (num2 === 0) {
                    reject(new Error('Arithmetic Exception - Cannot Divide By 0.'));
                } else {
                    resolve(num1 / num2);
                }
                break;
            default:
                reject(new Error('Invalid operation.'));
        }
    });
}

promiseCalculator(5, 2, 'addition')
    .then(result => console.log('Result of 5+2:', result))
    .catch(error => console.error('Error:', error.message));

promiseCalculator(10, 0, 'division')
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error.message));

promiseCalculator(10, 2, 'exponent')
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error.message));

promiseCalculator(5, 4, 'subtraction')
    .then(result => console.log('Result of 5-4:', result))
    .catch(error => console.error('Error:', error.message));
