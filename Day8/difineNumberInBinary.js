function difineNumberInBinary(number) {
    let result = [];
    while (number > 0) {
        result.unshift(number % 2);
        number = Math.floor(number / 2);
    }
    return result.join('');
}

difineNumberInBinary(6)