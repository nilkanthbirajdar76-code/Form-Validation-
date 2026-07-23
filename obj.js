// let person={
//     "name" : "nil",
//     "Std" : 10,
//     "div" : "a",
//     "school" : "Mit school",
//     "age" : 22,
// }


// console.log(person);
// // view the name dot notaion
// console.log(person.name);
// console.log(person.Std);

// // bracket notation

// console.log(person["school"]);
// // updated age
// console.log(person.age = 24);

// // add nre proprty
// person.country = "india"
// console.log(person.country);
// console.log(person);

// // delete 
// delete person.country;
// console.log(person);

// ex obj
//  let studentdata = {
//      "name" : "nikhil",
//      "age" : 16,
//      "address":{
//          "state" : "maharashtra",
//          "city": "pune",
//          "area" : {
//              "colony" : "Sainath nagar",
//              "pincode" : 1234,
   
//         }
        
        
//      },
//       "phone": [7410178511 ,7972128830],
//          "education" : "BSC.CS", 
//  }
//  console.log(studentdata);
//  console.log(studentdata.phone[0]);
//  console.log(studentdata.address.area.pincode);

// console.log(studentdata.area?.building);

// obj.keys
// let user = {
//     name: "john",
//     age:24
// };

// let result = Object.assign({},user)
// console.log(result);

// console.log(user);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// json format covert js object
// let user2 = `{
//      "name" : "john",
//      "age" : 25
// }`;
// 
//  let result2=JSON.parse(user2)
//  console.log(result2);
// stringfy ex
// let user = {
//     name : "nil",
//     age : 22
// }
// let result = JSON.stringify(user);
// console.log(result);

// 1 .json => js object

// let  user  = {
//  name : "maheboob",
//  age : 22
// }
//  let result1 =JSON.stringify(user);
//  console.log(result1);
 
// // 2.js object => json

// let  user3  = `{
//  "name" : "maheboob",
//  "age": 22
// }`

// let result = JSON.parse(user3);
// console.log(result);
// spread operator
// let arr = [10,20,30,40,50];
// console.log(...arr);
// console.log(arr);

// let arr1 = [10,20,30,40,50];
// let arr2 = [...arr1,60,70];
// console.log(arr2);
// // push method
// let arr3 = [80,90];
// arr3.push(arr1);
// console.log(arr3);

// data1 to data2 using spread opeartor

// let user = {
//     name: "nikhil",
//     age:23
// };
// let newuser = {
//     ...user,
//     "city": "pune"
// }
// console.log(newuser);

// rest operator
// function sum(...nums){
//     console.log(nums);
    
// }
//  without spread operator

// function sum(num_array){
//     console.log(num_array);
// }

//  sum([10,20,30,40,50]);
//  with spread operator
// function sum2(...num_array){
//     console.log(num_array);
// }

// sum2(10,20,30,40,50);

// use case 1.copy arry/object 2.merg add a+b 

//  destructuring storing the values into the variable
// let arr = [1,2,3,4,5,6,7,8];

// let[a, ...rest] = arr;
//  console.log(arr);
//  console.log(a);
// console.log(rest);


// closure use to count method
//   function outer() {
//       let count = 0;

//       function inner(){
//           count++;
//           console.log(count);
        
//    }
//       return inner
//   }
//   let closure=outer();
//   closure();
//   closure();
//   closure();
//   closure();
//   closure();
//   closure();
//   closure();

// function outer() {
//     let message = "Nilkanth  Birajdar";
//     function inner() {
//         console.log(message);
//     }
//     return inner;
// }
// let result = outer();
// result();
// result();
// cuurying function 
//   function outer(a){
//     return function(b){
//     return function(c) {
//     return a + b + c;
//         };
//       }
//   }
//   console.log(outer(1)(2)(3));

// sum prog using infinte currying fun 
//  function add(a){
//      return function(b){
//          if(b !== undefined) {
//              return add(a+b)
//          }
//          return a;
//      }
//  }
//  console.log(add(1)(2)(3)(4)(5)());
// function add(a) {
//     return function (b) {
//         return a + b;
//     };
// }
// console.log(add(10)(20));
// const multiply = a => b => a * b;
// console.log(multiply(5)(4));

// shallow copy and deep copy
// let user1 = {
//     name : "John",
//     address: {
//         city: "pune"
//     }
// };
//  let user2 ={...user1};
// user2.name = "nil"
// user2.city = "latur"
 
// console.log(user1);
// console.log(user2);
// shallow copy
// let user1 = {
//     name: "john",
//     address: {
//         city: "pune",
//         pincode: 413215 
//     }
// };

// let user2 = { ...user1};
// console.log(user2);

// user2.name = "nil";
// console.log(user2);

// user2.address.city="mumbai"
// user2.address.pincode = 345678


// deep copy

// let user1 = {
//     name: "john",
//     address:{
//         city:"pune"
//     }
// };
// let user2 = structuredClone(user1);

// user2.name = "Mike";
// user2.address.city = "Mumbai";

// console.log(user1);
// console.log(user2);


// destructuring
// const fruits = ["Apple","banana","mango"];

// const [first,second,thrid] = fruits;
// console.log(first);
// console.log(fruits);
// // with obj
// const student = {
//     name: "nikhil",
//     age: 23,
//     city:"pune"
// };
// const {name, age, city} = student;
// console.log(name);
// console.log(age);
// console.log(city);

// Document object model
// set time out
// console.log("start");

// setTimeout(function () {
//     console.log("hello");
// },4000);
// console.log("end");

// set interval
// setInterval(function () {
//     console.log("hello");
    
// },3000);

// clear timeout
//  let timer = setTimeout(function() {
//      clearTimeout("timer")
//     console.log("hello");

// },2000);
// console.log(timer);


