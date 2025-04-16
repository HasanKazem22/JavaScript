// First...
// export.js
const test_01 = () => {
    console.log("Test_01 Export")
}

// export test_01;

// import.js
import {test_01} from './export';

// Second...
// export.js
const test_02 = () => {
    console.log("Test_02 Export")
}

export const p = 2;

export default test_02;

// import.js
import test_02 from './export';
import anyName from './export'; // If export default one use any kind of name for import
import {p as num} from './export'

test_02();
anyName();
num();