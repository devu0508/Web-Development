// const newElement = document.createElement("h2");
// newElement.textContent = "Thanos is coming";
// newElement.id = "second";

// //Select element
// const element=document.getElementById("first")
// element.after(newElement);
// // element.before(newElement);

// const newElement2 = document.createElement("h3");
// newElement2.textContent = "Jai Diwali"
// newElement2.id = "third";
// // newElement2.className = "diwali";
// // newElement2.className += " holi";
// newElement2.classList.add("diwali");
// newElement2.classList.add("holi");

// newElement2.style.backgroundColor = "pink";
// newElement2.style.fontSize = "30px";

// element.before(newElement2);
// console.log(newElement2.getAttribute("class"));

// //before after

// const list = document.createElement("li");
// list.textContent = "Milk"
// const list2 = document.createElement("li");
// list2.textContent = "Cake"
// const list3 = document.createElement("li");
// list3.textContent = "Rasmali"
// const list4 = document.createElement("li");
// list4.textContent = "Paneer"
// const unorderedElement = document.getElementById("listing");
// unorderedElement.append(list,list2);
// unorderedElement.prepend(list3);
// // list.after(list4);
// unorderedElement.children[1].after(list4);


const arr = ["Milk", "Tofu", "Paneer", "Halwa","Kaju"]
const unorderElement = document.getElementById("listing");
const fragment = document.createDocumentFragment();
for(let food  of arr){
    // console.log(food)
    const list = document.createElement("li");
    list.textContent = food;
    fragment.append(list);
}

unorderElement.append(fragment);

// const s1 = document.getElementById("first");
// s1.remove();

const month = document.getElementById("ten");
// console.log(month.children);
const lister = document.createElement("li");
lister.textContent = "Help";
// lister.innerHTML = "<h2>Help</h2>"
// month.prepend(lister);
month.insertAdjacentElement("afterbegin",lister)