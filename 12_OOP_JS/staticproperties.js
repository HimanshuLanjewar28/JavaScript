class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username : ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const himanshu = new User("himanshu")
//console.log(himanshu.createId())

class teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const android = new teacher ("android", "android@gmail.com")
console.log(android.createId())