function range(a, b, c) {
    let n = [];
    if (c == undefined) {
        if (a < b) {
            for (var i = 0; a < b; i++) {
                n[i] = a;
                a ++;
            }
        } else {
            for (var i = 0; a > b; i++) {
                n[i] = a;
                a --;
            }
        }
    } else {
        if (a < b) {
            for (var i = 0; a < b; i++) {
                n[i] = a;
                a += c;
            }
        } else {
            for (var i = 0; a > b; i++) {
                n[i] = a;
                a += c;
            }
        }
    }
    return n;
}

//sum
function sumOfRange (n) {
    let sum = 0;
    for (var i = 0; i < n.length; i++) {
        sum += n[i];
    }
    return sum;
}
