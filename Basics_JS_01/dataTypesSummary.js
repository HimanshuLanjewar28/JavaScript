// Primitive

// 7 types: String, Boolean, Number, Null, Undefined, Symbol, BigInt




const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherID = Symbol('123');

console.log(id === anotherID);


const bigNumber = 3365499746131649n;


// Reference (Non Primitive)

//Array, Objects, Functions

// return type of Non Primitive Data Types is Object

const arr = [" Piyush", "Himanshu","Mayur"]

let myObj = {
    name : "Lala",
    age : 22,
}

const myFunction = function(){
    console.log("CVDV");
}