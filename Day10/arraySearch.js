// de bai:
// function dau vao cho vao 1 array va 1 so
// tim index cua so do trong mang, neu so do ko co trong mang
// thi chen no vao mang roi tra ra vi tri cua no

// y tuong:
// duyet fan tu trong mang, neu phan tu nao bang voi so nhap vao
// thi tra ra index cua phan tu do
// neu so ko ton tai trong mang thi xet xem so do nho hon so nao 
// trong mang thi dua ra index cua phan tu do
// neu so do lon hon phan tu cuoi cung cua mang thi index tra ra =
// array.length.

function arraySearch(arr, num) {
    let index;
    // neu phan tu ton tai trong mang
    for(let i in arr) {
        if(arr[i] === num) {
            index = parseInt(i);
        }
    }
    // neu phan tu ko ton tai trong mang
    if(index === undefined) {
        for(let i in arr) {
            if(num < arr[i]) {
                index = parseInt(i);
                break;
            }
        }
        if(num > arr[arr.length - 1]) {
            index = arr.length;
        }
    }
    return index;
}
console.log(arraySearch([1,3,5,6], 5));
// Input: [1,3,5,6], 5
// Output: 2
console.log(arraySearch([1,3,5,6], 2));
// Input: [1,3,5,6], 2
// Output: 1
console.log(arraySearch([1,3,5,6], 7));
// Input: [1,3,5,6], 7
// Output: 4
console.log(arraySearch([1,3,5,6], 0));
// Input: [1,3,5,6], 0
// Output: 0