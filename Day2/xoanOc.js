function makeArray(n) {
    let arr = []
    for (let i = 0; i < n; i++) {
        array = [i];
        arr.push(array);
    }
    return arr;
}

function xoanOc(n) {
    let arr = makeArray(n);
    let num = 1;
    for (let i = 0; i < n/2; i++) {
        for (let j = i; j < n - i; j++) {
            arr[i][j] = num;
            num ++;
        };
        num --;
        for (let j = i; j < n - i; j++) {
            arr[j][n - 1 - i] = num;
            num ++;
        };
        num --;
        for (let j = i; j < n - i; j++) {
            arr[n - 1 -i][n - 1 - j] = num;
            num ++;
        };
        num --;
        for (let j = i; j < n - i - 1; j++) {
            arr[n - 1 - j][i] = num;
            num ++;
        };
    }
    return arr;
}