import { Client } from "pg";



async function insertData(){

    const client = new Client({
        connectionString:"postgresql://utkarsh172002srivastava:5ri9tGmBdxFE@ep-crimson-lab-a5xy5daj.us-east-2.aws.neon.tech/neondb?sslmode=require"
    })


    try{
        await client.connect()
        const insertDataInTable = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');"
        const res = await client.query(insertDataInTable);
        console.log(res)
    }catch(err){
        console.error(err)
    }finally{
        await client.end()
    }

}

const display = async () => {
    
}

insertData()