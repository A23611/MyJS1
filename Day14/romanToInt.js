// de: chuyen str la ma sang thanh so nguyen
// y tuong: moi str co 1 gia tri rieng (vd I co gia tri la 1) cong tat ca cac gia tri ung voi tung str
// neu str truoc co gia tri nho hon str sau thi tru di 2 lan gia tri str truoc

function romanToInt(str) {
    let temp;
    let rs = 0;
    let tempTest;

    for(let i = 0; i < str.length; i ++) {
        //DK check
        
        //thuc thi
        if(str[i] === 'I') {
            rs += 1;
            if(temp < 1) {
                rs -= 2 * temp;
            }
            temp = 1;
        }
        if(str[i] === 'V') {
            rs += 5;
            if(temp < 5) {
                rs -= 2 * temp;
            }
            temp = 5;
        }
        if(str[i] === 'X') {
            rs += 10;
            if(temp < 10) {
                rs -= 2 * temp;
            }
            temp = 10;
        }
        if(str[i] === 'L') {
            rs += 50;
            if(temp < 50) {
                rs -= 2 * temp;
            }
            temp = 50;
        }
        if(str[i] === 'C') {
            rs += 100;
            if(temp < 100) {
                rs -= 2 * temp;
            }
            temp = 100;
        }
        if(str[i] === 'D') {
            rs += 500;
            if(temp < 500) {
                rs -= 2 * temp;
            }
            temp = 500;
        }
        if(str[i] === 'M') {
            rs += 1000;
            if(temp < 1000) {
                rs -= 2 * temp;
            }
            temp = 1000;
        }
    }
    return rs;
}

romanToInt('XIV')