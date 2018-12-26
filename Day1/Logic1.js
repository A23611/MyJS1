let n = prompt("number.length : ");
let a = [];
let b = '';
for (let i = 0; i < n; i++) {
    a[i] = prompt("number " + (i + 1) + " : ");
    b += a[i];
}
let number = parseInt(b);
number += 1;
let d = number.toString().split("");
for (let index = 0; index < d.length; index++) {
    d[index] = d[index] + "a";
};