"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = void 0;
function greet(person) {
    return "hello " + person.name + " i am " + person.age + " isn";
}
exports.greet = greet;
console.log(greet({
    name: "Utkarsh",
    age: 21
}));
