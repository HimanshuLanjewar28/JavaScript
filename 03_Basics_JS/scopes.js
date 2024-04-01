
let a = 200

if (true) {
    let a = 10
    const b = 20
    // console.log("Inner value:",a)
}

// console.log(a);
// console.log(b);


// function one(){
//     const userName = "Himanshu"

//     function two(){
//         const website = "Youtube"
//         console.log(userName);
//     }
//     // console.log(website);

//     two()
// }
// one()

const addOne = function (num){
    return num + 1
}
console.log(addOne(6));