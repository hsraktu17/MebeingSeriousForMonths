import { Client } from 'pg'
 



// async function createUserTable(){
//     await client.connect()
//     const result = await client.query(`
//         CREATE TABLE USERS(
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(50) UNIQUE NOT NULL,
//             password VARCHAR(50) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `)
//     console.log(result)
// }

async function insertData(){
    const client = new Client({
        connectionString : "postgresql://utkarsh172002srivastava:NMJCkU7xu1Km@ep-shy-sunset-a5nh7mer.us-east-2.aws.neon.tech/test?sslmode=require"
    })
    try{
        await client.connect();
        const res = await client.query("INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');");
        console.log("Insertion success " + res);
    }catch(err){
        console.error("error is   " + err);
    }finally{
        await client.end();
    }
}

insertData()