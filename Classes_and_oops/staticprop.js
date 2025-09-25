class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Usernmae: ${this.username}`);
    }

    static CreateId(){
        return `123`
    }
}

const aman = new User("Aman")
// console.log(aman.CreateId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone","teacher@gmail.com")

iphone.logMe();
