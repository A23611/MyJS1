function deepComparision(obj1, obj2) {
    if (obj1 == null || obj2 == null && typeof(obj1) != "object" || typeof(obj2) != "object" ) {
        return false;
    }

    if (obj1 === obj2) {
        return true;
    }

    let keyObj1 = Object.keys(obj1);
    let keyObj2 = Object.keys(obj2);
    if (keyObj1.length == keyObj2.length) {
        for (let i = 0; i < keyObj1.length; i++) {
            if (keyObj1[i] === keyObj2[i]) {
                if (typeof obj1[keyObj1][i] === 'object' && typeof obj2[keyObj2][i] === 'object') {
                    deepComparision(obj1[keyObj1][i], obj2[keyObj2][i])
                } else if (obj1[keyObj1][i] !== obj2[keyObj2][i]) {
                    return false;
                }
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
    return true; 
}

var obj = {here: {is: "an", is: 'b'}, object: 2};
console.log(deepComparision(obj, obj));
console.log(deepComparision(obj, {here: 1, object: 2}));
// → false
console.log(deepComparision(obj, {here: {is: "a", is: 'c', is: 'd'}, object: 2}));
// → true

