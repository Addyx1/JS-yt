// singleton 

// object literals 
//Object.create //create object using constructor

const mySym = Symbol("key1")
const Jsuser = {
    name: "Aditya",
    age:18,
    mySym:"mykey1",
    location: "jalandhar",
    email:"aditya@gmail.com",
    isLoggedIn : false,
    lastLogunDays : ["Monday","Saturday"]

}

console.log(Jsuser.email) // use to acess object
console.log(Jsuser["email"]) // alternate method to acess object
console.log(Jsuser["name"])

