// write a function to create a users table in your database.
import { Client } from 'pg'
 
const client = new Client({
  connectionString: "postgres://postgres.zwpbltpjqktayfipubve:zrcmalsa1722@aws-0-ap-northeast-1.pooler.supabase.com:5432/postgres"
})

async function createUsersTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users17 (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result)
}

async function insertUser(username : string, email : string, password : string){
    await client.connect()
    try{
        const insertQuery =  `
            INSERT INTO users17 (username, email, password)
            VALUES ($1, $2, $3)
        `
        const values = [username, email, password]
        const res = await client.query(insertQuery, values)
        console.log(res)
    }
    catch(err){
        console.error(err)
    }
    finally{
        await client.end()
    }
    
}

async function getUser(email : string){
    await client.connect();
    try{
        const query = `SELECT * FROM users17 WHERE email = $1`
        const values = [email]
        const res = await client.query(query, values)
        console.log(res);
    }catch(err){
        console.error(err)
    }finally{
        await client.end()
    }
}

insertUser("ayush","ayush@gmail.com","ayush1234").catch(console.error)
// getUser("utkarsh172@gmail.com").catch(console.error)