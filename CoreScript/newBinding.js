// new binding

function person(name, age) {
    // When use new person JavaScript create an object like that
    // let this = Object.create(null);
    // return this;

    this.name = name;
    this.age = age;
    console.log(`${name} is ${age} years old.`)
}

var mohammad = new person("Mohammad", 25);