function countBs() {
    let a = "BBC";
    let count = 0;
    for (let index = 0; index < a.length; index++) {
        if (a[index] == "B") {
            count ++;
        }
        
    }
    return count;
}