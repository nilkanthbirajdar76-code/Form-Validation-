// unshift method
// let a =["apple","mango","chickoo"];
// a.unshift("banana","jackfruit")
// console.log(a);
//  a.shift()  
// console.log(a);
// push
// a.push("banana",)
// console.log(a);
// pop
// a.pop("chikoo")
// console.log(a);
// revrse
// let a = [1,2,3,4,5];
// a.reverse();
// console.log(a);
// join
// let b = [1,2,3,4,5];
// let result=a.join('');
// console.log(result);
// reverse a string
// let string="hello";
// let result=string.split("").reverse().join("");
// console.log(result);
// AT
// let n=["nil","Nilu"];
// let res= n.at(1);
// console.log(res);
// // for each
// let  k=[1,2,3,4,5,6];
// k.forEach((k,index) => {
//     console.log(k,index);
// })

// let element = [1,2,3,4,5,];
// element.forEach((element,index,whole)=>{
//     console.log(element,index,whole);
// })

// double
// let element = [1,2,3,4,5,];
// element.forEach((element)=>{
//     console.log(element *2);
// })

// let element = [1,2,3,4,5,];
// let sum =0;
// element.forEach((element)=>{
//     sum = sum + element
//     console.log("sum:",sum);
    
//  console.log(element %2 ==0);

// })
// fact
// let element = [1,2,3,4,5];
// let fact =1;
// element.forEach((element)=>{
// fact = fact * element
// })
// console.log(fact);

// let names = ["nil","niranjan","sanket"]
// names.forEach(()=>{
// console.log("nil"+names);

// })
// double 
// let arr = [1,2,3,4];

// let result = arr.map(num => num * 2);
// console.log(result);

// return
//  let arr= [1,2,3,4];
 
//  let result = arr.map((element)=>{
// return element *2
// })
// console.log(result);

// get string length
// let names = ["nil","krish","Sara"];

// let result = names.map(name => name.length);
// console.log(result);




// let n = [1,2,3,4];
//  let result=n.filter((element)=>{
//     return element % 2 ==0;
// })
// console.log(result);

// // 
// let names = ["Ali","John","Sam"];

// let result = names.filter(name => name.length > 3);

// console.log(result);

// some
// let sam =[1,2,3,4,5,6,7,8,9,10];
// // let greaterthan6 = sam.filter(mn => mn >= 6);
// // console.log(greaterthan6);
// let than = sam.some(mn )
// every
// let num =[10,20,30,40,50,60,];
// let than = num.every(ab => ab % 2===0);
// console.log(than);
// let arr = [15, 20, 22, 30];
// let result = arr.every(num => num > 10);
// console.log(result);


// let fruits= ["Apple","jackfruit","mango","banana"];
// let result = fruits.every(fruit => fruit.length > 10)
// console.log(result);


// flat
//  let anat =[420,[92.1]];
//  let name = anat.flat(2)
//  console.log(anat);

// let fruits = ["Apple",["Banana","Mango"],["Orange"]];
// let fruit = fruits.flat();
// console.log(fruit);

// let p = [10,30,[30,40][19,20,10]];
// console.log(p.flat(2));
// flat map

// let arr = [1,2,[3],[4]];
// let result = arr.flatMap((num) => [num * 2]);
// console.log(result);

// let arr1 = ["nil","adi","shree"];
// let result = arr1.find((elm => elm ["2"]));
// console.log(result);

// let number = [{name:'Anant',role:'Admin'}];
// let new1 = number.findIndex((element)=>{
//     return element.role === 'Admin';
// });
// console.log(new1);

// flat-map
// let number =[1,2,[10,11],12,20];
// let new1 = number.flat().map((element) => {
//     return element * 2;
// });
// console.log(new1);


// let arr = [1,3,4,6,8];
// let result = arr.find((element)=>{
//     console.log();
// })

// let number = [10,20,30,40,50];
// let new1 = number.find ((element)=>{
//      return element < 25;
// })
// console.log(new1);


// let names = ["ali", "john", "sara"];
// let result = names.find(str => str ["c"]);
// console.log(result);

// findindex
// let arr = [1,3,4,6,8];
// let result = arr.findIndex((element)=>{
//     return element % 2 === 0;
// });
// console.log(result);

// sort
// let arr = [10,5,100,25];
//  arr.sort();
// console.log(arr);

// let num = [50,10,30,20,40];
// num.sort((a,b) => b-a);
// console.log(num);

//  using return
//  let arr = [1,2,3,4,5];
//  arr.sort((a, b)=> {
//     return b-a;
//  });
// console.log(arr);

// reduce value
// let arr = [1,2,3,4,5,6,7];
// let result = arr.reduce((acc, curr) =>{
//     return acc - curr;
// },1);
// console.log(result);

//  maximum and minimum  without in build method

// let arr = [1,2,3,4,5,6,7,8];
// let min = arr[0];
// for(i=0;i < arr.length;i++){
//     if(arr[i] < min){
//         min = arr[i]
//     }
// }
// console.log(min);


// using in-build method
// let result = arr.reduce((max,min)=>{
//     return max > min ?  max : min;
// })
// console.log(result);


// // swaping
// let a =10;
// let b=20;
// a= a+b;
// b= a-b;
// a=a-b
// console.log(a,b);
// frequent repeat without in build method
// let arr= [1,2,3,4,5,5,4,3,2,1,54,59,30,20,,4,1];
// let count = {};

// for (let i =0;i<=arr.length;i++){
//     count[arr[i]] = (count[arr[i]] || 0)+1
// }
// console.log(count);
//  frequent repeat of element using in-build method
// let arr= [1,2,3,4,5,5,4,3,2,1,54,59,30,20,,4,1];

// let result = arr.reduce((a,b)=>{
//     a[b] = (a[b] ||0)+1;
//     return a
// },{})
// console.log(result);
