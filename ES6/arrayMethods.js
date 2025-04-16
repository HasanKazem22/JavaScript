numbers = [1, 2, 3, 4, 5];

// Didn't change main array
const filter = numbers.filter((num) => num > 2);
console.log(filter); // Output - [3, 4, 5]

const find = numbers.find((num) => num > 2);
console.log(find); // Output - 3

const findIndex = numbers.findIndex((num) => num > 2);
console.log(findIndex); // Output - 2

const slice = numbers.slice(2, 4); // From index 2 to before index 4
console.log(slice); // Output - [3, 4]

const concat = numbers.concat(6, 7, 8);
console.log(concat); // Output - [1, 2, 3, 4, 5, 6, 7, 8]

// Change main array
const splice = numbers.splice(1, 2, 7, 6); // Started index, Removed element numbers, Added new element(Optional)
console.log(splice); // Output [2, 3] Removed elements
console.log(numbers); // Output [1, 7, 6, 4, 5] Main array with new elements

const push = numbers.push(6, 7, 8);
console.log(push); // Output - 8 array length
console.log(numbers); // Output - [1, 2, 3, 4, 5, 6, 7, 8]

// Map 
const newnumbers = numbers.map((num) => {
    return num * 2;
})

console.log(newnumbers);