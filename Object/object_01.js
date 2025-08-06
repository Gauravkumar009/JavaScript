const mySym = "Aman Shakya";

const jsUser = {
    name:"Aman",
    "full name": "Gaurav kumar",
    [mySym] : "mykey1",
    age : 21,
    location:"Greater Noida",
    email :"gauravv8745@gmail.com",
    isloggedIn : false,
    lastloggedinDays:["Monday","Saturday"]
}

// console.log(jsUser.emai)
// console.log(jsUser["email"]) 
// console.log(jsUser["full name"]) 
// console.log(jsUser[mySym]) 

jsUser.email = "gauravv8745@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "gauravv8745@gmail.com"

// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());