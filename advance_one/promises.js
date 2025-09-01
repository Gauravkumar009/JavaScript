const promise1 = new Promise(function (resolve,reject){
    //Do an async task
    //DB calls ,cryptography,network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promise1.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve,rejwct){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("promise consumed!")
})


const promiseThree = new Promise(function (resolve,reject){
    setTimeout(function(){
        resolve({username: "Aman",email: "aman@gmail.com"})
    },1000)
})


promiseThree.then(function(user){
    console.log(user);
})


const pormiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
       let error = true
       if (!error) {
            resolve({username:"Aman Shakya",Password:"1233"})
       }else{
            reject("ERROR: Something went wrong")
       }
    },1000)
})

pormiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("the promise is either resolved or not"))




const pormiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
       let error = true
       if (!error) {
            resolve({username:"Gaurav Shakya",Password:"1233"})
       }else{
            reject("ERROR: AK went wrong")
       }
    },1000)
})


async function consumepromiseFive(){
    try {
        const response = await pormiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumepromiseFive()

async function getAllUsers(){
   try {
        const response = await fetch('htts://jsonplaceholder.typicode.com/users')
        // console.log(response);
        const data =await  response.json()
        console.log(data);
   } catch (error) {
        console.log("E: ",error);
   }
}

getAllUsers()
