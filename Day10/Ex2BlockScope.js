var x = 2,
fns = [];

(function() {
  var x = 5;

  for (var i = 0; i < x; i++) {
    if(i == 2) {
        x = i;
    }
  }
  function run() {
      return x * 2;
  }
  return fns[x * 2] = run;
})();

// DO NOT MODIFY BELOW CODE
console.log(x * 2 === fns[x * 2]());
