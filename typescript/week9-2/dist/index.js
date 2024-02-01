"use strict";
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
function greet(user) {
    console.log("hi " + user.firstName + user.lastName);
}
function checkEmail(user) {
    return !!user.email;
}
const user = {
    firstName: "Utkarsh ",
    lastName: "Srivastava",
    age: 21,
};
const legal = isLegal(user);
console.log(legal);
const greeting = greet(user);
console.log(greeting);
const checking = checkEmail(user);
console.log(checking);
