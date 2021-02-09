// object 

var person = {
    firstName: "Gul", 
    surName: "Shaik",
    Age: 23,
    isMarried: false,
    hobbies : ["coding","sleeping"],
    thing:{
        name: "Object",
        color: "Yellow"
    }
}
// dot notations 
console.log(person.firstName)
console.log(person.hobbies[0])
console.log(person.hobbies)
console.log(person.thing)
console.log(person.thing.color)

console.log(person["firstName"])
console.log(person["hobbies"])
console.log(person["hobbies[0"])