// window binding

"use strict";

var printNaame = function () {
    // It's point window
    // console.log(this);
    console.log(this.name);
}

var hasib = {
    name: 'Hasibul Hasan'
}

// If not working other three binding it automatically call window (It's JavaScript default behaviour)
// If you didn't want to call window use "use strict"
printNaame(); // undefined (Why didn't give error?)