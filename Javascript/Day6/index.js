// Array

// let marks1 = 100;
// let marks2 = 67;
// let marks3 = 50;
// let marks4 = 70;

// let marks = [100,67,50,70];
// console.log(marks);
// console.log(marks.length);

// let arr = [ 100,30,"Rohit",true]; //Multiple datatypes
// console.log(arr);

// console.log(arr[2]);
// arr[1] = 90;
// console.log(arr);

//Push element:Insert element at end
// arr.push(88);
// arr.push("Strike");
// console.log(arr);

//Pop operation:Delete element from end
// arr.pop();
// console.log(arr);

//Starting me element add kar skta hu,
// arr.unshift(10);
// console.log(arr);

//delete the elemwnt at first place
// arr.shift();
// console.log(arr);

// let arr = [10,30,50,90,11];

// for(let i=0; i<arr.length;i++){
//     console.log(arr[i])
// }

// for(let num of arr){
//     console.log(num)
// }

// let arr = [10,30,50,90,11];
// let arr2 = arr;
// arr2.push(30);
// console.log(arr); //30 push in arr

//Object (non-primitive):Copy by reference hote hai
//Primitive:Copy by value
// const arr = [10,30,50,90,11];
// arr = arr[30,58,34,22];
// console.log(arr);

// const arr = [10,30,50,90,11];
// const arr2 = arr.slice(2,4);
// console.log(arr)
// // console.log(arr.splice(1,3)); // Trim out:30,50,90
// console.log(arr) // Remaining element:10,11
// const arr3 = arr.splice(1,3,"Rohit",19);
// console.log(arr3);

// const arr = [10,30,50,90,11];
// const arr2 = ["Rohit",11,true];
// const arr4 = [90,4,false];

// // arr.push(arr2);
// //  const arr3 = arr.concat(arr2,arr4);

// //Spread Operator
// const arr3 = [...arr,...arr2,...arr4]; 
// console.log(arr3);

const names = ["alice","Rohit","Mohit", "Bob", "Charlie"];
// console.log(names.toString());
// console.log(names.join(" "));
// console.log(names.indexOf("Bob"));
// console.log(names.lastIndexOf("Bob"));
// names.sort();
// names.reverse();
// console.log(names); //small character last according to  ASCII Tables

// const a = [101,90,80,32,91];
// const arr = [10,"Rohit",true]
// a.sort(); //Sort according to ASCII Table.
// console.log(a);

// const arr = [10,40,31,71,5,11];
// arr.sort((a,b)=> a-b);//Ascending
// arr.sort((a,b)=> b-a);//Descending

// console.log(arr);

// 2D Array
// const arr = [10,30,50,[40,90,[20,34,56,67],11],80];
// console.log(arr[3]); //Access whole array
// console.log(arr[3][1]);//Access single element from an array
// const a =arr.flat(Infinity);
// console.log(a);

//Array is Object
const a = [10,309,"Rohan", 9.3, true];
a.name = "Mohan";
console.log(a)
// console.log(a["1"]);