function reverseArray(a) {
    let b = [];
    for (var i = 0; i < a.length; i++) {
        let c = a.length - (i + 1);
        b[i] = a[c];
    }
    return b;
}

function arrayInPlace(a) {
    for (var i = 0; i < (a.length)/2; i++) {
        let d;
        d = a[i];
        a[i] = a[a.length - (i + 1)];
        a[a.length - (i + 1)] = d;

    }
    return a;
}
