function greetAPerson(person) {
    return "hello, hi Mr." + person.name + " you are " + person.age;
}
console.log(greetAPerson({
    name: "Utkarsh",
    age: 22
}));
