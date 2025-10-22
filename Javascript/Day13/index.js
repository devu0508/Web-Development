// function handleClick(){
//     const element = document.getElementById("first");
//     element.textContent = "Namaste All"
// }

// const element = document.getElementById("first");
// element.onclick = function handleClick(){
//     element.textContent = "Strike is coming";
// }

// element.onclick = function handleClick(){
//     element.textContent = "I'm the best";
// }  //Overwrite the first one

// element.addEventListener('dblclick',()=>{
//     element.textContent = "Strike is coming";
// }) //dblclick = double click

// element.addEventListener('click',()=>{
//     element.style.backgroundColor="brown";
// })

// element.addEventListener('mouseenter',()=>{
//     element.textContent = "Strike is coming";
// })

//mouseleave

// const child1 = document.getElementById("child1");
// child1.addEventListener('click',()=>{
// child1.textContent = "I am clicked";
// })

const parent = document.getElementById("parent");
// console.log(parent.children);
function handleClick(e){
    e.target.textContent = "I am clicked";
}
parent.addEventListener('click',handleClick);

// parent.removeEventListener('click',handleClick);

// parent.addEventListener('click',(e)=>{
//     // console.log(e.target);
//     e.target.textContent = "I am clicked";
// })
// for(let child of parent.children){
//     console.log(child);
//     child.addEventListener('click',()=>{
//         child.textContent = "I am clicked";
//     })
// }

// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener('click',(e)=>{
//     // console.log(e);//e=event ka object(store all informations)
//     console.log(e.target);
//     console.log("Grandparent is clicked")
// })

// const parent = document.getElementById("parent");
// parent.addEventListener('click',()=>{
//     console.log("Parent is clicked")
// })

// const child = document.getElementById("child");
// child.addEventListener('click',()=>{
//     console.log("Child is clicked")
// })
