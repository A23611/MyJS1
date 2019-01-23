//destructuring
const arr = [1,2,3,4,5];
const [a,...array] = arr;

var obj = {
    a: 1,
    b: 2,
    c: {
        d: 5
    }
};

var {
    a: a1,
    b: b1,
    c: {
        d:d1
    }
} = obj;
console.log(a1,b1,d1)
// var objClone = {
//     a: a1,
//     b: b1,
//     c: {
//         d:d1
//     }
// }
// console.log(objClone);