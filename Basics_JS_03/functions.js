//functions

// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("M");
//     console.log("A");
//     console.log("N");
//     console.log("S");
//     console.log("H");
//     console.log("U");
// }
// sayMyName()


// function addNumbers(num1,num2){
//     console.log(num1 + num2);
// }
// addNumbers(5,5)

function addNumbers(num1,num2){
    return num1 + num2;
}
const result = addNumbers(5,9)
// console.log("Sum of two numbers is:",result);



function loginUserMessage(userName){
    return `${userName} just logged in`
}

// console.log(loginUserMessage("Himanshu"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage())

// !==> true to false OR false to true



function calculateCartPrice(...num1){         // ... ==> rest operator
    return num1
}

// console.log(calculateCartPrice(100,200,300,400,500));


// passing objects in Function
const user = {
    username : "Manish",
    price : 199
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "Devendra",
    price:200
})



// passing Arrays in Function
const myNewArray = [100,200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));