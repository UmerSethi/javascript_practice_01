// alert("This is Umer!");
// alert(13);


// var myName = "Muhammad Umer Saleem";
// var myAge = 20;
// alert(myName);
// alert(myAge);


// var age = 23;
// var agee = 25;
// var totalAge = age + agee;
// var otherAge = totalAge + 12;
// alert(totalAge);
// alert(otherAge);


// var firstName = "Muhammad Umer";
// var lastName = "Saleem";
// var fullName = firstName + " " + lastName;
// alert(fullName);


// var age = "23";
// var agee = "25";
// alert(age + agee)


// overwriting the variables 
// var myName = "Muhammad";
// var myName = "Umer";
// alert(myName);


// JS is case sensitive language
// var myName = "Muhammad";
// alert(myname)
// var myname = "Umer";
// alert(myname)
// alert(myName) 


// legal variables
// no number in start .... no special characters in start ... but can use $ and _ at start .... should be one word ... no space in between 


// Math Expressions
// Divide /  ... Multiply * ... Add + ... Subtract - ... Modulus %

// var num1 = 20
// var num2 = 4

// alert(num1 / num2)
// alert(num1 * num2)
// alert(num1 + num2)
// alert(num1 - num2)
// alert(num1 % num2)


// var result = 6 - (5 + 30 / 10) * 3;
// alert(result);



// Post Increment and Pre Increment a++ // ++a 

// Post Decrement and Pre Decrement a-- // --a 

// var a = 6;
// a++ // ++a
// var result = a++; // post increment
// var result = ++a; // pre increment
// alert(result);
// alert(a);

// var a = 5;
// var result = a++ + ++a + ++a
//            5     7     8 
// alert(result)

// var a = 10;
// var result = a++ + a++ + a++
// alert(result)
// alert(a)

// var a = 15 
// var result = ++a + ++a + a++ + ++a + a++ + ++a
// alert(result)


// var a = 14
// var result = a++ + ++a - a + a++ + ++a - a - --a
// alert(result)
// alert(a)


// var firstName = prompt("Enter your first name: "); // for taking input
// var lastName = prompt("Enter your last name: ");
// document.write("Your Full Name is " + firstName + " " + lastName) // for the display UI / Screen


// var num1 = +prompt("Enter first number: "); // place "+" before prompt if you want to have the input as a number .. as the prompt method takes an input as a string
// var num2 = +prompt("Enter second number: ")
// var add = num1 + num2 
// document.write("Your first number wasa: " + num1)
// document.write("Your second number wasa: " + num2)
// document.write(add)





















// Assignment one 

var firstName = prompt("Enter Your First Name Here:");
var lastName = prompt("Enter Your Last Name Here:");
var rollNumber = +prompt("Enter Your Roll No. Here:");
var schoolName = prompt("Enter Your School Name Here:");
var mathmatics = +prompt("Your Mathematics Marks :");
var computer = +prompt("Your Computer Marks :");
var english = +prompt("Your English Marks :");
var physics = +prompt("Your Physics Marks :");
var chemistry = +prompt("Your Chemistry Marks :");
var obtainedMarks = mathmatics + computer + english + physics + chemistry; 
var totalMarks = +prompt("Enter Total Marks :");
var percentage = obtainedMarks / totalMarks * 100;


document.write("First Name : " + firstName + "<br>"); 
document.write("Last Name : " + lastName + "<br>");
document.write("Roll Number : " + rollNumber + "<br>");
document.write("School Name : " + schoolName + "<br>");

document.write("Each Subject's Marks are Mentioned Below : <br>");
document.write("Marks Obtained in Mathmatics : " + mathmatics + "<br>");
document.write("Marks Obtained in Computer : " + computer + "<br>");
document.write("Marks Obtained in English : " + english + "<br>");
document.write("Marks Obtained in Chemistry : " + chemistry + "<br>");
document.write("Marks Obtained in Physics : " + physics + "<br>");

document.write("Total Marks Obtained are " + obtainedMarks + " Out of " + totalMarks + "<br>"); 

document.write("Percentage is : " + percentage + "<br>" )
