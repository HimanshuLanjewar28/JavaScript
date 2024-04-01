// forLoop

// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     if(element == 3){
//         console.log(`${element} is the best number`)
//     }
//     console.log(element);
// }


// for (let i = 1; i <= 10; i++) {
//     console.log(`Table of: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`inner loop value: ${j}`);
//         console.log(`${i}` * `${j}`);
//     }
// }


// Keywords =>  break and continue

for (let i = 1; i <= 20; i++) {
    if( i == 5){
        console.log(`Detected ${i}`);
        continue
    }
    else if(i==15){
        console.log(`Detected ${i}`)
        break
    }
    console.log(`Value of i is: ${i}`); 
}