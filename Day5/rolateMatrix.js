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