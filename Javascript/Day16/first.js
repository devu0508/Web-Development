// console.log("Hello World Start");


// code

// const p1 = fetch("https://api.github.com/users");


// // fullfilled , reject

// const p2 = p1.then((response)=>{
//    return response.json();
// })


// p2.then((data)=>{
//     console.log(data);
// })


// fetch("https://api.github.com/users")
// .then((response)=>{
    
//    return response.json();
// })
// .then((data)=>{
//     console.log(data);
// })

// const p1 = new Promise((resolve,reject)=>{

//     resolve({
//         name:"Rohit",
//         age:30,
//     });
// })

// p1.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// })


//  fetch("https://api.github.com/users")
// .then((response)=>{
    
//     console.log(response);
//     if(!response.ok){
//         throw new Error("Data is not persent in server");
//     }
//     return response.json();
// })
// .then((data)=>{
//     // console.log(data);

//     const parent = document.getElementById("first");

//     for(let i=0;i<data.length;i++){
//     const image = document.createElement('img');
//     image.src = data[i].avatar_url;
//     image.style.height = "40px";
//     image.style.width = "40px";

//     parent.append(image);
//     }
// })
// .catch((error)=>{
//     const parent = document.getElementById("first");
//     parent.textContent = error.message;
// })






// console.log("Hello World End");

