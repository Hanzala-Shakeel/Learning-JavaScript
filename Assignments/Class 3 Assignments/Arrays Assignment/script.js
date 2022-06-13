// 1. Declare an empty array using JS literal notation to store student names in future.

var stu = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.

var stu = new Array();

// 3. Declare and initialize a strings array.

var str = ["Hanzala","Shakeel","Zafar"];

// 4. Declare and initialize a numbers array.

var num = [1,2,3,4,5];

// 5. Declare and initialize a boolean array.

var bol = [true,false];

// 6. Declare and initialize a mixed array.

var mix = ["Orange","Apple",1,2,true];


// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:


var quali="Qualifications:"

document.write(quali+"<br>","<br>");

var num=[1,2,3,4,5,6,7,8];

var str=["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

for (var abc in num){
    document.write(num[abc],")"," ",str[abc] ,"<br>");
}


// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

var stu =["Michael","John","Tony"];

var scr =[320,230,480];

var per=["64%","46%","96%"];

for (var abc in stu){
    document.write("Score of ",stu[abc]," ","is"," ",scr[abc],".","Percentage: ",per[abc],"<br>");
}

// ---------Question Number 9 Not Solved-------------- ?


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.


var st_score=[320,230,480,120];

document.write("Scores of Students : "+st_score,"<br>");

st_score.reverse();

document.write("Ordered Scores of Students : "+st_score);


// 11. Write a program to initialize an array with city names.Copy 3 array elements from cities array to selectedCities
// array.


var ct_list=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];

var sl_ct =["Islamabad","Quetta"];

document.write("Cities List:","<br>"+ct_list+"<br>","<br>");

document.write("Selcted Cities:","<br>"+sl_ct);


// 12. Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var arr = ["This","is","my","cat"];

document.write("Array:","<br>"+arr,"<br>","<br>");

document.write("String:","<br>",arr.join(" "));


// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

var arr1 =["Keyboard","Mouse","Printer","Monitor"];

document.write("Devices:","<br>"+arr1,"<br>","<br>");

for(abc in arr1){
    document.write("Out:","<br>"+arr1[abc],"<br>");
}


// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

var arr1 =["Keyboard","Mouse","Printer","Monitor"]

document.write("Devices:","<br>"+arr1,"<br>","<br>");

arr1.reverse();

for(abc in arr1){
    document.write("Out:","<br>"+arr1[abc],"<br>");
}


// ---------Question Number 15 Not Solved-------------- ?


