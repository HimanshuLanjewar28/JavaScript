
// Creation of promises
// const promise1 = new Promise(function(resolve, reject){
//     //Do an async task
//     //DB calls, cryptography, network

//     setTimeout(function(){
//         console.log('Async task is completed');
//         resolve()
//     }, 1000)
// })

// Consumption of promises
// promise1.then(function(){
//     console.log('Promise Consumed')
// })


//another way of writing promise
// new Promise (function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2")
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log("Resolved")
// })


// passing data which came from the network
// const promise3 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//     resolve({username: "Chai", email:"abc@gmail.com"})
//     }, 1000)
// })

// promise3.then(function(user){
//     console.log(user)
// })


const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false;
        if(!error){
            resolve({username:"Himanshu", password:"123"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})

// promiseFour
// .then((user) => {
//     console.log(user)
//     return user.username
// })
// .then( (username) => {
//     console.log(username)
// })
// .catch(function(error) {
//     console.log(error)
// })
// .finally(function(){
//     console.log("Finally the promise is either resolved or rejected")
// })


// const promise5 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         let error = true;
//         if(!error){
//             resolve({username:"JavaScript", password:"123"})
//         }
//         else{
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000);
// })

// async function consumePromise5 (){
//     const response = await promise5
//     console.log(response)
// }


// async await method
// consumePromise5()
// async function consumePromise5(){
//     try {
//     const response = await promise5
//     console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }

//1) first method
// async function getAllUsers(){
//     try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()  // getting value from the data because data from api in string
//                                         // here await is used to convert data into json fastly
//     console.log(data);
//     } catch (error) {
//         console.log("E: ",error)
//     }
// }
// getAllUsers()


//2) second method
fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})