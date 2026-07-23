// string methods

// let name = "NIL";
// console.log(name.toLowerCase());
// console.log(name.toUpperCase());
// // trim

// let name1 = "  Nilkanth";
// console.log(name1.toLowerCase());
// console.log(name1.trimStart());
// console.log(name1.trimEnd());
// 
// let a= "nilkanth ";
// console.log(a.concat("birajdar"));

// let b= "nilkanth birajdar";
// console.log(b.replace("d" , "b"));

// let c="javascript";
// console.log(c.replace("ja" , 123));
// console.log(c.replaceAll("javascript" , "typescript"));
// console.log(b.length);

// slice method
// console.log(c.slice(0, 5));
// console.log(c.slice(4));
// console.log(c.slice(6));

// splice method is main used to array
// let arr= [10,20,30,40,50];
// arr.splice(1,2);
// console.log(arr);

//  sub-string
//  let str="javascript";
//  console.log(str.substring(0, 4));
//  console.log(str.substring(4, 10));

// prg fibona series

// let n=10;
// let a=0;
// let b=1;

// console.log(a);
// console.log(b);
// for(let i = 0; i<=10; i++)
// {
//     let c = a+b;
//     console.log(c);
//     a = b;
//     b = c;
// }
// pad-start
// let name1 = "nikhil";
// console.log(name1.padStart(10, "hi"));
// pad-End
// let str = "42";
// console.log(str.padEnd(5, "*"));

// char-at arg-1
// let str = "hello";
// console.log(str.charAt[6]);

// char -code -at
//   let name1 = "nikhil";
//  console.log(name1.charCodeAt("k"));
//   console.log(name1.fromCodeAt(""));

// charAT negative indexing right to left show 
// let name2= "java"
// console.log(name2.at(1));
// console.log(name2.at(-4));

// split method
// let name1 = "java"

// console.log(name1.split(""));
// console.log(name1.split('a','2'));
// startwith
// let a = "java";
// console.log(a.startsWith("Java"));

// includes
// let a = "Java";
// console.log(a.includes("J",2));

// index-of
// let name1 = "Nilkanth birajdar";
// // console.log(name1.indexOf("a"));
// console.log(name1.search("birajdar"));
// console.log(name1.repeat("2"));

 
// let name1 = "  Nilkanth";
// console.log(name1.toLowerCase());
// console.log(name1.toUpperCase());
// console.log(name1.charCodeAt("l"));
// console.log(name1.padEnd(5));

// 
// let c = "NIKHIL";
// console.log(c.slice(0, 3));
// console.log(c.padStart(10, "hi"));
// console.log(c.padEnd(10, "hi"));
// console.log(c.includes("L",6));
//  console.log(c.replaceAll("I" , "A"));
// let arr= [10,20,30,40,50];
//  arr.splice(1,2);
// console.log(arr);
 
// armstrong
let n = 153;
let sum = 0;
let Temp = n;

while (n >153) {
    let c = n%10;
    sum = sum+c*c*c;
    n =Math.floor(n/10)
}
if (Temp===sum){
    console.log(`${n} is an amstrong number`);
    
}else{
    console.log(`${n} is not amstrong number`);
    
}