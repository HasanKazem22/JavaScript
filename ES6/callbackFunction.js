function great(name, callback) {
    console.log('Hello world');

    callback(name);
}

function sayName(name) {
    console.log('Hello ' + name);
}

setTimeout(great, 2000, 'Mohammad', sayName);



function calculateFactorial(num, callback) {
    callback(num);
}

function factorial(num){
    let result = 1;

    for(let i = 1; i <= num; i++) {
        result *= i;
    }
    console.log(result);
}

calculateFactorial(3, factorial);