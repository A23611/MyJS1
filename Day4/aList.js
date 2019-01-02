//1
function arrayToList(array) {
    let firstElementInArray = array.shift();
    if (firstElementInArray === undefined) {
        return null;
    } else {
        return {
            value: firstElementInArray,
            rest: arrayToList(array)
        }
    }
}
//2
// function listToArray(list) {
//     var a = [];
//     function addValueToArray(list) {
//         if (list['rest'] !== null) {
//             a.push(list['value']);
//             addValueToArray(list['rest']);
//         } else if (list['rest'] === null) {
//             a.push(list['value']);
//         }
//     }
//     return a;
// }
function listToArray(rest){
    let array = [];
    while(rest !== null){
        array.push(rest['value']);
        rest = rest['rest'];
    }
    
    return array;
    
}
console.log(arrayToList([10, 20, 30]));
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
