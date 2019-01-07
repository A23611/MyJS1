/* Read File */
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./JavaScript Advanced 02 - Higher-Order Functions - Exercises - Mock Data.json', 'utf-8'));

/* Exercise 1 */
const arr1 = []
data.forEach((iRunInData) => {
    let result = `${iRunInData.first_name} ${iRunInData.last_name}`;
    arr1.push(result);
});

// console.log(arr1)

/* Exercise 2 */
const arr2 = data.filter((iRunInData) => 
    iRunInData.gender == "Male" && iRunInData.age < 35
);
// console.log(arr2)
/* Exercise 3 */
const arr3 = data.map(iRunInData => 
    `${iRunInData.first_name} ${iRunInData.last_name}`
);
// console.log(arr3)

/* Exercise 4 */

/* Exercise 5 */
const arr5 = data.reduce((firstValueChangeAfterLoop, iRunInData) =>
    firstValueChangeAfterLoop + iRunInData.age, 0) / data.length
// console.log(arr5)
/* Exercise 6 */
//Ex1:
const arr61 = data.reduce((firstValueChangeAfterLoop, iRunInData) => {
    firstValueChangeAfterLoop.push(`${iRunInData.first_name} ${iRunInData.last_name}`)
    return firstValueChangeAfterLoop;
}, []);
// console.log(arr61)

//Ex2:
const arr62 = data.reduce((firstValueChangeAfterLoop, iRunInData) => {
    if(iRunInData.gender === 'Male' && iRunInData.age < 40){
        firstValueChangeAfterLoop.push(iRunInData);
    }
    return firstValueChangeAfterLoop;
},[]);
// console.log(arr62)

//Ex3:
const arr63 = data.reduce((firstValueChangeAfterLoop, iRunInData) => {
    firstValueChangeAfterLoop.push(`${iRunInData.first_name} ${iRunInData.last_name}`)
    return firstValueChangeAfterLoop
}, []);
// console.log(arr63)


/* Exercise 7 */
function map2(arr, aFunction) {
    let newArr = [];
    for (let i of arr) {
        i = aFunction(i);
        newArr.push(i);
    }
    return newArr;
}
function transform(i) {
    return `${i.first_name} ${i.last_name}`
}

// console.log(map2(data, transform ));
// console.log(data)

/* Exercise 8 */
function filter2(arr, functionCondition) {
    let newArr = [];
    for (i of arr) {
        if (functionCondition(i)) {
            newArr.push(i);
        }
    }
    return newArr;
}

function condition(i) {
    if (i.gender === 'Male' && i.age < 40) {
        return true;
    } else {
        return false;
    }
}

// console.log(filter2(data, condition))

/* Exercise 9 */
function reduce2(array, function2, firstValue) {
    let returnResult = firstValue;
    for (let i of array) {
        returnResult = function2(returnResult, i);
    }
    return returnResult;
}

/* Exercise 10 */



