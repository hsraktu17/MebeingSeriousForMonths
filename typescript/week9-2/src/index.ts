type Employee = {
    name : string
    startDate : number
}

interface Manager {
    name  : string
    department : string
}

type TechLead = Manager & Employee

const teamLead : TechLead = {
    name: "Utkarsh",
    startDate : Date.now(),
    department : "vsf"
}

console.log(teamLead)