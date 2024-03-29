const score = 400;
console.log(score);

const balance = new Number(200.5424);
console.log(balance);

console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber = 536.899;

console.log(otherNumber.toPrecision(4));

const otherNumber1 = 1000000;
console.log(otherNumber1.toLocaleString('en-IN'));



// ***************************************** MATHS ***********************************************

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(4.5));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.sqrt(81))
console.log(Math.min(3,6,9,5,1,2))
console.log(Math.max(3,6,9,5,1,2))

console.log(Math.random())
console.log(Math.floor(Math.random()*10) + 1)

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min + 1)) + min)