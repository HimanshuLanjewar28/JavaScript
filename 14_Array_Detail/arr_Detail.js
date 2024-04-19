// const myArr = []
// %DebugPrint(myArr)



// Types of array => Continuous and Holey

// SMI(small Integer)
// Packed Element             PACKED => Generalised
// Double (float, string, function)



//Packed SMI elements (Most Optimise Type)
const arrTwo = [1,2,3,4,5]


//Packed Double Element
arrTwo.push(6.3)

//Packed Elements
arrTwo.push('8')

// Holey Element
arrTwo[10] = 11

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);


// Bound Check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.property, 10) (most expensive check)
// Holes are very expensive in JS


const arrThree = [1,2,3,4,5]
console.log(arrThree[2]);



// Optimise sequence(Continuous)
// SMI > DOUBLE > PACKED        

// Optimise sequence(Holey)
// H_SMI > H_DOUBLE > H_PACKED



const arrFour = new Array(3) // just 3 holes .............. HOLEY_SMI_Elements

arrFour[0] = '1' // HOLEY_Elements
arrFour[1] = '2' // HOLEY_Elements
arrFour[2] = '3' // HOLEY_Elements


//optimise way
const arrFive = []
arrFive.push('1') //PACKED_Elements
arrFive.push('2') //PACKED_Elements
arrFive.push('3') //PACKED_Elements



const arrSix = [1,2,3,4,5]
arrSix.push(NaN)         //PACKED_DOUBLE_Elements
arrSix.push(Infinity)    //PACKED_DOUBLE_Elements



