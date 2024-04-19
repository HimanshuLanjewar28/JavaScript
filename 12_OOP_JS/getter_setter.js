class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toLowerCase()
    }

    set email(mail){
        this._email = mail.toUpperCase()
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}

const himanshu = new User("himanshu@gmail.com", "abcd")
console.log(himanshu.password);
console.log(himanshu.email);
