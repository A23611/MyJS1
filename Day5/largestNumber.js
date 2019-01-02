// function conversion(x, y) {
//     let p = x;
//     x = y;
//     y = p;
// }
// let a = [0,1,2,3,4]
// console.log(conversion(a[0], a[1]))

// let k = a[0];
// a[0] = a[1];
// a[1] = k;

function convertElementArrayToString(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = String(array[i]);
    }
}

function convertElementArrayToInt(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = parseInt(array[i]);
    }
}

function compareString(x, y) {
    if ((x + y) >= (y + x)) {
        return true;
    } else {
        return false;
    }
}

function largestNumber(array) {
    let medium;
    convertElementArrayToString(array);
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (compareString(array[i], array[j])) {
            } else {
                medium = array[i];
                array[i] = array[j];
                array[j] = medium; 
            }
        }
    }
    convertElementArrayToInt(array);
    let rs = array.join('');
    rs = parseInt(rs);
    return rs;
}

largestNumber([9, 99, 98, 998, 9997])