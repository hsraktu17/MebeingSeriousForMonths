import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://utkarsh172002srivastava:5ri9tGmBdxFE@ep-crimson-lab-a5xy5daj.us-east-2.aws.neon.tech/neondb?sslmode=require"
});

async function createTable() {
    try {
        await client.connect();

        const res = await client.query(`
            CREATE TABLE IF NOT EXISTS USERS(
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(50) UNIQUE NOT NULL,
                password VARCHAR(50) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `);

        console.log("Table created:", res.rows);
    } catch (err) {
        console.error("Error creating table:", err);
    } finally {
        await client.end();
    }
}

async function insertAndDisplay() {
    try {
        await client.connect(); // Reconnect here if needed

        await client.query(`
            INSERT INTO users (username, email, password)
            VALUES ('username1_here', 'user11@example.com', 'user_password');
        `);

        const res = await client.query(`SELECT * FROM users WHERE id = 1;`);
        console.log("Insertions done:", res.rows);
    } catch (err) {
        console.error("Error inserting and displaying data:", err);
    } finally {
        await client.end();
    }
}

async function display() {
    try {
        await client.connect(); // Reconnect here if needed

        const res = await client.query(`SELECT * FROM users WHERE id = 1;`);
        console.log("Table looks like:", res.rows);
    } catch (err) {
        console.error("Error displaying data:", err);
    } finally {
        await client.end();
    }
}

// Call the functions
async function main() {
    await createTable();
    await insertAndDisplay();
    await display();
}

main();