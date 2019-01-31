function makeArray(n) {
    rs = [];
    for(let i = 0; i < n; i++) {
        rs[i] = [];
    }
    return rs;
}

function zigZagString(str, k) {

    let l = str.length;
    let arr = makeArray(k);
    let n = 0;
    let flag = true;
    let m = 0;
    for(let i = 0; i <= l; i++) {
        arr[m][n] = str[i];
        n++;
        if(m == (k - 1)) {
            flag = false;
        } else if (m == 0) {
            flag = true
        }
        if(flag == true) {
            m++;
        } else {
            m--;
        }
    }
    return arr;
}
zigZagString("GEEKSFORGEEKS", 3)
