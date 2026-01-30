// singleton 

// object literals 
//Object.create //create object using constructor

const mySym = Symbol("key1")
const Jsuser = {
    name: "Aditya",
    age:18,
   [mySym]:"mykey1",// sqaure bracket to make this as symbol
    location: "jalandhar",
    email:"aditya@gmail.com",
    isLoggedIn : false,
    lastLogunDays : ["Monday","Saturday"]

}

// console.log(Jsuser.email) // use to acess object
// console.log(Jsuser["email"]) // alternate method to acess object
// console.log(Jsuser["name"])
// console.log(Jsuser[mySym])


Jsuser.email="ladu@gmail.com"// change the object value
//Object.freeze(Jsuser)// Data will not change becauce object is freeze
Jsuser.email="raj@gmail.com"
//console.log(Jsuser);


Jsuser.greeting = function(){
    console.log("Hello addy");
}

Jsuser.greetingTwo = function(){
    console.log(`Hello addy, ${this.name}`);// it will acess value from object
}

//console.log(Jsuser.greeting);// it will return undefined
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());


