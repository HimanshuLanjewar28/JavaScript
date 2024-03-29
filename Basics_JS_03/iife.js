// Immediately Invoked Function Expressions (IIFE)


// 1)Named IIFE
(function one() {
    console.log(`DB CONNECTED`);
})();


// 2)UnNamed IIFE
( (name1)  => {
    console.log(`DB CONNECTED TWO ${name1}`);
} )("Himanshu");