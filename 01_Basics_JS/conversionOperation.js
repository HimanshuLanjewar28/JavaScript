let score = "33gtf";
let age = null;

console.log(typeof score)

let valueInNumber = Number(score); // string to number conversion
let valueInNumber1 = Number(age)
console.log(typeof valueInNumber);
console.log(valueInNumber);

console.log(typeof valueInNumber1);
console.log(valueInNumber1);

console.table([typeof score, typeof valueInNumber, valueInNumber, typeof age, valueInNumber1])


// /* 
// 1) "33" = 33
// 2) "33gtf" = NaN
// 3) true = 1
// 4) false = 0
// */

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// /* 
// 1) 1 = true and 0 = false
// 2) "" = false
// 3)"Himanshu" = true
// */

let anyNumber = 55;

let stringNumber = String(anyNumber);
console.log(stringNumber);
console.log(typeof stringNumber);


// ************************* OPERATIONS **************************//

let value = 3;
let negValue = -value;

console.log(negValue);

console.log(2%3);

let str1 = "Himanshu";
let str2 = " Lanjewar";
let str3 = str1 + str2;

console.log(str3);

console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(true);