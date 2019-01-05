function powerInt(n) {
    for (let i = 1; i <= Math.sqrt(n); i++) {
        for (let j = 0; j < 32; j++) {
            if (Math.pow(i, j) == n) {
                console.log(`${i} ^ ${j} = ${n}`);
                return true;
            }
        }
    }
    return false;
}

powerInt(4);