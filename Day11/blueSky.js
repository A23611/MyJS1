// de bai: dao nguoc string "the sky is blue" => "blue is sky the"
//
// y tuong: chay vong for nguoc string den khi gap " " thi slice,trim str va
// rs += (" " + strSlice)
// cuoi cung dc rs co 1 khoang trang o dau dung rs = rs.subStr(1);


function blueSky(str) {
    let rs = '';
    let temp = str.length;
    for(let i = str.length - 1; i >= 0; i --) {
        if(str[i] == " ") {
            rs = rs.trim();
            rs += (" " + str.slice(i, temp).trim());
            temp = i;
        }
        if(i == 0) {
            rs = rs.trim();
            rs += (" " + str.slice(i, temp).trim());
        }
    }
    rs = rs.trim();
    return rs;
}

console.log(blueSky("     the sky is blue        "));
