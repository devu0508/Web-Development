const quotes = [
    "Education is the most powerful weapon which you can use to change the world.",
    "The beautiful thing about learning is that no one can take it away from you",
    "An investment in knowledge pays the best interest.",
    "Education is not the learning of facts, but the training of the mind to think.",
    "The more that you read, the more things you will know. The more that you learn, the more places you’ll go.",
    "Develop a passion for learning. If you do, you will never cease to grow",
    "Education is not the learning of facts, but the training of the mind to think.",
    "The more that you read, the more things you will know. The more that you learn, the more places you’ll go",
    "Develop a passion for learning. If you do, you will never cease to grow.",
    "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."



]
const button = document.querySelector("button");
const quote = document.querySelector("h1");
button.addEventListener("click",()=>{
     const index = Math.floor(Math.random()*10);

     quote.textContent = quotes[index];

})