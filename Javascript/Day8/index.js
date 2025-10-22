//function

// function greeting(){
//     console.log("I am back");
//     return 10; //If didn't return anything it shows undefined after printing statement;
// }

// function addNumber(num1,num2,num3=0,num4=0){
//     const sum = num1+num2+num3+num4;
//     console.log(sum);
// }

//rest
// function addNumber(...num){
    
//     let sum = 0;
//     for(let n of num){
//         sum+=n;
//     }
//     console.log(sum);
// }






// // greeting();
// // addNumber(3,4);
// addNumber(9,4);//if didn't set default zero it return NaN.
// addNumber(9,4,5);
// addNumber(9,4,3,8);

// console.log(greeting());

// const arr = [10,20,30,40,50];
// const arr2 = [30,70,90,10];

// const[first,second,...num] = arr;
// console.log(first,second,num);
//Rest operator are used to catch the individual values.

// const ans = [...arr,...arr2];
// console.log(ans);
// Spread operator are applied direct on objects,array to open it.


//function: expression
// // console.log(addNumber(3,5)); //(We have to create function first in this type of declaration)

// const addNumber = function(num1,num2){
//     return num1+num2;
// }
//  console.log(addNumber(3,5));

//arrow function

// const addNumber = (num1,num2)=>{
//     // console.log("Hello ji")
//        return num1+num2;
// }


// const addNumber = (num1,num2)=>num1+num2

// const squareNumber = num=>num*num 
//If we have single parameter no need of bracket() as well.

// console.log(addNumber(3,2));
// console.log(squareNumber(9));

// const greeting = ()=>{
//     let user = {
//        name:"Divyansh",
//        age:21, 
//     }
//     // return user;

// }

// const greeting = ()=>{
//     return {
//        name:"Divyansh",
//        age:21, 
//     }
    

// }

// const greeting = ()=>({name:"Divyansh",age:21,});
    
// console.log(greeting());


// IIFE function (immidiately invoked function)
// (function greeting(){
//     console.log("Hi");
// })();

// (()=>{
//     console.log("hi")
// })();

//Callback function:Pass function under a function as an argument.

// function greet(callback){
//     console.log("Hello ji, kaise ho")
//     callback();
//     console.log("Going with the flow")
// }

// function meet(){
//     console.log("Bus badhiya, apna batao")
// }

// // greet();
// // meet();
// greet(meet);


