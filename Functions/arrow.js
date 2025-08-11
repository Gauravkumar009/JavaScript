const user = {
    username :"Gaurav Shakya",
    price :999,
    
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// console.log(this);

// function chai(){
//     console.log(this);
// }

// chai()

// const chai = function(){
//     let username = "Gaurav Shakya"
//     console.log(this.username);
// }

const chai = () =>{
    let username = "Gaurav Shakya"
    console.log(this);
}

// chai()

// const addtwo = (num1 , num2) => num1 + num2

const addtwo = (num1 , num2) => ({username :"Gaurav Shakya"})


console.log(addtwo(23,34));