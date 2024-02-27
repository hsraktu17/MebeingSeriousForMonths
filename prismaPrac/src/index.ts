import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username : string, password : string, firstname : string, lastname : string){
    const response = await prisma.user.create({
        data : {
            email : username,
            password,
            firstname,
            lastname
        }
    })
    console.log(response)
}

interface UpdateParams{
    firstname : string,
    lastname : string
}

async function updateUser(email : string,{
    firstname,
    lastname
} : UpdateParams){
    const res = await prisma.user.update({
        where : { email },
        data : {
            firstname,
            lastname
        }
    })
    console.log(res)
}

async function getUser(email : string){
    const res = await prisma.user.findFirst({
        where : { email }
    })
    console.log(res)
}

async function deleteUser(email : string){
    const res = await prisma.user.delete({
        where : { email }
    })
    console.log(res)
}


// insertUser("AMit@gmail.com","Amit1234","Amit","Singh")
// insertUser("Rahul@gmail.com","Rahul1234","Rahul","Gowda")
// insertUser("Ayush@gmail.com","Ayush1234","Ayush","Shah")

// updateUser("utkarsh@gmail.com",{
//     firstname : "Utkarsh Raj",
//     lastname : "Srivastavaa"
// })

getUser("AMit@gmail.com")
getUser("utkarsh@gmail.com")
getUser("jki@gmail.com")

deleteUser("Rahul@gmail.com")