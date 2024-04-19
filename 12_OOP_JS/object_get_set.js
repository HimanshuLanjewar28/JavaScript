const User = {
    _email: 'HIMANSHU@GMAIL.COM',
    _password: '123',

    get email(){
        return this._email.toLowerCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);
