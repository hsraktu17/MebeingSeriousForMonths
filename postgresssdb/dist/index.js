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
function insertData() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://utkarsh172002srivastava:NMJCkU7xu1Km@ep-shy-sunset-a5nh7mer.us-east-2.aws.neon.tech/test?sslmode=require"
        });
        try {
            yield client.connect();
            const res = yield client.query("INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');");
            console.log("Insertion success " + res);
        }
        catch (err) {
            console.error("error is   " + err);
        }
        finally {
            yield client.end();
        }
    });
}
insertData();
