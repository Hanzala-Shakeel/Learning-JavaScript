// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

var num = prompt("enter number");

document.write("The value of a " + "is: " + num + "<br>");

document.write("The value of ++a " + "is: " + ++num + "<br>");

document.write("Now the value of a " + "is: " + num + "<br>");

document.write("The value of a++ " + "is: " + num + "<br>");

document.write("Now the value of a " + "is: " + ++num + "<br>");

document.write("The value of --a " + "is: " + --num + "<br>");

document.write("Now the value of a " + "is: " + num + "<br>");

document.write("The value of a-- " + "is: " + num + "<br>");

document.write("Now the value of a " + "is: " + --num + "<br>");


// 2. What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

var a = 2;

var b = 1;

var result = --a - --b + ++b + b--;

document.write(result);


// 3. Write a program that takes input a name from user & greet the user.

var name1 = prompt("Enter Your Name");

alert("Hello " + name1);


// 5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5 should be displayed by default.

var num = prompt("Enter Number");

if (num === "" || num === null) {
  for (var i = 1; i <= 10; i++) {
    document.write(5 + "x" + i + "=" + 5 * i + "<br>");
  }
} else {
  for (var i = 1; i <= 10; i++) {
    document.write(num + "x" + i + "=" + num * i + "<br>");
  }
}


// 6. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

var subject1 = prompt("Enter 1st Subject Name");
var subject2 = prompt("Enter 2nd Subject Name");
var subject3 = prompt("Enter 3rd Subject Name");

var total_marks = 100;

var obtained_1 = +prompt("Enter 1st Subject Obtained Marks");
var obtained_2 = +prompt("Enter 2nd Subject Obtained Marks");
var obtained_3 = +prompt("Enter 3rd Subject Obtained Marks");

document.write("<br>");

document.write(subject1+" "+total_marks+" "+obtained_1+" "+obtained_1/total_marks+"%"+"<br>");

document.write(subject2+" "+total_marks+" "+obtained_2+" "+obtained_2/total_marks+"%"+"<br>");

document.write(subject3+" "+total_marks+" "+obtained_3+" "+obtained_3/total_marks+"%"+"<br>");

document.write(total_marks*3," ",obtained_1+obtained_2+obtained_3," ",(obtained_1+obtained_2+obtained_3)*total_marks/300,"%");


