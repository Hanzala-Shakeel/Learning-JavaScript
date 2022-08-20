// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

let city = prompt("Enter your city name");

if(city.toLowerCase()=="karachi"){
    alert("Welcome to city of lights");
}
else{
    alert("Good city");
}

// // 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the
// // user is female, give the message: Good Morning Ma’am.

let gender = prompt("Enter your gender");

if (gender.toLowerCase() == "male") {
  alert("Good Morning Sir.");
}
else if(gender.toLowerCase()=="female"){
    alert(" Good Morning Ma'am.")
}
else{
    alert("Good Morning");
}

// // 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

let signal_color = prompt("Enter color of road traffic signal");

if (signal_color == "red") {
  alert("Must Stop");
}
else if (signal_color == "yellow") {
  alert("Ready to move");
}
else if (signal_color == "green") {
  alert("Move now");
}
else{
    alert("Wrong traffic color");
}

// // 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres,
// //     show the message “Please refill the fuel in your car”

let remaining_fuel = +prompt("Enter your remaining fuel in litres");

if(remaining_fuel<0.25){
    alert("Please refill the fuel in your car");
}
else{
    alert("You are a rich person donate some fuel to me");
}

// // 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.

// a. "True"
let a = 4;
if (++a === 5){
alert("given condition for letiable a is true");
}

// // b. "False"
let b = 82;
if (b++ === 83){
alert("given condition for letiable b is true");
}

// // c. condition 3 is true"
let c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

// // d. "True"
let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

// // e. "True"
 if (true){
alert("True");
}
if (false){
alert("False");
}

// // f. "True"
if("car" < "cat"){
alert("car is smaller than cat");
}

// // 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting
// // percentage on your page. Take percentage & compute grade as per following table:
// // Show the total marks, marks obtained, percentage, grade & remarks like:


let sub1_Obtain = +prompt("Enter 1st Subject Obtained Marks");
let sub2_Obtain = +prompt("Enter 2nd Subject Obtained Marks");
let sub3_Obtain = +prompt("Enter 3rd Subject Obtained Marks");

let total_marks= 300;

document.write("Total marks : ",total_marks,"<br>","Marks Obtained: ",sub1_Obtain+sub2_Obtain+sub3_Obtain,"<br>");

document.write("Percentage : ",(sub1_Obtain+sub2_Obtain+sub3_Obtain)*100/300,"%","<br>");

let percentage=(sub1_Obtain+sub2_Obtain+sub3_Obtain)*100/300;

if(percentage>=80){
document.write("Grade : A-one","<br>");
document.write("Remarks : ","Excellent")
}
else if(percentage>=70){
document.write("Grade : A","<br>");
document.write("Remarks : ","Good");
}
else if(percentage>=60){
document.write("Grade : B","<br>");
document.write("Remarks : ","You need to improve");
}
else if(percentage<60){
document.write("Grade : F","<br>");
document.write("Remarks : ","Sorry");
}

// // 7. Guess game: Store a secret number (ranging from 1 to 10) in a variable.Prompt user to guess the secret number.
// // a. If user guesses the same number, show “Bingo! Correct answer”.
// // b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

let secret_num = 6;

let user_input = +prompt("Guess the secret number (ranging from 1 to 10)");

if (user_input == secret_num) {
  alert("Bingo! Correct answer");
}
else if (user_input == 5) {
  alert("Close enough to the correct answer");
}
else {
  alert("Try next time");
}

// // 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number
// // is divisible by 3.

let num = +prompt("Enter number to check divisible by 3 or not ");

if(num%3==0){
    alert("This number is divisible by 3");
}
else{
    alert("This number is not divisible by 3");
}

// // 9. Write a program that checks whether the given input is an even number or an odd number.

let num1 = +prompt("Enter number to check even or odd");

if(num1%2==0){
    alert("This number is even");
}
else{
    alert("This number is odd");
}

// // 10. Write a program that takes temperature as input and shows a message based on following criteria
// // a. T > 40 then “It is too hot outside.”
// // b. T > 30 then “The Weather today is Normal.”
// // c. T > 20 then “Today’s Weather is cool.”
// // d. T > 10 then “OMG! Today’s weather is so Cool.”

let temperature = +prompt("Enter Temperature to check weather states ");

if(temperature>40){
    alert("It is too hot outside.");
}
else if(temperature>30){
    alert("The Weather today is Normal.");
}
else if(temperature>20){
    alert("Today's Weather is cool.");
}
else if(temperature>10){
    alert("OMG! Today's weather is so Cool.");
}
else{
    alert("Invalid weather info");
}

// // 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// // a. First number
// // b. Second number
// // c. Operation (+, -, *, /, %)
// // Compute & show the calculated result to user.

let firstNum = +prompt("Enter first number ");

let operator = prompt("Select operator + , -, *, /, %");

let secondNum = +prompt("Enter second number ");

let output;

if (operator == "+") {
  output = firstNum + secondNum;
  alert(output + " is the answer!");
} 
else if (operator == "-") {
  output = firstNum - secondNum;
  alert(output + " is the answer!");
} 
else if (operator == "*") {
  output = firstNum * secondNum;
  alert(output + " is the answer!");
} 
else if (operator == "/") {
  output = firstNum / secondNum;
  alert(output + " is the answer!");
} 
else if (operator == "%") {
  output = firstNum % secondNum;
  alert(output + " is the answer!");
}
