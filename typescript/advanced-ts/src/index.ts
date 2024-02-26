interface User{
    id : number,
    name : string,
    age : number
    email : string
    password : string
}


type UpdateProps = Pick <User, "name" | "age" | "email">

function UpdateProps(updateProps : UpdateProps){
    
}