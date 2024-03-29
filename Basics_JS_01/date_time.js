// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toISOString());

// console.log(myDate.toJSON());

// console.log(myDate.toLocaleDateString());

// console.log(myDate.toTimeString());

// console.log(myDate.toLocaleTimeString());


// // let createDate = new Date(2024,0,23)
// // console.log(createDate.toDateString())

// // let createDate1 = new Date(2024,0,23,17,30,5)
// // console.log(createDate1.toLocaleString())

let createDate2 = new Date("01-15-2024")
// console.log(createDate2.toLocaleString())


//****************************** Time Stamp **************************************//

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(createDate2.getTime())

// console.log(Math.floor(Date.now()/1000));  // Conversion of miliseconds to seconds

let newDate = new Date()
console.log(newDate)

console.log(newDate.getDate())

console.log(newDate.getMonth())

console.log(newDate.toLocaleString('default',{
    month:"short"
}))


