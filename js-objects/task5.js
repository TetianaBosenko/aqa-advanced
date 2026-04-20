const users = [
    {
        firstName: 'Bruce',
        lastName: 'Wayne',
        age: 35,
        email: 'bruce.wayne@gmail.com',
    },
    {
        firstName: 'Diana',
        lastName: 'Prince',
        age: 25,
        email: 'diana.prince@gmail.com',
    },
    {
        firstName: 'Barry',
        lastName: 'Allen',
        age: 31,
        email: 'barry.allen@gmail.com',
    },
];

for (const user of users) {
    const { firstName, lastName, age, email } = user;
    console.log(firstName, lastName, age, email);
}
