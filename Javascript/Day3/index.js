//Operators
//Airthematic Operator:

// console.log(2+5);
// console.log(2-5);
// console.log(2*5);
// console.log(6/2);
// console.log(5%2);//Remainder
// console.log(5**3);

//Assignment Operator:
// let x = 20;
// let y = 10;
// // x = x+y;
// // x = x*y;
// x+=y;      //feasible format of x = x+y
// console.log(x);

//Comparison Operator:
// let x = 20;
// let y = "20";

// console.log(x>y);
// console.log(x<y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x==y);
// console.log(x===y); //strict check

// let z = "120"; //string changes to number and return true in == operator
// let a = Number(z);
// console.log(a);

// let a = "121ac";
// let b = Number(a);
// console.log(b);
// console.log( typeof b); //NaN is of type number

// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(null));
// console.log(Number(undefined));

// console.log(String(true));

//Boolean conversion
// console.log(Boolean(10));
// console.log(Boolean(-20));
// console.log(Boolean(0));//False
//Always gives true except for zero.

//String to Boolean
// console.log(Boolean("Hello"));//True
// console.log(Boolean(""));//False

// let a = 0.2;
// let b = 0.1;

// let c = a+b;
//console.log(c);
// console.log(c==0.3);

//Rules:(i)null is loosely equal to undefined.

// console.log(null == undefined);
// console.log(null === undefined);
// console.log(null == 0);

//(ii)>,<,>=,<=(null --> number,undefined-->NaN)

// console.log(null>=0); //True
// console.log(null<=0);
// console.log(null>0);//False
// console.log(null<0);
// console.log(null>=undefined);//False because it is NaN

// console.log("Rohit">"Mohit");//True **Compare through ASCII value
// console.log(10>"10");//False **As string converts to number
// console.log(10>="10");//True
// console.log(10>true);//True **As true denotes 1 which is less than 10.

//Ek koi bhi type hai, usko agar mujhe compare krna hai dusre kisi type se
//Dono number me convert honge
// console.log(null<="");

//console.log(NaN == NaN) //False

// **Loop kaise kaam krte hai**

// for loop
// post increment: i++
// post decrement: i--
// for(let i=0; i<10; i++){
//     console.log(i);
// }

//while loop
// let i = 0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// do while
// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<10);

//if else condition

// let age = 15;
// if(age>=18){
//     console.log("Eligible")
// }
// else{
//     console.log("Not eligible")
// }

//Logical operators
// && , ||
// console.log(true&&true);
// console.log(true&&false);
// console.log(false&&true);
// console.log(false&&false);
// console.log(true||true);
// console.log(true||false);
// console.log(false||true);
// console.log(false||false);

// let a = "Rohit";
// let b = "Mohit";
// let c = a&&b;
// console.log(c); //Mohit true and anything is equal anything

// let a = "";
// let b = "Mohit";
// let c = a&&b;
// console.log(c); //Nothing false and anything is false
//Same apply with numbers..

//Not equal to
// console.log(4!=5);

//Homework:How do AND:& OR:| works alone...




