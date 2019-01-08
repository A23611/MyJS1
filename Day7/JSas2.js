function empty(o) {
    o = null;
}

var x = [1, 2];
empty(x);
console.log(x);
// x = [1, 2] ko the thay doi gia tri tham chieu 
// o chi la coppy gia tri cua x, nen thay doi o ko lien quan ji den x
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
// function element(array, fn) {
//     let k = fromTo(0, array.length);
//     return () => {
//         if (fn === undefined) {
//             return array[k()];
//         } else {
//             return array[fn()];
//         }
//     }
// }

// var ele = element([1, 2, 3, 4]);

// ele(); // 1
// ele(); // 2
// ele(); // 3
// ele(); // 3
// ele(); // undefined

//Ex2.18:
function collect(fn, array) {
    return () => {
        let temp = fn();
        if (temp !== undefined) {
            array.push(temp);    
        }
        return array[temp];
    }
}

var array = [];
var col = collect(fromTo(0, 2), array);
col(); // 0

//Ex2.19:
function filter(fn1, fn2) {
    return () => {
        let temp = fn1();
        if (fn2(temp)) {
            return temp;
        }
    }
}

var fil = filter(fromTo(0, 5),
  function even(value) {
    return (value % 2) === 0;
  });
fil(); // 0
fil(); // 0
fil(); // 2
fil(); // 4
fil(); // undefined

//Ex2.20:
function concat(fn1, fn2) {
    return () => {
        let temp = fn1();
        if (temp !== undefined) {
            return temp;
        } else {
            temp = fn2();
            return temp;
        }
        return undefined;
    }
}

var con = concat(fromTo(0, 3), fromTo(0, 2));
con(); // 0
con(); // 1
con(); // 2
con(); // 0
con(); // 1
con(); // undefined

//Ex2.21:
function gensymf(a) {
    let count = 0;
    return () => {
        count ++;
        return a + count;
    }
}

var genG = gensymf('G');
var genH = gensymf('H');
genG(); // G1
genG(); // G2
genH(); // H1
genH(); // H2

//Ex2.22:
function gensymff(fn, begin) {
    return (a) => {
        let count = begin;
        return () => {
            count = fn(count,1);
            return a + count;
        }
    }
}

var gensymf = gensymff(add, 0);
var genG = gensymf('G');
var genH = gensymf('H');
genG(); // G1
genG(); // G2
genH(); // H1
genH(); // H2

//Ex2.23:
//Ex2.24:
function counter(a) {
    return {
        up: () => ++ a,
        down: () => -- a
    }
}

var obj = counter(10);
var up = obj.up;
var down = obj.down;

up(); // 11
down(); // 10
down(); // 9
up(); // 10

//Ex2.25:
function revocable(fn) {
    let lock = true;
    return {
        invoke: (a, b) => {
            if (lock) {
                return fn(a, b)
            }
        },
        revoke: () => lock = false
    }
}

var rev = revocable(add);
var addRev = rev.invoke;

addRev(3, 4); // 7
rev.revoke();
addRev(3, 4); // undefined

//Ex2.26
function exp(a) {
    if (typeof(a) === 'number') {
        return a;
    } else {
        return a[0](a[1], a[2]);
    }
}

var sae = [mul, 5, 11];
exp(sae); // 55
exp(42); // 42

//Ex2.27:
function exp(a) {
    if (typeof(a) === 'number') {
        return a;
    } else {
        return a[0](a[1][0](a[1][1][0](a[1][1][1]), a[1][2][0](a[1][2][1])));
    }
}

var nae = [
    Math.sqrt,
    [ add,
      [square, 3],
      [square, 4]
    ]
  ];
  exp(nae); // 5

  
  