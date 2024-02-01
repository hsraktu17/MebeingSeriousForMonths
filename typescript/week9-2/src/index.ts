interface User{
    firstName : string
    lastName : string
    age : number
    email ?:string
}

function isLegal(user : User) : boolean{
    if(user.age > 18){
        return true
    }
    else{
        return false;
    }
}


function greet(user : User) : void{
    console.log("hi " + user.firstName + user.lastName)
}

function checkEmail(user : User) : boolean{
    return !!user.email;
}


const user = {
    firstName : "Utkarsh ",
    lastName : "Srivastava",
    age : 21,
}


const legal : boolean = isLegal(user)
console.log(legal)

const greeting = greet(user)
console.log(greeting)

const checking : boolean = checkEmail(user)
console.log(checking)