// explicit binding

var printName = function (v1, v2, v3) {
    console.log(`${this.name} is ${v1}, ${v2} & ${v3}`);
}

var saif = {
    name: "Hasibur Rahman",
    age: 18
}

var v1 = 'Handsome';
var v2 = 'All-rounder';
var v3 = 'Best player';

var v = [v1, v2, v3];

// printName.call(saif);
printName.call(saif, v1, v2, v3);