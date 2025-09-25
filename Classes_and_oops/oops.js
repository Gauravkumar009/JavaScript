const user = {
    username: "Aman Shakya",
    age:21,
    Gmail:"aman12@gmail.com",
    loginCount: 8,
    signedIn:true,

    getUserDetails: function(){
        console.log("get user details from database");
        // console.log(user.username);
        // console.log(this);
    }


}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);
function User(username, loginCount, signedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User('Ajay', 12 ,true)
const userTwo = new User('Amit', 11 ,false)

console.log(userOne);
console.log(userTwo);