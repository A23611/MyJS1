function isEven(a) {
    let b = Math.abs(a);
    if (b == 0) {
        return true;
    } else if(b == 1) {
        return false;
    }

    return isEven(a - 2);
}
