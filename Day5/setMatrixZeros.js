function setMatrixZeros(array) {
    let coordinates0x, coordinates0y;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i][j] === 0) {
                coordinates0x = i;
                coordinates0y = j;
            }
        }
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (coordinates0x === i || coordinates0y === j) {
                array[i][j] = 0;
            }
        }
    }
    return array;
}

var M = setMatrixZeros([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
]);
console.log(M);