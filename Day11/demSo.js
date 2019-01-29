function countAndSay(n) {
  var arr = [];
  arr[0] = "1";
  var count = 1;
  var str = arr[0];

  for (var i = 1; i < n; i++) {
    str = arr[i - 1];
    arr[i] = "";

    for (var j = 0; j < str.length; j++) {

      if (str[j + 1] == str[j]) {
        count++;
      } else {
        arr[i] = arr[i] + count + str[j];
        count = 1;
      }

    }

  }
  return arr[n - 1];
};
console.log(countAndSay(10))
