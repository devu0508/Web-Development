//Javascript Code Run-->Execution Context created
// Phase1:Memory Allocation Phase
// Phase2:Execution Phase
//GEC:Global Execution Context

//Step of Javascript code running:
//Execution context
// Memory Allocation Phase
// a=undefined
// b=undefined
//addNumber=fnCode
// sumResult1=undefined
// sumResult2=undefined

// Execution Phase
// console.log(a); //Output:Undefined(only memory allocated)
// var a = 10;
// var b = 20;

// var sumResult1 = addNumber(a,b);
// console.log(sumResult1);


// function addNumber(num1, num2){
//     var sum = num1+num2;
//     return sum;
// }

// var sumResult1 = addNumber(a,b);
// var sumResult2 = addNumber(4,5);
// console.log(sumResult1,sumResult2);


//let const
//Memory allocation
//a=<uninitialized>(Temporal Dead Zone)
//b=<uninitialized>(Temporal Dead Zone)
// Execution Phase
//a=10
//b=20
//execution
// console.log(a);(Temporal Dead Zone)

let a = 10;
const b = 20;

const addNumber = function (num1,num2){
    const sum = num1+num2;
    return sum;
}
const result = addNumber(a,b);
console.log(result);