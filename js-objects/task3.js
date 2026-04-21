const car1 = {
    brand: 'VW',
    model: 'Golf',
    year: 2015,
};

const car2 = {
    brand: 'Mitsubishi',
    model: 'Outlander',
    owner: 'Andrii',
};

const car3 = { ...car1, ...car2 };

console.log(car3);
