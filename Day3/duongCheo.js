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

//
function duongCheo2(squareMatrix) {
    let result = [];
    for (let i = 0; i < squareMatrix.length * 2 - 1; i++) {
        result[i] = [];
    }
    for (let i = 0; i < squareMatrix.length; i++) {
        for (let j = 0; j < squareMatrix.length; j++) {
            for (let k = 0; k < result.length; k++) {
                if ((i + j) === k) {
                    result[k].push(squareMatrix[i][j])
                }
            }
        }
        
    }
    return result;
}

console.log(duongCheo2([ [1, 2, 3],[4, 5, 6],[7, 8, 9]]));