const name = 'Himanshu'
const repoCount = 50

console.log(`My name is ${name} and my repo count is ${50}`);

// new way to declare string

const myName = new String('Himanshu')
console.log(myName[5]);

// console.log(myName.__proto__);
console.log(myName.length);
console.log(myName.toUpperCase())
console.log(myName.charAt(2))
console.log(myName.indexOf('h'));

const newString = myName.substring(0,6)
console.log(newString);

const anotherString = myName.slice(0,3)
console.log(anotherString);

const newString1 = "     hitesh     "
console.log(newString1);
console.log(newString1.trim());

const url = "https://sggs.in/sggs%20college"

console.log(url.replace('%20', '-'))

console.log(url.includes("sggs"));

const str1 = "Himanshu-Lanjewar-ExTC"
console.log(str1.split('-'));
