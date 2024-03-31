const myNums = [1, 2, 3]

// const total = myNums.reduce( function(acc, currVal) {
//     console.log(`acc: ${acc} and currVal:${currVal}`);
//     return acc + currVal
// },0 )
// console.log(total);


const total1 = myNums.reduce( (acc,currVal) => acc + currVal,0,)
// console.log(total1);



const shoppingCart = [
    {
        itemName:'JS course',
        price: 2999
    },
    {
        itemName:'Python course',
        price: 999
    },
    {
        itemName:'CPP course',
        price: 1999
    }
]
const totalPrice = shoppingCart.reduce( (acc,total) => acc + total.price,0 )
console.log(totalPrice);