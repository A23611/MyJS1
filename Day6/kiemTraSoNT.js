//So nguyen to la so > 1 va chi chia het cho 1 va chinh no
function kiemTraSoNT(a) {
    let flag = true;
    if (a < 2) {
        flag = false;
    } else {
        for (var i = 2; i < a - 1; i++) {
            if (a % i == 0) {
                flag = false;
                break;
            }
        }
    }
    return flag;
}
kiemTraSoNT(5);

function ỉnRaMangSoNT(n) {
    if (kiemTraSoNT(n)) {
        for (let i = 2; i <= n; i++) {
            if (kiemTraSoNT(i)) {
                console.log(i);
            }
            
        }
    }

}

ỉnRaMangSoNT(7)