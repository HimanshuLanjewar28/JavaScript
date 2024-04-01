
const arr = [9,8,7,6,5,4]
// console.log(arr[2]);

// const arr1 = new Array(10,11,12,13,14)
// console.log(arr1[0]);


// ******************************** Array Methods *******************************

// arr.push(3)
// console.log(arr);

// arr.pop() // removes the last value of array
// console.log(arr);

// arr.unshift(5)
// console.log(arr)

// arr.shift()
// console.log(arr) 


// console.log(arr.includes(3));
// console.log(arr.indexOf(5));

// const newArr = arr.join(); // converts existing array in string

// console.log(arr);

// console.log(newArr);

// console.log(typeof newArr);

console.log("A ", arr);

const newArray1 = arr.slice(1,3)

console.log(newArray1);

console.log("B ", arr);

const newArray2 = arr.splice(1,3)  // splice manipulates the original array
console.log("C ", arr);
console.log(newArray2);