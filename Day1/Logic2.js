function merge(ranges) {
    var result = [], last;

    ranges.forEach(function (r) {
        if (!last || r[0] > last[1])
            result.push(last = r);
        else if (r[1] > last[1])
            last[1] = r[1];
    });

    return result;
}

var ranges = [[1, 2], [3, 5], [4, 9], [6, 7], [8, 10], [12, 16]];
console.log(merge(ranges));