// implicit binding

// Example_01
var zarifa = {
    name: 'Zarifa',
    age: 25,
    printPlayerName: function () {
        console.log(this.name);
    }
}

// zarifa.printPlayerName();

// Example_02
var printPlayerNameFunction = function (obj) {
    obj.printPlayerName = function () {
        console.log(this.name);
    }
}

var zarifa = {
    name: 'Zarifa',
    age: 25,
}

var mohammad = {
    name: 'Mohammad',
    age: 25,
}

printPlayerNameFunction(zarifa);
printPlayerNameFunction(mohammad);

// zarifa.printPlayerName();
// mohammad.printPlayerName();

// Example_03
var person = function (name, age) {
    return {
        name: name,
        age: age,
        printName: function () {
            console.log(this.name);
        },
        father: {
            name: "Mr. Shah Alam",
            printName: function () {
                console.log(this.name);
            }
        }
    }
}

var shawon = person("Shawon", 25);
shawon.printName();
shawon.father.printName();