//this call apply bind
//this: class object method
//strict mode vs non strict mode
// 'use strict'
//Global Object: In window it is called window, in node js ,It is called global

//this keyword in global scope : NodeJS(Empty object), in browser it will point to global object

//normal function: without strict mode, this will point to global object.
//in strict mode it will point to undefined mode


// var a = 10;
// var b = 20;

//  console.log(a,b);
//  function greet (name1,name2){
//        console.log(name1,name2);
//  }
//   greet("Rohit", "Mohit");

// console.log(window);

// document.getElementById("first")
// console.log(global);
// console.log(globalThis);

//Learn about this keyword
// 'use strict'
// console.log(this);

//Function 
//100 user: greet function : 100*memory,code copy paste

'use strict'

function greet(){
    console.log(`hi ${this.name}`);
}

function incrementAge(value,name){
    this.age+=value;
    this.name=name;
    console.log(this.age);
    console.log(this.name);
}

const user = {
   name:"Rohit",
   age:30
}

const user2 = {
   name:"Mohit",
   age:40
}

// greet.call(user);
// greet.call(user2);

//Three: call,apply and bind....

// incrementAge.call(user,15,"Divyansh");

// incrementAge.apply(user2,[15,"Divyansh"]);

// const incr = incrementAge.bind(user2,10,"Divyansh");
// console.log(incr);





//this == user

// user2.greet();


// 'use strict'
// function greet(){
//     console.log(this)
// }
// greet();






