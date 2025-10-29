const body = document.querySelector('body');

body.addEventListener('click',(e)=>{
    console.log(e.clientX, e.clientY);

 const circleElement = document.createElement('div');
circleElement.classList.add('circle');
circleElement.textContent = "HI"

const color = ['red','green','orange','yellow','purple','blue','pink'];
circleElement.style.backgroundColor= color[Math.floor(Math.random()*7)];

circleElement.style.top =`${e.clientY-25}px`;
circleElement.style.left =`${e.clientX-25}px`;

body.append(circleElement);

setTimeout(()=>{
    circleElement.remove();
},5000);

})