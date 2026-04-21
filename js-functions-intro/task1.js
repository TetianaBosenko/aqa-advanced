// Declaration
function calculateSquare(width, height) {
    return height * width;
}
console.log(calculateSquare(8, 10));

// Expression
const calculateSquare1 = function (width1, height1) {
    return height1 * width1;
};
console.log(calculateSquare1(10, 2));

// Arrow
const calculateSquare2 = (width2, height2) => height2 * width2;

console.log(calculateSquare2(10, 5));
