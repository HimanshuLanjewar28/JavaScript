const user = new Object() // It is a Singleton object


const user1 = {}
console.log(user1)

user.id = "userId"
user.name = "mokadam"
user.isLoggedIn = false
console.log(user);


const user2 = {
    email: "abc@gmail.com",
    fullName : {
        userFullName: {
            firstName:"Himanshu",
            lastName: "Lanjewar"
        }
    }
}

console.log(user2.fullName.userFullName.firstName);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

const obj3 = {obj1,obj2}
console.log(obj3);

const obj4 = Object.assign({}, obj1,obj2)
console.log(obj4);

const obj5 = {...obj1, ...obj2}
console.log(obj5);


const users = [
    {
        id:1,
        email: "abc@gmail.com"
    },
    {
        id:1,
        email: "abc@gmail.com"
    },
    {
        id:1,
        email: "abc@gmail.com"
    },
    {
        id:1,
        email: "abc@gmail.com"
    },
    {
        id:1,
        email: "abc@gmail.com"
    }
]

users[1].email

console.log(user);

console.log(Object.keys(user)); // gives the keys 

console.log(Object.values(user));

console.log(Object.entries(user));

console.log(user.hasOwnProperty('isLoggedIn'))