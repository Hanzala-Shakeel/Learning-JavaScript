// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

var ch = prompt("Enter 1 Character");

if (ch >= "A" && ch <= "Z"){
    document.write(ch + " is an Upper_Case character");
}
         
else if (ch >= "a" && ch <= "z"){
    document.write(ch + " is an Lower_Case character");
}
          
else if (ch>=0){
    document.write("Character is a digit. ", ch + " is not an aplhabetic character");
}

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var num1 = +prompt("Enter Num_1 ");
var num2 = +prompt("Enter Num_2");

if(num1>num2){
    document.write("The larger number is " + num1 );
}
else if(num2>num1){
    document.write("The larger number is " + num2 );
}

else if(num1==num2){
    document.write("Both numbers are equal!");
}
else{
    document.write("Please add a Number!");
}

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

var num = +prompt("Enter Number");

if (num == 0){
    alert("The number is zero");
}
else if (num > 0){
    alert("The number is positive");
}
else if (num < 0){
    alert("The number is negative");
}


// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise


var input=prompt("Enter 1 Character to check vowel or not");

if (input=== "a" || input === "e" || input === "i" || input === "o" || input === "u") {

    document.write("Character is a vowel");
} 
else if(input=== "A" || input === "E" || input === "I" || input === "O" || input === "U"){

    document.write("Character is a vowel");
}
else{
    document.write("Character is not a vowel");
}


// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.


var pass = prompt("Enter your password");

if(pass==="Pakistan"){
    alert("Correct! The password you entered matches the original password");
}
else if (pass==""){
    alert("Please enter your password");
}
else if(pass==null){
    alert("You had cancelled authentication");
}
else{
    alert("Incorrect password");
}


// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }


var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}


// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

var time = +prompt("Enter time without : in 24 hours format!");

if(time==1200){
    alert("12:pm");
}
else if(time==1300){
    alert("1:pm");
}
else if(time==1400){
    alert("2:pm");
}
else if(time==1500){
    alert("3:pm");
}
else if(time==1600){
    alert("4:pm");
}
else if(time==1700){
    alert("5:pm");
}
else if(time==1800){
    alert("6:pm");
}
else if(time==1900){
    alert("7:pm");
}
else if(time==2000){
    alert("8:pm");
}
else if(time==2100){
    alert("9:pm");
}
else if(time==2200){
    alert("10:pm");
}
else if(time==2300){
    alert("11:pm");
}






