// Spread Operator
const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4, 5, 6];

console.log(newNumbers); // Output - [1, 2, 3, 4, 5, 6]

// Rest Operator - When use ... in an function arguments
const learn = (...args) => {
    console.log(args);
}

learn(1, 2, 3, 4); // Passing unlimited arguments