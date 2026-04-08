const person = {
    firstName: "Bruce",
    lastName: "Wayne",
    age: 35
};

person.email = "bruce.wayne@gmail.com";
delete person.age;

console.log(person);