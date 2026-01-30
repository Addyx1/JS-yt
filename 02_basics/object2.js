//const tinderUser = new Object() // Singleton object
const tinderUser={} // non singleton object

tinderUser.id="123abc"
tinderUser.name="Sam"
tinderUser.isLoggedIn = false
//console.log(tinderUser);


// const regularUser = {
//     email:"asd@gmail.com",
//     fullname:{
//         userfullname : {
//             firstname:"Aditya",
//             lastname:"Singh",
//         }
//     }
// }

//console.log(regularUser.fullname.userfullname.firstname) // it will return object in object

const obj1 = {1:"a", 2: "b"}
const obj2 = {3: "a",4: "b"}
const obj4 = {5:"a",6:"b"}

//const obj3 = {obj1,obj2}// it will return object in object
//const obj3= Object.assign({}, obj1, obj2,obj4)//it is the static method use to merge empty bracket is target and obj 1,2,4 will be so

//const obj3 ={...obj1, ...obj2,...obj4}//spread operator
//console.log(obj3);

const users = [
    {
        id:1,
        email: "as@gmail.com"
    },
    {

    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));// it will give the keys of the object and datatype will be array

console.log(Object.values(tinderUser));// values of the object

console.log(Object.entries(tinderUser));// it will store the key value of the object inside the array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));// it will tell whether this property is there or not

