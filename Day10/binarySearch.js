// y tuong cua binarySearch:
// đầu vào là một mẳng đã sắp xếp theo thứ tự tăng dần và một số
// => trả ra vị trí của số đó trong mảng, nếu ko có thì trả về -1

// hướng làm:
// n.logn
// vì đay là array đã sắp xếp theo thứ tự tăng dần array.sort(a, b) {a - b}
// ta sẽ tìm đc index của value nhập vào dựa vào 3 giá trị start, middle, stop
// start = 0, stop = array.length - 1, middle = (start + stop )/ 2
// đầu tiên xét xem giá trị array[middle] có bằng value hay ko
// nếu bằng thì trả ra ra trị index của middle
// nếu value > array[middle] thì bỏ qua mảng array có giá trị < hơn value
// start lúc này đc gán: start = middle + 1 => để tiếp tục thực hiện xét
// mảng array > value ... đến hết phần tử cuối cùng sẽ có index 
// (start + start) / 2 || (stop + stop) / 2;


function binarySearch(list, value) {
    // initial values for start, middle and end
    let start = 0
    let stop = list.length - 1
    let middle = Math.floor((start + stop) / 2)

    // While the middle is not what we're looking for and the list does not have a single item
    while (list[middle] !== value && start < stop) {
        if (value < list[middle]) {
            stop = middle - 1
        } else {
            start = middle + 1
        }

        // recalculate middle on every iteration
        middle = Math.floor((start + stop) / 2)
    }

    // if the current middle item is what we're looking for return it's index, else return -1
    return (list[middle] !== value) ? -1 : middle
}

const list = [2, 5, 8, 9, 13, 45, 67, 88, 99]
console.log(binarySearch(list, 99)) // 7 -> returns the index of the item





