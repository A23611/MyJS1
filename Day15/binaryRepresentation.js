function ReverseBits(num) {
    if (num < 0) {
        return 'fuk';
    }
    let i = 1;
    let rs = new Array(32);
    rs = rs.fill(0);
    while (num > 0 && i <= rs.length) {
        rs[rs.length - i] = num % 2;
        i++;
        num = Math.floor(num / 2);
    }
    return parseInt(rs.reverse().join(''), 2);
}

ReverseBits(3)

// function bin2dec(num){ 
//     return num.split('').reverse().reduce(function(x, y, i){ 
//      return (y === '1') ? x + Math.pow(2, i) : x; 
//     }, 0); 
//     }
function NumberOf1Bits(num) {
    if (num < 0) {
        return 'fuk';
    }
    let i = 1;
    let rs = new Array(32);
    rs = rs.fill(0);
    while (num > 0 && i <= rs.length) {
        rs[rs.length - i] = num % 2;
        i++;
        num = Math.floor(num / 2);
    }
    let k = rs.reduce((count, i) => {
        if(i == 1) {
            count += 1;
        }
        return count;
    }, 0)
    return k;
} 

NumberOf1Bits(11);