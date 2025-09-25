// use the all the js after the ES6

class User {
    constructor (username,email,password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai","chai12@gmail.com","123qw")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
   return `${this.username.toUpperCase()}`
}

const tea = new User("tea","tea12@gmail.com","123qw")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());