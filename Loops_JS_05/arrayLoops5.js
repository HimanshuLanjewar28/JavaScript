

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const addTen = myNums.map( (num) => num +10)
// console.log(addTen);



//chaining
const newNums = myNums.map( (num) => num * 10 ).map( (num) => num + 2 ).filter( (num) => {return num >= 20} )
console.log(newNums);

