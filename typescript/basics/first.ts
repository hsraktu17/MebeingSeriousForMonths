export function greet(person : {
    name : string;
    age : number;
}):string {
    return "hello " + person.name + " i am " + person.age + " isn";
}


console.log(greet({
    name : "Utkarsh",
    age : 21
}))