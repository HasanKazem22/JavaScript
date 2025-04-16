const course = {
    name: 'React Crash Course',
    details: {
        price: '200 Tk',
        duration: '2 hours'
    }
}

const {name} = course;
const {details: {price}} = course;

console.log(name);
console.log(price);