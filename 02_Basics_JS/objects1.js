// Object Literals

const mySym = Symbol("key1")

const jsUser = {
    name : 'Himanshu',
    age : 21,
    [mySym] : "mykey1", //syntax for writing key properly
    location : "Amravati",
    email : "abcd@gmail.com",
    isLoggedIn : true
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser[mySym]);

console.log(typeof jsUser[mySym]);

// Object.freeze(jsUser) // can not change any value of object after using freeze

jsUser.email = "xyz@gmail.com"

console.log(jsUser)

jsUser.greetings1 = function () {
    console.log("ohh okay this is function");
}

jsUser.greetings2 = function () {
    console.log(`${this.name},ohh okay this is function`);
}

console.log(jsUser.greetings1())
console.log(jsUser.greetings2())