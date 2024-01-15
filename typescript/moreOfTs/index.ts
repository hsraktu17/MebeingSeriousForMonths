interface Persons {
    name : string;
    age : number;
}

function greetAPerson(person : Persons): string{
    return "hello, hi Mr." + person.name + " you are " + person.age ;
}

console.log(greetAPerson({
    name : "Utkarsh",
    age : 22
}))