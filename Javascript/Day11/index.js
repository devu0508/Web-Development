//forEach, filter, reducer, map, set

//forEach
// const arr = [10,20,30,"Devu",90];
// const arr = [10,20,30,5,90,87];
// let sum = 0;

// arr.forEach((number)=>{
//     // console.log(number);
//     sum+=number;
// })
// console.log(sum);


//filter
// const arr = [10,20,30,5,90,87];
// true:select, false:not selected

// const newArr = arr.filter((number)=>number>25);
// console.log(newArr);



//BEHIND THE SCENE.....
// arr.filtering = function(compare){
//     const ans = [];
//     for(let num of this){
//         if(compare(num)){
//             ans.push(num);
//         }
//     }
//     return ans;
// }
// const newArr=arr.filtering((num)=>num>25);
// console.log(newArr);



// map
// const arr = [10,20,30,5,90,87];
// const newArr = arr.map((num)=>num*2);
// console.log(newArr);

//Reducer
// const arr = [10,20,30,5,90,87];
// const total = arr.reduce((accumalator,currenValue)=>{
//     return accumalator+currenValue;
// },0);

// console.log(total);



//Data Structure:Set

// const arr = [10,20,30,10,25,15,10,20];
// console.log(arr);

// const s1 = new Set(arr);
// s1.add(11);
// // console.log(s1);
// // console.log(s1.has(20));
// s1.delete(10);
// console.log(s1);
// console.log(s1.size);
// s1.clear();
// console.log(s1);

// const email = ["ro@gm","du@gm","ro@gm","ma@gm"];
// const s1 = new Set(email);
// console.log(s1);

// const uniqueEmail = [...new Set(email)];
// console.log(uniqueEmail);

// const s1 = new Set(email);
// for(let num of s1){
//     console.log(num);
// }

//map
const m1 = new Map([
    ["Rohit", 40],
    [2, "Devu"],
    [true, 22],
    [[10,30,11],"Mohit"]
]);
m1.set({name:"Manisha",age:21},false);
// console.log(m1.has("Rohit"));
// console.log(m1.get("Rohit"));
 for(let [keys,value] of m1){
    console.log(keys,value);
 }
// console.log(m1);
