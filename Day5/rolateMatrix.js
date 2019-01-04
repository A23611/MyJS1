function rotateMatrix(array) {
    let number = 1;
    for (let coordinatesYfinal = array.length - 1 ; coordinatesYfinal >= 0; coordinatesYfinal--) {
        for (let coordinatesX = 0; coordinatesX < array.length; coordinatesX++) {
            array[coordinatesX][coordinatesYfinal] = number;
            number ++;
        }
    }
    return array;
}

var M = rotateMatrix([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]);

console.log(M);

//

function rotateMatrix2(array) {
    for (let i = 0; i < array.length/2; i++) {
        for (let j = i; j < array.length - 1 - i; j++) {
            [ 
            array[j][array.length - 1 - i],
            array[array.length - 1 - i][array.length - 1 - j],
            array[array.length - 1 - j][i],
            array[i][j]
        ] = [
            array[i][j],
            array[j][array.length - 1 - i],
            array[array.length - 1 - i][array.length - 1 - j],
            array[array.length - 1 - j][i]
            ]
        }
    }
    return array;
}

function makeArray(n) {
    let rs = []
    for (let i = 0; i < n; i++) {
        array = [i];
        rs.push(array);
    }
    let count = 1;
    for (let i = 0; i < rs.length; i++) {
        for (let j = 0; j < rs.length; j++) {
            rs[i][j] = count;
            count++;
        }
        
    }
    return rs;
}

var N = rotateMatrix2(makeArray(4));
console.log(N)

var K = rotateMatrix2(makeArray(5));
console.log(K)