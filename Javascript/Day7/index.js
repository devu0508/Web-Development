// Object
// const user = {
//     name: "Divyansh",
//     age: 21,
//     emailId:"upadhyay@gmail.com",
//     amount: 32000,
//     "home address":"Gorakhpur"
// } //create

// console.log(user["name"]); //To access we have to give name as string
// console.log(user.age);
// console.log(user["age"]);
// console.log(user["home address"]);
// console.log(user);
// console.log(typeof user);

// CRUD Operations:Create Read Update Delete

// console.log(user.age); //read

// user.aadhar = 2451;//update
// user.amount = 50000;//update
// console.log(user)

// delete user.emailId; //delete
// console.log(user);


// const user = {
//     name: "Divyansh",
//     age: 21,
//     emailId:"upadhyay@gmail.com",
//     amount: 32000,
// } 

// const user2 = user;
// user2.age = 30;
// console.log(user)

//If we only want keys
// *IMPORTANT*
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));


// for(let keys in user){
//     console.log(keys, user[keys]);
// }
// user.keys user["name"] user["age"]


// const user = {
//     name: "Divyansh",
//     age: 21,
//     emailId:"upadhyay@gmail.com",
//     amount: 32000,
// } 

// const name = user.name;
// const age = user.age; //Bad way

//object ko destructuring krna
// const{name,age} = user;
// const{name:userName,age:userAge} = user;  //Good way
// console.log(name,age);
// console.log(userName,userAge);

// const arr = [10,20,40,90,45];
// const [first ,second] = arr;
// console.log(first,second);


//We can't use for of loop on objects directly,we can apply it on the array(what we get through Object.keys(user) this.)
// const temparr = Object.keys(user);
// console.log(temparr)
// for(let keys of temparr){
//     console.log(keys);
// }

// for(let values of Object.values(user)){
//     console.log(values);
// }

// for(let values of Object.entries(user)){
//     console.log(values);
// }

// for(let [keys,values] of Object.entries(user)){
//     console.log(keys,values);
// }

//We can create funtions as well under the objects
// const user = {
//     name: "Divyansh",
//     age: 21,
//     emailId:"upadhyay@gmail.com",
//     amount: 32000,
//     greeting:function(){
//         // console.log("I am back")
//         console.log(`I am back ${this.name}`); //Don't use user keyword(not preffered) instead use this keyword
//         return 20;
//     }
// } 

// // user.greeting(); //Function call

// const va = user.greeting();
// console.log(va); //function return 20


// We can create objects under objects
// const user = {
//     name: "Divyansh",
//     age: 21,
//     emailId:"upadhyay@gmail.com",
//     amount: 32000,
//     address: {
//         city:"Gorakhpur",
//         state:"Uttar Pradesh",
//         country:"India"
//     }
// } 

// shallow copy
// const user2 = {...user}; //Both are separate for one level for another level(object under object) it can't separate.
// user2.name = "Mohan";
// user2.address.city = "Prayagraj"

// console.log(user2)
// console.log(user)

// console.log(user.address.city);

// Deep copy
// const user2 = structuredClone(user); //It can also separate nested objects(object under object)
// user2.address.city = "Prayagraj"
// console.log(user);
//keys:String or symbol

// const sym = Symbol("id");

// const user = {
//     name: "Divyansh",
//     age: 21,
//     0:100,
//     1:"Mohan",
//     [sym]:"Hello ji"
// } 

// console.log(user[sym]);


// WHAT I WILL LEARN IN THIS LECTURE:
// Part 1: The Fundamentals
// What is an Object? Understanding Key-Value Pairs.
// Creating Objects with Object Literal Syntax ({}).
// The CRUD Operations: Create, Read (Dot vs. Bracket Notation), Update, and Delete.
// Adding Behavior to Objects with Methods.
// The this Keyword Explained: How to Make Methods Self-Reliant.
// Part 2: Iteration & Looping
// The Modern Way: Looping with Object.keys, Object.values, and Object.entries.
// The Traditional Way: The for...in loop and its "gotchas."
// Part 3: Advanced Concepts & Modern Syntax (ES6+)
// Objects as Reference Types: Why let copy = original is a trap.
// Shallow Copy vs. Deep Copy: How to properly clone an object.
// The Modern Solution for Deep Copying: structuredClone().
// Unpacking Data with Destructuring Assignment.
// Modern Object Syntax: Property Shorthands, Method Shorthands, and Computed Properties.
// Demystifying Symbol: The "Secret Key" for Your Objects and Why You Need It.















