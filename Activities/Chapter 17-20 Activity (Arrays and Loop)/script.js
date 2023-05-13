// 1. Declare and initialize an empty multidimensional array.(Array of arrays)

let arr1 = [[1], [2], [3]];

// 2. Declare and initialize a multidimensional array representing the following matrix:

let array1 = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

for (let i = 0; i < array1.length; i++) {
  document.write(array1[i], "<br>");
}

// 3. Write a program to print numeric counting from 1 to 10.

for (let i = 1; i < 11; i++) {
  document.write(i, "<br>");
}

// 4. Write a program to print multiplication table of any number using for loop. Table number & length should be
// taken as an input from user.

let userNum = +prompt("Enter a number to show its multiplication table");

let tableLenght = +prompt("Enter lenght multiplication table");

for (let i = 1; i <= tableLenght; i++) {
  document.write(userNum, "x", i, "=", userNum * i, "<br>");
}

// 5. Write a program to print items of the following array using for loop:
//  fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
  document.write("Element at index ", i, " is ", fruits[i], "<br>");
}

// 6. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
let counting = [];
for (let i = 1; i <= 15; i++) {
  counting.push(i);
}
document.write("Counting:", counting.join(", "));

// // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
let reverseCounting = [];
for (let i = 10; i >= 1; i--) {
  reverseCounting.push(i);
}
document.write("Reverse counting:", reverseCounting.join(", "));

// // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
let even = [];
for (let i = 0; i <= 20; i += 2) {
  even.push(i);
}
document.write("Even:", even.join(", "));

// // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
let odd = [];
for (let i = 1; i <= 19; i += 2) {
  odd.push(i);
}
document.write("Odd:", odd.join(", "));

// // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
let series = [];
for (let i = 1; i <= 10; i++) {
  series.push(i * 2 + "k");
}
document.write("Series:", series.join(", "));


// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not. Example:

let a = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Enter the item you want to search:");

userInput = userInput.toLowerCase();

let isFound = false;

for (var i = 0; i < a.length; i++) {
  let currentItem = a[i].toLowerCase();

  if (currentItem === userInput) {
    isFound = true;
    break;
  }
}

if (isFound) {
  alert(userInput + ` is availbale at index ${i} in our bakery.`);
} else {
  alert(`We are sorry ${userInput} is not available in our bakery.`);
}


// 8. Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12].

let b = [24, 53, 78, 91, 12];
let largestNumber = b[0];

for (let i = 1; i < b.length; i++) {
  if (b[i] > largestNumber) {
    largestNumber = b[i];
  }
}

document.write("The largest number in the array is " + largestNumber);


// 9. Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]

let c = [24, 53, 78, 91, 12];
let smallestNumber = c[0];

for (let i = 1; i < c.length; i++) {
  if (c[i] < smallestNumber) {
    smallestNumber = c[i];
  }
}

document.write("The smallest number in the array is " + smallestNumber);


// 10. Write a program to print multiples of 5 ranging 1 to 100.

for (let i = 1; i <= 20; i++) {
  document.write(i * 5);
}
