function duongCheo(array) {
    let result = [];
    var j,k,i;
    let numberOfRow = array.length * 2 - 1;

    for(let z = 0; z < numberOfRow; z += 1){
        result[z] = [];
    }

    for (j = 0; j < array.length; j++) {
        for (k = 0; k < array.length; k++) {
            for (i = 0; i < numberOfRow; i++) {
                if ((j + k) == i) {
                    result[i].push(array[j][k]); 
                }
            }
        }
    }
    return result;
}

console.log(duongCheo([ [1, 2, 3],[4, 5, 6],[7, 8, 9]]));