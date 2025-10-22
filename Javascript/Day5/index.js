// String
// const str1 = "Ramesh";//For Single line only
// const str2 = 'Ramesh Chaudhary';
// const day = 18;
// const str3 = `Strike is coming on ${day}`;//We can write in multiple lines can also refer or add another constants.

// console.log(str1, str2, str3);

// Length of string:
// const str = `Hello Coder army`;
// // console.log(str.length);
// // console.log(str[1]);

// // str[2] = "S";
// // console.log(str); //Immutable so can't change

// //Upper case
// const a = console.log(str.toUpperCase())

// // Lower case
// const b = console.log(str.toLowerCase())
// console.log(b);

//indexOf & lastIndexOf :To find index 
// console.log(str.indexOf('Cod')) //6 as index of C
// //If more than 1 time occur return the first occurance at which index
// console.log(str.lastIndexOf('Cod'))//17
// const str = `Hello Coder army Code kro`;
//It gives the last occurance at which index


//Slice..
// console.log(str.slice(0,11))  //0 to 10 includes only not the 11th index
// console.log(str.slice(3))  //Take 3 to end.
// console.log(str.slice(-4)) //starts from last
// console.log(str.slice(-5,-2))


//Substring..
// const str = `Hello Coder army Code kro`;
// console.log(str.substring(2,5)); //Can't markdown negative index in substring

//Concatenation..
// const a = "Divyansh"
// const b = "Upadhyay"
// const c = a+" "+b;
// console.log(c);
// console.log(24+"Rohit") //Convert in string and add
//Follow left to right if no. add and proceed


// Replace..
// console.log(str.replace("ode",'iam')) //replace only first occurance of ode
// console.log(str.replaceAll("ode",'iam'))

// const user = "  Divyansh Upadhyay  ";
// console.log(user.trim());

// const names = "Rohit Mohit Shubham Anjali";
// console.log(names.split(","))
// console.log(names.split(" "))

// const now = new Date();
// console.log(now); //UTC se 5:30 ghmta aage
// console.log(now.toString());
// console.log(now.toISOString());
// console.log(now.toLocaleString());

// console.log(now.getDay());
// console.log(now.getDate());
// console.log(now.getFullYear());
// console.log(now.getMonth());//For month it atart with 0 so for october it is 9
// console.log(now.getHours());

//Year Month date hour minute second millisecond
// const now = new Date(2025,8,20,8,25,16,125);
// // console.log(now);
// console.log(now.toString());

const now = Date.now(); //Generate date in millisecond format
const dates = new Date(1759357747951); //Put that millisecond value to get the date
console.log(dates.toString());
// console.log(now);
//This milliseconds start from 1 January 1970





