// let myName = "Himanshu   "
// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderMan:"sling",

    getSpiderPower:function (){
        //console.log(`Spidey power is ${this.spiderMan}`);
    }
}

Object.prototype.himanshu = function(){
    //console.log(`Himanshu is present in all object`);
}

Array.prototype.heyHimanshu = function(){
    //console.log(`Hey Himanshu`);
}

heroPower.himanshu()
myHeros.himanshu()
myHeros.heyHimanshu()
//heroPower.heyHimanshu()



// Inheritance
const User = {
    name: "chai",
    email: "xyz@gmail.com"
}

const teacher = {
    makevideo: true
}

const teachingSupport = {
    isAvailabel: false
}

const TAsupport = {
    makeAssignment: 'JS assignment',
    fullTime : true,
    __proto__: teachingSupport
}

teacher.__proto__ = User     //prototype inheritance



// Modern Syntax
Object.setPrototypeOf(teachingSupport, teacher)

let anotheUserName = "Himanshu      "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`True length is: ${this.trim().length}`);
}

anotheUserName.trueLength()
"SGGS".trueLength()
"iceTea".trueLength()