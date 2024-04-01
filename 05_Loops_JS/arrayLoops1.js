
// for of Loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}



//Maps  => Maps are used for uniques values, it does not take duplicate entries
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FRA',"France")
// console.log(map);

for (const key of map) {   // this syntax gives you array
    // console.log(key);
}

for (const [key, value] of map) {
    // console.log(key,":-",value);    // this syntax gives you special values
}


const myObj = {
    'game1':"NFS",
    'game2':"COC",
    'game3':"WCC"
}

for (const [key,value] of myObj) {     // this forof loop doesn't work on object here
      console.log(key,":-",value);
}