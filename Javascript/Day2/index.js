// Variable ko kaise banate hai

// let name = "Divyansh";
// let age = 22;

// age=28;

// console.log(name, age);

// const account = 1234;
// account=24;  //we can't change account as it is constant and cannot vary, it is fixed
// console.log(account);

// var a = 10;
// var a=25;
// console.log(a);

// Datatypes in Javascript
// @Primitive Datatype: Immutable
// 1.Number
// let a = 10;
// console.log(a);
// console.log(typeof a);

// 2.String
// let c = "Devu"
// console.log(c);
// console.log(typeof c);

//3.Boolean
// let login = true;
// let f =false;
// console.log(login,f);
// console.log(typeof login, typeof f);

// 4.Undefined:Represent unintentional absence of a value.
// If we use it with constant we must have to assign value otherwise it gives error.
// let user;
// console.log(user);
// console.log(typeof user);

// 5.bigint:Used to define biggest numbers
// let num = 265418794503521n;
// console.log(num);
// console.log(typeof num);

// 6.null:Intentionally set to have no value.
// let weather = null;
// console.log(weather);
// console.log(typeof weather); //It gives object as a type of weather[it's a BUGG]

// 7.Symbol
// const id1 = Symbol("id");
// const id2 = Symbol("id");
// console.log(id1);          //Both gives same as output but both are not equal
// console.log(id2);
// console.log(id1==id2);
// console.log(typeof id1);

//@ Non-Primitive Datatype:Mutable

// 1.Array
// let arr = [10,20,11,"Devu",true];
// console.log(arr);
// console.log(typeof arr);

// 2.Object:Key-Value pairs
// let obj = 
// {
//     name :"Rohan",
//     age : 22,
//     category :'gen'
// }
// console.log(obj);
// console.log(typeof obj);

// 3.Function

// function add(){
//     console.log("Hello");
// }
// add();
// console.log(typeof add);

//We can initialize function as a variable.
// let a = function add(){
//     console.log("Hello");
// }

// console.log(typeof a);




//Proof of primitive is immutable.
// let str = "Rohit"
// str[0]="M"
// console.log(str); //It return Rohit only can't replace M with R because it is immutable.

// let a = 10;
// let b = a;
// b=20;
// console.log(a,b);  //Output:10 20  Refer notes..




// Proof of non-primitive is mutable.
// let arr = [10,20,11,40];
// arr.push(90);
// arr[0]=70;
// console.log(arr); //Output:[70, 20, 11, 40, 90]

// let obj ={
//     name:"Mohan",
//     age:20
// }

// let obj2 = obj;
// obj2.name = "Rohit";

// console.log(obj); //Output: { name: 'Rohit', age: 20 }









