// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var num1 = +prompt("Enter num 1");
var num2 = +prompt("Enter num2");

document.write("Sum of ",num1," ","and ",num2," ","is ",num1+num2);


// 2. Repeat task1 for subtraction, multiplication, division & modulus.

// subtraction

var num1 = +prompt("Enter num 1");
var num2 = +prompt("Enter num2");

document.write("Sum of ",num1," ","and ",num2 ," ", "is ",num1-num2);

// multiplication

var num1 = +prompt("Enter num 1");
var num2 = +prompt("Enter num2");

document.write("Sum of ",num1," ","and ",num2 ," ", "is ",num1*num2);


// // division

var num1 = +prompt("Enter num 1");
var num2 = +prompt("Enter num2");

document.write("Sum of ",num1," ","and ",num2 ," ", "is ",num1/num2);

// modulus

var num1 = +prompt("Enter num 1");
var num2 = +prompt("Enter num2");

document.write("Sum of ",num1," ","and ",num2 ," ", "is ",num1%num2);



// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.


var js_math= "";

document.write("Value after variable declaration is ??","<br>");

var num = 5;

document.write("Initial value is "+ num +"<br>");

document.write("Initial value after increment is ", ++num,"<br>");

document.write("Value after addition is ", num+7,"<br>");

document.write("Initial value after decrement is ", --num+7,"<br>");

document.write("The remainder is "+num%num);



// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5
// tickets to a movie. Example output:


var cost_ticket = +prompt("Enter ticket quantity");

document.write("ticket price is " + 600*cost_ticket);


// 5. Write a script to display multiplication table of any number in your browser. E.g

for(var i=1; i<=10; i++){
    document.write("4 x ",i,"=",4*i,"<br>");
}


// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.


var temp=40;

document.write("F = ",(temp-9/5)+32,"<br>");

var far=(temp-9/5)+32;

document.write("C = ",(far-32)*5/9);

// // 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables 
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.


var o_quant1 = +prompt("Enter 1st Product Quantity");

var o_quant2 = +prompt("Enter 2nd Product Quantity");

document.write("Price of item 1 is 800"+"<br>"+"Price of item 2 is 1000"+"<br>");

document.write("Total ",o_quant1*800 + o_quant2*1000 + "<br>"+"Shipping charges is "+ 300);


// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

var total_marks = 500;

var marks_obtained = +prompt("Enter your obtained marks");

var percentage = marks_obtained*100/total_marks;

document.write(marks_obtained+" "+"Your percentage is "+percentage);


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

var us_dollar=104.80;

var saudi_riyal=28;

document.write("Total Currency in PKR:",us_dollar*10+saudi_riyal*25);


// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var abc=5;

document.write(abc+5*10/2);


// 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN years old”.


var current_year=2022;

var birth_year=2004;

document.write("Current year: "+current_year+"<br>");

document.write("Birth year: "+birth_year+"<br>");

document.write("Your Age:"+current_year%birth_year);


// 12. The Geometrizer: Calculate properties of a circle.Calculate
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

var radius = 20;

var value=3.142;

document.write("Radius of a circle is: ",radius,"<br>");

document.write("The circumference is:",2*radius*value,"<br>");

document.write("The area is: ",3.142*radius**2);


// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.


var fav_snack = "chocolate chip";

var current_age=15;

var max_age=65;

var est_amount=3;

document.write(max_age-current_age+est_amount*current_age);




