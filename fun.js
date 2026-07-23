// function add(a, b){

//     console.log(a+b);
    
// }add(5, 6);


// function add(a=5,b=6){
//     console.log(a+b);
    
// }add()

// function myFunction(msg) {
//     console.log(msg);
//   }myFunction("I Love Pune"); 

// function sum(x, y){
//     console.log(x + y);
// }

// fun name
// function state(a,b){
 
//  console.log(name);

// }
//  function add(a,b){
//    return a+b
// }
//  console.log(add(5,3)) ;

 //  fun expression

//  const state=function(){
//   console.log("nilkhil");
  
//  }
//  state();
// 

// const add = function(a,b) {
//   return a+b;
// }
// console.log(a+b);
// annyoms fun
// const state=function(){
//    console.log("nilkhil");
  
//   }
//   state();

// arrow fun

// const greet = () => {
//   console.log("hello");
  
// };
// greet();

//  call back fun
//  function greet(name){
//    console.log("nikhil" + name);
  
//  }
//  function processuser(callback){
//    callback("nil");

//  }
//  processuser(greet);

// HOF 
// function greet () {
//   console.log("hello" );
// }
// function processer(callback){
//   callback();
// }
// processer(greet);

// 
// function evenodd(num) {
//     if (num % 2 == 0) {
//         console.log(num + " is Even");
//     } else {
//         console.log(num + " is Odd");
//     }
// }
// evenodd(2);
// evenodd(3);

// function fun() {
// console.log("hello world!");
// }
// function fun2(action) {
//     action();
//     action();
// }
// fun2 (fun);

// const user = { name: "Mahesh", age: 25};
// const { name, age} = user;
// console.log(name);
// console.log(age);

// const colors = ["red","green","blue"];
// const [first, second,] = colors;

// console.log(first);
// console.log(second);

 const number = [1, 2, 3, 4, 5];     

const double = number.map( function(num) {
    return num * 2;
    console.log(num);
})
 console.log(double);