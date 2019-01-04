function pascal(a) {
    let result = [];
    for (let index = 1; index <= a; index++) {
        let triangle = new Array(index);
        triangle.fill(0);
        triangle[0] = 1;
        triangle[index - 1] = 1;
        result.push(triangle);
    }
    for (let start = 2; start < result.length; start++) {
        let before = 0;
        let after = 1;
        for (let j = 1; j < result[start].length - 1; j++) {
            result[start][j] = result[start - 1][before] + result[start - 1][after];
            after++;
            before++;
        }
        
    }
    return result;
}

//
function pscal2(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        let array = new Array(i)
        array[0] = 1;
        array[i - 1] = 1;
        result.push(array);
    }

    for (let i = 2; i < result.length; i++) {
        let arrBefore = 0;
        for (let j = 1; j < result[i].length - 1; j++) {
            result[i][j] = result[i - 1][arrBefore] + result[i - 1][arrBefore + 1];
            arrBefore ++;
        }
    }
    return result;
}