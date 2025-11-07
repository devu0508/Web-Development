let a = prompt("Enter 1st number")

let b = prompt("Enter 2nd number")

let x = 5
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b)

try{
      console.log("The sum is:", sum*x)
}catch(error){
       console.log("Error hai mere bhai")
}
finally{
    console.log("files are being closed and db connection is being closed")
}




