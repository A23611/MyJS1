var countMinimumChar = {
  count: 0,
  minimumChar: function(str) {
    let k1, k2, temp, newStr;
    for (let i = 0, j = str.length - 1; i <= j; i++ , j--) {
      if (str[i] != str[j]) {
        temp = str[j];
        k1 = str.slice(0, i);
        k2 = str.slice(i);
        newStr = k1 + temp + k2;
        this.count += 1;
        countMinimumChar.minimumChar(newStr);
        break;
      }
    }
    return this.count;
  }
};
console.log(countMinimumChar.minimumChar("AACECAAAA"))

console.log(countMinimumChar.minimumChar("ABC"))
