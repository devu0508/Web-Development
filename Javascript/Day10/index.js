//Scope and Closure ,HOF
//Global-->Accessible to all
//functional-->Accessible to that function only
//block level scope-->Accessible to that block only


// let a = 10;
// const b = 20;
// var e = 90;//Didn't respect the block ,we can access outside block also.

// console.log(a);

// if(true){
//     let d = 25;
//     var e = 90;
//     console.log(b);

// }

// // console.log(e); //Can access outside block(var)
// // console.log(d); ERROR

// function greet(){
//     let c = 30;
//     // console.log(a);
//         console.log(c);

// }
// greet();


// let global = 30;
//  function greet(){
//     let global = 40;
//     console.log(global);
//  }
//  greet();


// function greet(){
//     let global = 40;
//  function meet(){
//    // let global = 30;
//     console.log(global);
//  }
//  meet();
// }
// greet();

// function createCounter(){
//     function increment(){
//         console.log("I am a increment function");
//     }
//     // increment();
//     return increment();
// }
//  const count = createCounter();
//  console.log(count);

// function createCounter(){
//     let count = 0;
//     function increment(){
//         count++;
//         return count;
//     }
//     return increment;
// }
// // console.log(count);
// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
//Closure-->Function bundled with its lexical scope.

// let user = {
//     balance: 500,
//     deposit: function(amount){
//         if(typeof amount=="number" && amount>0){
//             this.balance+=amount;
//             return this.balance;

//         }
//     }
// }

// console.log(user.deposit(200));

// let balance = 500;
// //private
// let user = {
//     deposit: function(amount){
//         if(typeof amount=="number" && amount>0){
//             balance+=amount;
//             return balance;

//         }
//     },
//     withdraw: function(amount){
//       if(typeof amount=="number" && amount>0 && balance>=amount){
//             balance-=amount;
//             return balance;
  
//     }
// },
// getBalance: function(){
//     return balance;
// }
// }

// console.log(user.getBalance());
// console.log(user.deposit(500));
// balance = "Rohit"
// user.balance = "Rohit"

// method to access(function)
//balance: usko directly access na kr paye

// function createBankAccount(){

//     let balance = 500;
//     //private
//     const user = {
//     deposit: function(amount){
//         if(typeof amount=="number" && amount>0){
//             balance+=amount;
//             return balance;

//         }
//     },
//     withdraw: function(amount){
//       if(typeof amount=="number" && amount>0 && balance>=amount){
//             balance-=amount;
//             return balance;
//             }
//     },
//     getBalance: function(){
//       return balance;
//     }
//     }
//   return user;

// }

// const customer = createBankAccount();
// console.log(customer.deposit(200));
// console.log(customer.getBalance());
// console.log(customer.withdraw(300));

//HOF-->Function accepting another function as argument or returning function as output.

