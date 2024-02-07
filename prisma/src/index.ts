import { PrismaClient } from "@prisma/client";

const prisma  = new PrismaClient()

async function insertUser(email : string, password : string , firstname : string , lastname : string){
    const users = await prisma.user121.create({
        data:{
            email,
            password,
            firstname,
            lastname,
        }
    })
    console.log(users)
}

insertUser("klk@gamil.com","Adfiwfhwl","Utkarsh","fheuo")