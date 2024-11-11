const Person = {
    name: "davis",
    age: "18",
    isStudent: true
}

console.log(Person.name)
console.log(Person['name'])
if (Person.age >= 18){
    console.log("Persona ir pilngadiga");
}
else{
    console.log("Persona ir nepilngadīga");
}
if (Person.isStudent = true){
    console.log("Persona ir students")
}
else{
    console.log("Persona nav students")
}
 Person.course = "PT2022"