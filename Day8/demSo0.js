function countZerosInDjt(number){
    var count = 0;
    var i = 1;
    while(Math.pow(5,i) <= number){
        count += Math.floor(number / Math.pow(5,i));
        i++;
    }
    return count;
}



console.log(countZerosInDjt(5));