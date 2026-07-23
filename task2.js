// let i=1;
// for(i=1; i <= 10; i++){
//         let row = "";
// let = 1;
//     for( j = 1; j <= 10; j++) {
//         row += (i * j )+ "\t";
//     }   

// console.log(row);
// }



// Array forEach method prg
//  let arr = [1,2,3,4,5];
//  arr.forEach(num => console.log(num)); /* print all num */
//  arr.forEach(num => console.log(num * num));/* square each num */
//  arr.forEach(num => console.log(num * num *num)); /*cube each num*/
//  arr.forEach(num =>{
//    if  (num % 2 ==0)
//   console.log(num);});/*even num*/
//  arr.forEach(num => {
//      if(num % 2 != 0)
//          console.log(num);});/*odd number */
//  let element = [1,2,3,4,5]
//      let sum = 0;
//      element.forEach((element)=> {
//          sum = sum + element
//          console.log("sum:", sum);
//          console.log(element %2==0);     

//    })/* sum of array*/

//  let arry = [1,2,3,4,5];
//      let product = 1;
//      arry.forEach(num => product *= num);
//      console.log(product); /* product of array*/
    
//      let arrs = [1,2,3,4,5,6,7,8,9,10];
//      let count = 0;
//      arrs.forEach(() =>  count++);
//      console.log(count);/*count element*/

//      let arr2 = [1,2,3,4,5];
//      arr2.forEach((value, index) => console.log(index, value)); /* index value */
    
//      let arr3 = [1,2,3,4,5];
//      arr3.forEach(num => console.log(num * 10));/* multiple by  10*/
//      let arr4 = [1,2,3,4,5];
//      arr4.forEach(num => console.log(num / 2)); /* divide by 2 */

//      let name = ["Ram","shyam","rohan"];
//      name.forEach(name => console.log(name[0])); /* first char to  string*/
//     name.forEach(name => console.log(name.length));/*count to length string */
   
// // // map()
//      let arr1 = [1, 2, 3, 4, 5];
//   let square = arr1.map(num => num * num);
//   console.log(square);   

//  let arr5 = [10,20,30,40,50]
//  let result = arr5.map(num => num * num);
//  console.log(result);

//  let num = [2,3,4,5,6,];
//  console.log(arr.map(num => num +5));
//  console.log(arr.map(num => num -1));
//  console.log(arr.map(num => num *2));
//  console.log(arr.map((num, index) => num + index));
// console.log(num.map(num => num % 2));


//  let name1 = ["nil","krish","vedant"];
//  let result3 = name1.map(name => name.length);
//  console.log(result3);

//  const nums = [1,2,3];
//   const doubled = nums.map(num => num * 2);
//   console.log(doubled);

// let arr1 = [ 90,80,70,60,50,40,];
// console.log(x => x * 2);

// filter()
//  let even = arr.filter(num => num % 2 === 0);
//   console.log(even); 

//  let a = ["nil", "anat"];
//  let show = a.filter(dn => dn.endsWith("l"));
//  console.log(show);

//  let b = ["krish", "shree"];
//  let show1 = b.filter(dn => dn.startsWith("k"))
//      console.log(show1);

// let arr = [10,20,30,40,50];
// console.log(arr.filter(x => x > 20));

    

//  let names = ["Ram","Shyam","Amit","Raj"];
//  console.log(names.filter(name => name.length > 4));

//  let name2 = ["Ram","om","sham","raj"];
//  console.log(name2.filter(name => name.length >5 ));

// let names3 = ["ram","shyam","ravi"];
// console.log(names3.map(name => name.toUpperCase()));

// const nums = [1,2,3,4,5];
// const odd = nums.filter((num )=>
//     {
//         return num % 2 !==0;
//     });
// console.log(odd);

// const nums = [1,2,3,4,5];
// const even = nums.filter(num => num % 2 === 0);
// console.log(even);



// push method
// const arr = [1,2];
// arr.push("anil");
// console.log(arr);

// let name = ["nilkhil","aryan"];
// name.push("Sachin");
// console.log(name);

// // remove-duplicate
// const nums = [1,2,2,3,3];
// const unique = [...new Set(nums)];
// console.log(unique);

// // find largest number  in arry
// let arr = [20,50,60,80,29];
//  let largest = arr[0]

//  for (i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         largest = arr[i];
//     }
//  }
//  console.log("Largest number:", largest);
 
// //  sum of all array

// let arr1 = [20,50,60,88,25];
// let sum = 0;
// for(i = 0; i < arr.length; i++){
//     sum+= arr[i];

// }
// console.log("sum =", sum);

// // count in arry lenth
// let arr3 = [10,22,30,75,50,80];
// let count = 0;
// for (let i = 0; i < arr3.length; i++) {
//     count++;
// }
// console.log("count=", count);

// // remove duplicates
// let arr4 = [10,20,50,40,30,50,,40];
// let unique1 =  arr4.filter((item, index) => {
//     return arr4.indexOf(item) === index;
// });
// console.log(unique1);

// // fin second largest num
// let arr5 = [10,88,33,66,20];
// arr5.sort((a, b) => b - a);

// console.log(" Largest:", arr5[0]);

// // reverse arry  & sort
// let arr2 = [10,20,30,40,50,60,70];
// arr2.sort((a,b) => a-b);
// arr2.reverse();
// console.log("Reversed Array:", arr2);


// const users = [10,20,30,40];
// const result = users.find(num => num > 20);


// reduce 
// let arr6 = [10,20,30,40,50];
// console.log(arr6.reduce((a,b)=> a+b, 0));


// obj  
// spread operator
// let user = {
//     name: "nikhil",
//     age:23
// };
// let newuser = {
//     ...user,
//     "city": "pune"
// }
// console.log(newuser);

// reset oprator

// counter with using closur
// function createCounter(){
//     let count = 0;

//     return function(){
//         count++;
//         console.log(count);  
//     };
// }
// const counter = createCounter();

// counter();
// counter();

// currying function
// function multiply(a) {
//     return function(b) {
//         return a*b;
//     };
// }

// const double = multiply(2);
// console.log(double(5));
// console.log(double(50));

// let studentdata = {
//     "name" : "nilkant",
//     "address" : {
//         "state" : "maharshtra",
//         "city" : "pune",
//         "area" : {
//             "colony" : "Sainath nagar",
//             "pincode" : 1234,
//         }
//     },
//     "phone": [7410178511,7972128830],
//     "education" : "Bsc.CS",
// }
// console.log(studentdata);
// console.log(studentdata.phone[0]);
// console.log(studentdata.address.area.pincode);

// let user = {
//     name: "nikhil",
//     age:23
// };
// let newuser = {
//     ...user,
//     "city":"pune"
// }
// console.log(newuser);

// Destructring method
// let arr = [1,2,3,4,5,6,7];

// let [a, ...reset] = arr;
// console.log(arr);
// console.log(a);
// console.log(reset);
// //  in parameter
// function display({ name, age}) {
//     console.log(name);
//     console.log(age);
// }
// display({
//     name: "Ram",
//     age: 25
// });

// swap two variables

// let a = 10;
// let b = 20;

// [a, b] = [b, a];
// console.log(a);
// console.log(b);


// let numbers = [10,20,30,40];
// let [first, ,third] = numbers;
// console.log(first);
// console.log(third);

// shallow copy ex
// let arr1 = [5,10,15];
// let arr2 = Array.from(arr1);
// arr2[1] = 50;
// console.log(arr1);
//  console.log(arr2);

// let student1 = {
//     name: "Ravi",
//     marks: [80,90]
// };
// let student2 = {...student1};
// student2.marks.push(100);
// console.log(student1.marks);
//  console.log(student2.marks);

// let arr1 = [10,20,30];
// let arr2 = [].concat(arr1);
// arr2[2] = 99;
// console.log(arr1);
// console.log(arr2);

// deep copy 
// let user1 = {
//     name: "John",
//     address:{
//     city:"pune"
//     }
// };
// let user2 = structuredClone(user1);
// user2.name = "nikhil";
// user2.address.city = "Mumbai";
// console.log(user1);
// console.log(user2);

// Dom method
setInterval(function (){
    console.log("nikanth");
},4000);
console.log("end");

// clear timeout


