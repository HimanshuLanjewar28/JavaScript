// const user = {
//     username: "Himanshu",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         console.log("Got user details from database")
//         console.log(`username:${this.username}`)
//         console.log(this)
//     }
// }
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)

// const promise1 = new Promise()
// const date = new Date()


function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn


    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
    return this
}

const user1 = new User("himanshu", 12, true)
const user2 = new User("yash", 10, false)
console.log(user1)
console.log(user2)