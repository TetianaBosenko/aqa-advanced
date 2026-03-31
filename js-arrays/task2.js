const numbers = [1, 2, 3, 4, 5]

const numbers1 = numbers.map((number) => number * numbers.indexOf(number))

console.log(numbers1)