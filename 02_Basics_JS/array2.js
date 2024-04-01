const indian_Heroes = ["Shaktimaan","Mogambo","Sonpari"]
const marvel_Heroes1 = ["Spiderman","Thor","Ironman"]

// indian_Heroes.push(marvel_Heroes1)

// console.log(indian_Heroes);

// const Heroes = indian_Heroes.concat(marvel_Heroes1) //merge the two arrays or more

// console.log(Heroes)

// const combineHeroes = [...indian_Heroes,...marvel_Heroes1] //combine the arrays
// console.log(combineHeroes);

const anotherArray = [1,2,3,[4, 5, 6],7,[8, 9,[10,11]]]

const realAnotherArray = anotherArray.flat(Infinity)

console.log(realAnotherArray);

console.log(Array.isArray("Himanshu"))

console.log(Array.from("Himanshu"))  //converts into arrays


console.log(Array.from({name:"Himanshu"})); // it gives empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // converts different variable into array

