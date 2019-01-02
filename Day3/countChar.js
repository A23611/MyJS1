function countChar(a, b) {
    let count = 0;
    for (let index = 0; index < a.length; index++) {
        if (a[index] == b) {
            count ++;
        }
        
    }
    return count;
}