// // if else q
// // 1
// let num = 10;
// if (num % 2 === 0) {
//     console.log("Even Number");
// } else {
//     console.log("Odd Number");
// }
// // 2
// let Num = -5;

// if (Num > 0) {
//     console.log("Positive");
// } else if (Num < 0) {
//     console.log("Negative");
// } else {
//     console.log("Zero");
// }
// // 3
// let year = 2024;

// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     console.log("Leap Year");
// } else {
//     console.log("Not a Leap Year");
// }
// // 4
// let ch = "a";

// if (
//     ch === "a" || ch === "e" || ch === "i" ||
//     ch === "o" || ch === "u" ||
//     ch === "A" || ch === "E" || ch === "I" ||
//     ch === "O" || ch === "U"
// ) {
//     console.log("Vowel");
// } else {
//     console.log("Consonant");
// }
// // 5
// let Age = 35;

// if (Age >= 18) {
//     console.log("Eligible for Voting");
// } else {
//     console.log("Not Eligible for Voting");
// }
// // 6
// let number = 55;

// if (number % 5 === 0 && number % 11 === 0) {
//     console.log("Divisible by 5 and 11");
// } else {
//     console.log("Not Divisible by 5 and 11");
// }
// // 7
// let Number = 18;
// let prime = true;
// if (Number <= 1) {
//     prime = false;
// } else {
//     for (let i = 2; i < Number; i++) {
//         if (Number % i === 0) {
//             prime = false;
//             break;
//         }
//     }
// }
// if (prime) {
//     console.log("Prime Number");
// } else {
//     console.log("Not a Prime Number");
// }
// // 8
// let marks = 40;

// if (marks >= 35) {
//     console.log("Pass");
// } else {
//     console.log("Fail");
// }

// // if else if else
//     // 1 electricity bill
// let units = 100;
// let bill;

// if (units <= 100) {
//     bill = units * 2;
// } else if (units <= 200) {
//     bill = (100 * 2) + ((units - 100) * 3);
// } else if (units <= 300) {
//     bill = (100 * 2) + (100 * 3) + ((units - 200) * 5);
// } else {
//     bill = (100 * 2) + (100 * 3) + (100 * 5) + ((units - 300) * 7);
// }

// console.log("Electricity Bill = ₹" + bill);
// // 2  Highest Among Four Numbers
// let a = 25, b = 80, c = 16, d = 25;

// if (a >= b && a >= c && a >= d) {
//     console.log("A is Highest");
// } else if (b >= a && b >= c && b >= d) {
//     console.log("B is Highest");
// } else if (c >= a && c >= b && c >= d) {
//     console.log("C is Highest");
// } else {
//     console.log("D is Highest");
// }

// // 3 age catgory
//  let age =92;

// if (age <= 12) {
//     console.log("Child");
// } else if (age <= 19) {
//     console.log("Teenager");
// } else if (age <= 59) {
//     console.log("Adult");
// } else {
//     console.log("Senior Citizen");
// }
// // 4
// let Marks = 85;

// if (Marks >= 90) {
//     console.log("Grade A+");
// } else if (Marks >= 80) {
//     console.log("Grade A");
// } else if (Marks >= 70) {
//     console.log("Grade B");
// } else if (Marks >= 60) {
//     console.log("Grade C");
// } else if (Marks >= 35) {
//     console.log("Grade D");
// } else {
//     console.log("Fail");
// }
// // 5
// let g = 10, h = 55, i = 45;

// if (g >= h && g >= i) {
//     console.log("g is Largest");
// } else if (h >= g && h >= i) {
//     console.log("h is Largest");
// } else {
//     console.log("i is Largest");
// }
// // nested if else 
//     // largest among three num

// let n = 20, o = 15, P = 30;

// if (n > o) {
//     if (a > P) {
//         console.log("N is Largest");
//     } else {
//         console.log("P is Largest");
//     }
// } else {
//     if (o > P) {
//         console.log("O is Largest");
//     } else {
//         console.log("P is Largest");
//     }
// }
// // Login Authentication
// let username = "admin";
// let password = "1234";

// if (username === "admin") {
//     if (password === "1234") {
//         console.log("Login Successful");
//     } else {
//         console.log("Wrong Password");
//     }
// } else {
//     console.log("Invalid Username");
// }
//     ATM Withdrawal Validation
//     let balance = 1000;
// let amount = 3000;

// if (balance >= amount) {
//     if (amount % 100 === 0) {
//         console.log("Withdrawal Successful");
//     } else {
//         console.log("Enter amount in multiples of 100");
//     }
// } else {
//     console.log("Insufficient Balance");
// }
// Triangle Type Check
// let A = 5, B = 5, C = 5;

// if (A + B > C && B + C > A && A + C > B) {
//     if (A === B && B === C) {
//         console.log("Equilateral Triangle");
//     } else if (A === B || B === C || A === C) {
//         console.log("Isosceles Triangle");
//     } else {
//         console.log("Scalene Triangle");
//     }
// } else {
//     console.log("Invalid Triangle");
// }
// addmision Eligibility
// let Mark = 60;
// let maturity = 18;

// if (Mark >= 60) {
//     if (maturity >= 17) {
//         console.log("Eligible for Admission");
//     } else {
//         console.log("Maturity Not Eligible");
//     }
// } else {
//     console.log("Mark Not Eligible");
// }
// for loop
// 1
// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//     let star = "";
//     for (let j = 1; j <= i; j++) {
//         star += "* ";
//     }
//     console.log(star);
// }
//  2
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
// 3
// let k = 10;

// for (let e = 1; e <= k; e++) {
//     console.log(e);
// }
//4
// let r = 20;
// for (let i =2;  i <= n; i +=2) {
//     console.log(i);
// }
//  5
// let v = 10;
// let sum = 10;
// for (let i = 1; i<= v;  i++){
// sum += i;
// }
// console.log("Sum =", sum);
//`6
// let m = 7;

// for (let i = 1; i <= 10; i++) {
//     console.log(`${m} x ${i} = ${m * i}`);
// }
// // 7
// let at = 14;
// let rime = true;

// if (at < 2) {
//     rime = false;
// }

// for (let i = 2; i < at; i++) {
//     if (at % i === 0) {
//         rime = false;
//         break;
//     }
// }

// if (rime) {
//     console.log("Prime Number");
// } else {
//     console.log("Not Prime Number");
// }
// // 8
// let str = "Beed";
// let rev = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     rev += str[i];
// }

// console.log(rev);

// // 9
// let u = 10;
// let s = 0, t = 1;

// for (let i = 1; i <= u; i++) {
//     console.log(s);
//     let o = s + t;
//     s = t;
//     t = o;
// }

// // while loop
// // 1
// let num = 1234;
// let rev = 0;

// while (num > 0) {
//     let rem = num % 10;
//     rev = rev * 10 + rem;
//     num = Math.floor(num / 10);
// }

// console.log("Reverse =", rev);
// // 2
//  let num = 12345;
//  let count = 0;

//  while (num > 0) {
//      count++;
//      num = Math.floor(num / 10);
//  }

//  console.log("Digits =", count);
// palindrome number
//  let num = 121;
//  let temp = num;
//  let rev = 0;

//  while (temp > 0) {
//      let rem = temp % 10;
//     rev = rev * 10 + rem;
//     temp = Math.floor(temp / 10);
//  }

//  if (num === rev) {
//      console.log("Palindrome");
//  } else {
//      console.log("Not Palindrome");
//  }
// armsrong num
// let num = 123;
// let temp = num;
// let sum = 0;
// while (temp > 0) {
//     let rem = temp % 10;
//     sum += rem ** 3;
//     temp = Math.floor(temp / 10);
// }
// if (sum === num) {
//     console.log("Armstrong Number");
// } else {
//     console.log("Not Armstrong Number");
// }
// factoral
// let n = 4;
// let fact = 1;

// while (n > 0) {
//     fact *= n;
//     n--;
// }

// console.log("Factorial =", fact);
// do while loop
// 1

// let choice = 3;

// do {
//     console.log("1. Add");
//     console.log("2. Subtract");
//     console.log("3. Exit");

//     if (choice === 1) {
//         console.log("Addition Selected");
//     } else if (choice === 2) {
//         console.log("Subtraction Selected");
//     }

//     choice++;
// } while (choice <= 3);
// 2
// let choice = 1;
// let a = 10, b = 5;

// do {
//     switch (choice) {
//         case 1:
//             console.log("Addition =", a + b);
//             break;

//         case 2:
//             console.log("Subtraction =", a - b);
//             break;

//         case 3:
//             console.log("Multiplication =", a * b);
//             break;

//         case 4:
//             console.log("Division =", a / b);
//             break;
//     }

//     choice++;
// } while (choice <= 4);
// 3
// let password = "1234";

// do {
//     console.log("Checking Password...");
// } while (password !== "1234");

// console.log("Login Successful");
// // 4
// let i = 1;

// do {
//     console.log(i);
//     i++;
// } while (i <= 10);
// // type of operator
//  let name = "Nilkanth";
//  console.log(typeof name);
// // 2
// let value = null;
// console.log(typeof value);
// // 3
// let Value;
// console.log(typeof Value);
// // 4
// let value1 = NaN;
// console.log(typeof value1);
// // 4
// let num1 = 100;
// let str = "Hello";
// let isStudent = true;
// let arr = [10, 20, 30];
// let obj = { name: "John" };

// console.log(typeof num1);
// console.log(typeof str);
// console.log(typeof isStudent);
// console.log(typeof arr);
// console.log(typeof obj);
 // swith case 
// 1
// let num1 = 10;
// let num2 = 2;
// let choice = 3;

// switch (choice) {
//     case 1:
//     console.log("Addition =",num1 + num2);
//     break;

//     case 2:
//     console.log("substraction =",num1 - num2);
//     break;

//     case 3:
//         console.log("multiplacation =",num1 * num2);
//         break;
        
//         case 4:
//         console.log("division =",num1 / num2);
//         break;
//         defualt:
//         console.log("invalid choice");
        
// }
// // 2 day of week
// let day = 3;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     case 3:
//         console.log("Wednesday");
//         break;

//     case 4:
//         console.log("Thursday");
//         break;

//     case 5:
//         console.log("Friday");
//         break;

//     case 6:
//         console.log("Saturday");
//         break;

//     case 7:
//         console.log("Sunday");
//         break;

//     default:
//         console.log("Invalid Day");
// }
// // 3
// let month  =9;
// switch (month) {
//       case 1:
//         console.log("jan");
//         break;
//         case 2:
//          console.log("feb");
//          break;
//        case 3:
//          console.log("march");
//          break;
//             case 4:
//          console.log("april");
//          break;
//          case 5:
//          console.log("may");
//          break;
//          case 6:
//          console.log("june");
//          break;
//          case 7:
//         console.log("July");
//         break;

//     case 8:
//         console.log("August");
//         break;

//     case 9:
//         console.log("September");
//         break;

//     case 10:
//         console.log("October");
//         break;

//     case 11:
//         console.log("November");
//         break;

//     case 12:
//         console.log("December");
//         break;

//     default:
//         console.log("Invalid Month");
// }
// 4
// let choice = 2;

// switch (choice) {
//     case 1:
//         console.log("Addition");
//         console.log("10 + 5 =", 10 + 5);
//         break;

//     case 2:
//         console.log("Subtraction");
//         console.log("10 - 5 =", 10 - 5);
//         break;

//     case 3:
//         console.log("Multiplication");
//         console.log("10 * 5 =", 10 * 5);
//         break;

//     case 4:
//         console.log("Division");
//         console.log("10 / 5 =", 10 / 5);
//         break;

//     case 5:
//         console.log("Exit");
//         break;

//     default:
//         console.log("Invalid Choice");
// }

// 1 named function
// function greet() {
//     console.log("Nikhil");
    
// }
// greet();

// // 2 anonymous function
// let msg = function() {
//     console.log("hello everyone");
// };
// msg();

/// 3 function expression
// const state=function() {
//     console.log("Punjab");   
// }
// state();
 // 4 arrow fun
// const add = (a, b) => a + b;
// console.log(add(20,40));
 // 5 callback fun
// function gree(name) {
//     console.log("nikhil" + name);
    
// }
// function processer(callback) {
//     callback("Birajdar")
// }
// processer(gree);
 // 6 higher-order function
// function calculate(a,b,operator) {
//     return operator(a,b);
// }
// console.log(calculate(5,5,(a,b)=> a+b));
 // 7 self-invoking function
// (function(){
//     console.log(" how are you");
    
// })();

 
// let data = new Promise((reslove,reject)=>{
//     let  sucess = true;
//     if(){

//     }
// })

