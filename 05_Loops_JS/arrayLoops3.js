
// for each loop

const coding = ["js", "ruby", "java", "python", "cpp"]
// coding.forEach( function (value) {             // ==>  In this callback function we don't give the name to the function
//     console.log(value);
// } )


// using arrow function
// coding.forEach((val) => {
//     console.log(val);
// })


// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })


const myCoding = [
    {
        lan1:'js',
        lan2:'cpp',
    },
    {
        lan1:'ruby',
        lan2:'java'
    },
    {
        lan1:'rust',
        lan2:'golang',
    }
]

myCoding.forEach( (item) => {
    console.log(item.lan1);
} )