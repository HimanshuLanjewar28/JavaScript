
//for in Loop

const myObj = {
    js:"JavaScript",
    rb:"Ruby",
    cpp:"C++",
}

for (const key in myObj) {
   // console.log(`${key} is shortcut for ${myObj[key]}`);
}

const arr = [1, 2, 3, 4, 5]
for (const key in arr) {
    console.log(`${key} is the key for ${arr[key]}`);
}