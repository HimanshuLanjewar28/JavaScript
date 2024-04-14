class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}


class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`new course was added ${this.username}`);
    }
}

const chai = new Teacher("chai","teacher@gmai.com","123")
chai.addCourse()

const masalaTea = new User("masalaTea")
masalaTea.logMe()

console.log(chai instanceof User);