class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Usernmae is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email;
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);      
    }
}


const chai = new Teacher("chai","chai12@gmail.com","1213")
chai.addCourse()
chai.logMe()

const tea = new User("Tea")

tea.logMe()

console.log(chai instanceof User);
