// const user = {
//     userName:"Himanshu",
//     price : 1000,

//     welcomeMessage: function(){
//         console.log(`${this.userName}, welcome to website`);
//         console.log(this);
//     }
// }

// user.welcomeMessage()
// user.userName = "Ram"
// user.welcomeMessage()
// console.log(this);


// function one(){
//     let userName = "Himanshu"
//     console.log(this.userName);
// }
// one()

// above function gives output as "Undefined"


// const two =  () => {
//     let userName = "Himanshu"
//     console.log(this);
// }
// two()

//although we use arrow function the output is same as "Undefined"


//Arrow function ---->   () => {}
// 1)Basic Arrow Function or Explicit return
const addTwo = (num1,num2) => {
    return num1 + num2
}
console.log(addTwo(3,5)); 

// 2)Implicit Return
const addNum = (n1,n2) =>  (n1 + n2)
console.log(addNum(3,5));

// object return
const user = (userName) => ({userName:"Himanshu"})
console.log(user());