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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser({ firstname, lastname, phone }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield prisma.users.create({
                data: {
                    firstname,
                    lastname,
                    phone
                }
            });
            console.log(res);
        }
        catch (error) {
            console.error("Error inserting user:", error);
            // Handle the error, e.g., return an error response or throw an error
        }
    });
}
insertUser({
    firstname: 'Utkarsh',
    lastname: 'Srivastava',
    phone: 9889
});
