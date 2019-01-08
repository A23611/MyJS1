function empty(o) {
    o = null;
}

var x = [1, 2];
empty(x);
console.log(x);
// x = [1, 2] ko the thay doi gia tri tham chieu 

function swap(a, b) {
    [a, b] = [b, a];
}

var x = 1;
var y = 2;

swap(x, y);
console.log(x);
//x = 1 vi ko the thay doi gia tri tham tri, chi co the thay doi
//gia tri trong mot bien tham chieu

//Ex2.1:
function identify(i) {
    return i;
}

//Ex2.2:
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

//Ex2.3:
function identifyf(i) {
    return () => i;
}
var four = identifyf(4);
four();

//Ex2.4:
function addf(a) {
    return b => a + b;
}

//Ex2.5:
function liftf(fn) {
    return a => b => fn(a, b);
}
var addf2 = liftf(add);

addf2(3)(4); // 7
liftf(mul)(5)(6); // 30

//Ex2.6:
function curry(fn, a) {
    return b => fn(a, b);
}

var add3 = curry(add, 3);
add3(4); // 7

curry(mul, 5)(6); // 30

//Ex2.7:
//cach 1:
var inc1 = curry(add, 1)
inc1(5)

//cach 2:
var inc2 = liftf(add)(1)
inc2(5)

//cach 3:
var inc3 = addf(1)
inc3(inc3(5))

//Ex2.8:
function twice(fn) {
    return a => fn(a, a);
}

add(11, 11); // 22
var doubl = twice(add);
doubl(11); // 22
var square = twice(mul);
square(11); // 121

//Ex2.9:
function reverse(fn) {
    return (a, b) => fn(b, a);
}

var bus = reverse(sub);
bus(3, 2) // -1

//Ex2.10:
function composeu(fn1, fn2) {
    return a => fn2(fn1(a));
}

composeu(doubl, square)(5); // 100
// doubl(5) => 5 + 5 = 10
// square(10) => 100

//Ex2.11:
function composeb(fn1, fn2) {
    return (a, b, c) => fn2(fn1(a, b), c);
}

composeb(add, mul)(2, 3, 7); // 35
// add(2, 3) => 5
// mul(5, 7) => 35

//Ex2.12:
var timeCall = 0;
function limit(fn, limitTimeCall) {
    return (b, c) => {
        if (timeCall < limitTimeCall) {
            timeCall += 1;
            return fn(b, c);
        } else {
            return undefined;
        }
    }
}

var addLimited = limit(add, 1);
addLimited(3, 4); // 7
addLimited(3, 5); // undefined
addLimited(4, 5); // undefined

//Ex2.13:
var sumUp;
function from(a) {
    sumUp = a;
    return () => sumUp ++;
}

// var index = from(0);
// index(); // 0
// index(); // 1

//Ex2.14:
function to(fn, maxIndex) {
    return () => {
        if (sumUp < maxIndex) {
            return fn();
        } else {
            return undefined;
        }
    }
}

var index = to(from(1), 3);
index(); // 1
index(); // 2
index(); // undefined
index(); // undefined

//Ex2.15:
function fromTo(a, b) {
    return () => {
        if (a >= b) {
            return undefined;
        } else {
            return a ++;
        }
    }
}

// var index = fromTo(0, 3);
// index(); // 0
// index(); // 1
// index(); // 2
// index(); // undefined

//Ex2.16:
// function element(array, fn) {
//     return () => array[fn()]
// }

// var ele = element([1, 2, 3, 4], fromTo(1, 3));

// ele(); // 2 => index 1
// ele(); // 3 => index 2
// ele(); // undefined => index 3 

//Ex2.17:
function element(array, fn) {
    let k = fromTo(0, array.length);
    return () => {
        if (fn === undefined) {
            return array[k()];
        } else {
            return array[fn()];
        }
    }
}

var ele = element([1, 2, 3, 4]);

ele(); // 1
ele(); // 2
ele(); // 3
ele(); // 3
ele(); // undefined
