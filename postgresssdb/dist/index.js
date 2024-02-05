"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://utkarsh172002srivastava:5ri9tGmBdxFE@ep-crimson-lab-a5xy5daj.us-east-2.aws.neon.tech/neondb?sslmode=require"
});
function createTable() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const res = yield client.query(`
            CREATE TABLE IF NOT EXISTS USERS(
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(50) UNIQUE NOT NULL,
                password VARCHAR(50) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `);
            console.log("Table created:", res.rows);
        }
        catch (err) {
            console.error("Error creating table:", err);
        }
        finally {
            yield client.end();
        }
    });
}
function insertAndDisplay() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect(); // Reconnect here if needed
            yield client.query(`
            INSERT INTO users (username, email, password)
            VALUES ('username1_here', 'user11@example.com', 'user_password');
        `);
            const res = yield client.query(`SELECT * FROM users WHERE id = 1;`);
            console.log("Insertions done:", res.rows);
        }
        catch (err) {
            console.error("Error inserting and displaying data:", err);
        }
        finally {
            yield client.end();
        }
    });
}
function display() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect(); // Reconnect here if needed
            const res = yield client.query(`SELECT * FROM users WHERE id = 1;`);
            console.log("Table looks like:", res.rows);
        }
        catch (err) {
            console.error("Error displaying data:", err);
        }
        finally {
            yield client.end();
        }
    });
}
// Call the functions
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield createTable();
        yield insertAndDisplay();
        yield display();
    });
}
main();
