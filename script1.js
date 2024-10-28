// console.log(`Rubina Ansari`);
// console.log(`I like pizza!`);

// window.alert(`This is an alert!`);
// window.alert(`I like pizza!`);


// document.getElementById('myH1').textContent = 'Hello';
// document.getElementById('myP').textContent = 'I like pizza!';


// variable = A container that stores a value. 
//            Behaves as if it were the value it contains.

// 1. declaration   let x;
// 2. assignment    x = 100;

// let x = 100;

// console.log(x);

// Data Types: Number, Null, Bolean, BigInt, String, Symbol, Undefined

// let age = 25;
// let price = 10.99;
// let gpa = 2.1;

// console.log(age);
// console.log(price);

// console.log(typeof age);
// console.log(typeof price);
// console.log(typeof gpa);

// console.log(`You are ${age} years old.`);
// console.log(`The price is $${price}`);
// console.log(`Your gpa is: ${gpa}`);


// let firstName = "Rubina";
// let favouriteFood = "Pizza";
// let email = "ruby123@gmail.com";
// console.log(typeof firstName);
// console.log(firstName);

// console.log(`Your name is ${firstName}`);
// console.log(`You like ${favouriteFood}`);

// console.log(typeof email);
// console.log(`Your email id is ${email}`);

// let online = false;
// let forSale = true;
// let isStudent = true;

// console.log(typeof online);
// console.log(`My friend is online: ${online}`);
// console.log(`Is this car for sale: ${forSale}`);
// console.log(`Enrolled: ${isStudent}`);

// let fullName = "Rubina Ansari";
// let age = 35;
// let isStudent = false;

// document.getElementById("p1").textContent = fullName;
// document.getElementById("p2").textContent = age;
// document.getElementById("p3").textContent = isStudent;

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `You are ${age} years old.`;
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;


// Arithmetic Operators = Operands (value, variables, etc.)
//                        Operators (+ - * /)
//                        ex. 


// let students = 30;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// students = students ** 4;
// students = students % 2;

// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;
// students **= 2;
// students %= 2;

// students++;
// students--;

// console.log(students);

/*
    Operator Precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & divison & modulo
    4. addition & subtraction
*/

// let result = 1 + 2 * 3 + 4 ** 2;

// let result = 12 % 5 + 8 / 2;

// let result = 6 / 2 ** (2 + 5);

/*
(2 + 5) -> 7
2 ** 6 2 2 2 2 2 2 2 -> 128
6 / 128
*/

// console.log(result);

// This a comment

/*
    This
    is
    a
    comment
*/

// How to accept user input

// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

// let username = window.prompt("What's your username?");

// console.log(username);

// let username;

// document.getElementById("mySubmit").onclick = function() {
//     username = document.getElementById("myText").value;
//     // console.log(username);
//     document.getElementById("myH1").textContent = `Hello ${username}`;
// }

// type conversion = change the datatype of a value to another
//                   (strings, numbers, booleans)

// let age = window.prompt("How old are you?");
// age = Number(age);
// age += 1;

// console.log(age, typeof age);

// let x;
// let y;
// let z;

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// const = a variable that can't be changed


// Math = buit-in object that provides a 
//        collection of properties and methods

// Math.PI;

// console.log(Math.PI);
// console.log(Math.E);

// let x = 3.99;
// let x = 45;
// let y = 2;
// let z = 1;

// z = Math.round(x); // 4
// z = Math.floor(x); // 3
// z = Math.ceil(x); // 4
// z = Math.trunc(x); // 3
// z = Math.pow(x, y); // 9
// z = Math.sqrt(625); // 25
// z = Math.log(x); // natural logarithm of a number
// z = Math.sin(x);
// z = Math.cos(x);
// z = Math.tan(x);
// z = Math.abs(-3.21);
// z = Math.sign(x);

// let max = Math.max(x, y, z);
// let min = Math.min(x, y, z);

// console.log(min);

// IF STATEMENTS = if a condition is true, execute some code 
//                 if not, do something else

// let age = 14;

// if (age >= 18) {
//     console.log("You are old enough to enter this site.");
// }
// else {
//     console.log("Yoou must be 18+ to enter this site.")
// }

// let time = 14;

// if (time < 12) {
//     console.log("Good morning!");
// }
// else {
//     console.log("Good afternoon!")
// }


// let isStudent = true;

// if (isStudent) {
//     console.log("You are a student!");
// }
// else {
//     console.log("You are NOT a student!");
// }

// Nested If Statement

// let age = 29;
// let hasLicense = true;

// if (age >= 16) {
//     console.log("You are old enough to drive.");

//     if (hasLicense) {
//         console.log("You have your license!");
//     }
//     else {
//         console.log("You do not have your license yet!")
//     }
// }
// else {
//     console.log("You must be 16+ to have a license.");
// }

/*
Ternary Operator = a shortcut to if{} and else{} statements helps to assign a variable based on a condition 
condition ? codeIfTrue : codeIfFalse;
*/

// let age = 15;

// let message = age >= 18 ? `You're an adult` : `You're a minor`;
// console.log(message);

// let time = 9;

// let greeting = time < 12 ? `Good Morning!` : `Good afternoon!`;
// console.log(greeting);

// let isStudent = false;
// let message1 = isStudent ? `You are a student!` : `You are NOT a student!`;
// console.log(message1);

// let purchaseAmount = 90;
// let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log(`You total is $${purchaseAmount - purchaseAmount * (discount / 100)}`);
/*
let day = 41;

switch(day) {
    case 1:
        console.log("It is Monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    case 4:
        console.log("It is Thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
        break;
    case 7:
        console.log("It is Sunday");
        break;
    default:
        console.log(`${day} is not a day`);
}
*/
/*
let testScore = 65;
let letterGrade;

switch(true) {
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
}

console.log(letterGrade);
*/

// String Methods - allow you to manipulate and work with text(strings)

// let userName = "Rubina Mohammed Irfan Ansari";

// let str = userName.charAt(12); // Return character at particular index
// console.log(str);

// console.log(userName.charAt(4));

// userName.indexOf("a");
// console.log(userName.indexOf("a")); // Return first occurrence of given character

// userName.lastIndexOf("a");
// console.log(userName.lastIndexOf("a")); // Return last occurence of given character 

// console.log(userName.length); // Return length of the string

// userName = userName.trim(); // Remove extra space from start and end
// console.log(userName); 

// console.log(userName.toUpperCase()); // Return entire string in upper case

// console.log(userName.toLocaleLowerCase()); // Return entire string in lower case

// console.log(userName.repeat(3));

// // userName = " Rubina Mohammed Irfan Ansari  ";

// let result = userName.startsWith("r"); // If it starts with the given value then it will return true, else return false
// console.log(result);

// if (result) {
//     console.log("You username can't begin with ' '");
// }
// else {
//     console.log(userName);
// }

// if (result) {
//     console.log(`It starts with given value`);
// }
// else {
//     console.log(`No it doesn't start with given character`);
// }

// result = userName.endsWith(" ");

// if (result) {
//     console.log("You username can't end with ' '");
// }
// else {
//     console.log(userName);
// }

// let result = userName.includes(" ");

// if (result) {
//     console.log("Your username can't include ' '");
// }
// else {
//     console.log(userName);
// }


// let phoneNumber = "123-456-7890";

// phoneNumber = phoneNumber.replaceAll("-", ""); 
// console.log(phoneNumber);

// phoneNumber  = phoneNumber.padStart(15, "0"); // return string with given length by adding value at start
// console.log(phoneNumber);

// phoneNumber = phoneNumber.padEnd(15, "0"); // return string with given length by adding value at end
// console.log(phoneNumber);

// String slicing = created a substring from a portion of another string 
//                  string.slice(start, end)

// const fullName = "Rubina Ansari";

// let firstName = fullName.slice(0, 6);
// let lastName = fullName.slice(7);

// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-1);

// console.log(firstChar);
// console.log(lastChar);

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// console.log(firstName);

// let lastName = fullName.slice(fullName.indexOf(" ") + 1);
// console.log(lastName)

// const email =  "ruby@gmail.com";

// let userName = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@") + 1);

// console.log(userName);
// console.log(extension);

// Method Chaining = Calling one method after another 
//                   in onne continuous line of code.

// let username = window.prompt("Enter your username: ");

// --------------- No method chaining ---------------

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();

// username = letter + extraChars;
// console.log(username);

// --------------- method chaining ---------------

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

// console.log(username);

// --------------- Logical Operators ---------------
/*
used to combine or manipulate boolean values (true & false)

                        AND = &&
                        OR = ||
                        Not = !
*/

// const temp = 30;

// if (temp > 0 && temp <= 30) {
//     console.log("The weather is GOOD");
// }
// else{
//     console.log("The wather is BAD");
// }

// if (temp <= 0 || temp > 30) {
//     console.log("The weather is BAD");
// }
// else {
//     console.log("The weather is GOOD");
// }

// const isSunny = true;

// if(!isSunny) {
//     console.log("It is CLOUDY");
// }
// else {
//     console.log("It is SUNNY");
// }

/*
        = assignment operator
       == comparison operator (compare if values are equal)
      === strict equality operator (compare if values & datatype are equal) 
       != inequality operator
      !== strict inequality operator 
*/

// const PI = 3.14;

// if(PI != "3.14") {
//     console.log("That is NOT Pi");
// }
// else {
//     console.log("That is Pi");
// }

// While loop = repeat some code WHILE some condition is true

let username = "Ruby";

while (username === "") {
    username = window.prompt("Enter your name");
}
console.log(`Hello ${username}`);





