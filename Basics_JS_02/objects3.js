// Destructing of Objects

const course = {
    courseName: "JS in Hindi",
    coursePrice : "999",
    courseTeacher : "Hitesh",
}

console.log(course.courseName)

// Another syntax
const {coursePrice:price} = course
console.log(price);
//OR
const {coursePrice} = course
console.log(coursePrice);


//APIs
//{} => json
{
    "name": "Himanshu",
    "coursename" : "js in hindi",
    "price" : "555"
}