const myArr=[0,1,2,3,4,5,]
const myHeros=["ironman","superman"];
const myarr2=new Array(1,2,3,4) 

//console.log(myArr[0]); 
//array create shallow copies

// Array methods 

// myArr.push(6)    //Add the element
// myArr.push(7)
// myArr.pop()    //remove the last element;

//myArr.unshift(9)  // Insert the element at the starting 
//myArr.shift()  // remove the 1 element

 //console.log(myArr.includes(9));
 //console.log(myArr.indexOf(3));

// const newArr = myArr.join()// it will convert the array into string

//  console.log(myArr); 
//  console.log(newArr);


// slice, splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3) // it will exclude the last element of the given array 

console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1,3) // manipulate the original array it will remove the element of the given range
console.log("C",myArr);
console.log(myn2);
