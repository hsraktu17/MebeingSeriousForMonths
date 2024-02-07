import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

interface insertUserr{
    firstname : string,
    lastname : string,
    phone : number
}

async function insertUser({
    firstname,
    lastname,
    phone
}:insertUserr){
    try {
        const res = await prisma.users.create({
            data: {
                firstname,
                lastname,
                phone
            }
        });
        console.log(res);
    } catch (error) {
        console.error("Error inserting user:", error);
        // Handle the error, e.g., return an error response or throw an error
    }
}

insertUser({
    firstname : 'Utkarsh',
    lastname : 'Srivastava',
    phone : 9889
})