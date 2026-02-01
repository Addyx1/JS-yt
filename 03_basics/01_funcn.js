function sayMyName(){
    console.log("A")
    console.log("D")
    console.log("I")
    console.log("T")
    console.log("Y")
    console.log("A")
}

//sayMyName();

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2)
   // result
// }


function addTwoNumbers(number1,number2){
    
    //let result = number1+number2
    //return result
    return number1+number2;
    
}

//console.log("Result: ",result)


const result =addTwoNumbers(3,4);



function loginUserMessage(username="sam"){
    if(!username){
        console.log("plz enter a username");
        return;

    }
    return `${username} just Logged In`
}


//console.log(loginUserMessage("Aditya"))
console.log(loginUserMessage("Aditya"))// IF WE WILL REMOVE THE COMMA INSIDE THE BRACKET THEN IT WILL GIVE UNDEFINED