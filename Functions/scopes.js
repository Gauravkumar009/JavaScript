let a = 300
if (true) {
    let s  = 12
    const a= 122
    // console.log("INNER: ",a)
}

// console.log(s);
// console.log(a);

function one(){
    const username = "Gaurav Shakya"

    function two(){
        const websites = "youtube"
        console.log(username);
    }
    // console.log(websites);
    two()
}

// one()

if (true) {
    const username = "Gaurav "
    if (username === "Gaurav ") {
        const websites = " youtube"
        // console.log(username+websites);
    }
    // console.log(websites);
}

// console.log(username);


// +++++++++++++++++++++ INTERESTING ++++++++++++++++

console.log(addone(5));

function addone(num){
    return num+1
}


// console.log(addtwo(5));

const addtwo=(num)=>{
    return num+2
}
