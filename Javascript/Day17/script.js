//  async function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(455)
//         },3500);
//     })

// }

//Settle means resolve or reject
//resolve means promise has settled successfully
//reject means promise has not settled successfully

async function getData(){
    //Stimulate get data from server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    
    let data = await x.json()
    return data
    
}

async function main() {

console.log("loading modules")

console.log("do something else")

console.log("load data")

let data  = await getData()

console.log(data)

console.log("process data")

console.log("task 2")

}
main()

// data.then((v)=>{
//     console.log(data)

//     console.log("process data")
//     console.log("task 2")
// })


