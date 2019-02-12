function charCodeAtFake(str,i){
    return str.charCodeAt(i) - 64;
}
function findNumber(str) {
    let index = 0;
    for (let i = 0; i < str.length; i++) {
        index += charCodeAtFake(str[i]) * Math.pow(26, str.length - 1 -i)
    }
    return index;
}
findNumber("AA");