// 4 Pillers of DOM

// 1.Selection of an Element
// 2. Changing of HTML
// 3.Changing of CSS
// 4.Event Listener

// var a = document.querySelector("h1") //id:(#),class:dot(.)
// console.log(a);

// var a = document.querySelector("h1")
// a.innerHTML = "Hello Guys"
// a.style.color = 'red'
// a.style.backgroundColor = "black"

// var a = document.querySelector("h1")
// a.addEventListener("click",function(){
//     // console.log("hey");
//     a.innerHTML = "Miracle"
//     a.style.backgroundColor = "pink"
//     a.style.color = "orange"
    
// })


// var bulb = document.querySelector("#bulb")
// var button = document.querySelector("button")
// var flag = 0;
// button.addEventListener("click",function(){
//     if(flag == 0){
//             bulb.style.backgroundColor = "yellow"
//             console.log("ON")
//             flag = 1
//     }
//     else{
//         bulb.style.backgroundColor = "transparent"
//         console.log("OFF")
//         flag = 0
//     }
// })


//  var h = document.querySelectorAll("h1")
//  console.log(h);
//  h.forEach(function(e){
//     console.log(e)
//  })

// document.getElementById("box")

var box = document.querySelector("#box")
//  box.innerHTML = "<h1>Hello</h1>"
box.textContent = "<h1>Hello</h1>"
