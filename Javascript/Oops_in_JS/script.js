// let obj = {
//     a:1,
//     b:"Hariom"
// }

// console.log(obj)

// let animal = {
//     eats:true
// };
// let rabbit = {
//     jumps:true
// };

// rabbit._proto_ = animal;


class Animal{
    constructor(name){
        this.name = name
        console.log("Object is created...")
    }

    eats(){
        console.log("Khata hai")
    }

     jumps(){
        console.log("Kudta hai")
    }
}

class Lion extends Animal{
    constructor(name){
        super(name)
        this.name = name
        console.log("Object is created and he is lion")
    }

    eats(){
        console.log("Khata hai aur dahadta bhi hai")
    }
}

let a = new Animal("Panda");
console.log(a)

let l = new Lion("Shera")
console.log(l)


