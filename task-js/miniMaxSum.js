//Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
//
// For example, arr = [1,3,5,7,9] . Our minimum sum is 1 + 3 + 5 + 7 = 16 and our maximum sum is 3 + 5 + 7 + 9 = 24.
// We would print
// 16 24
miniMaxSum([1,2,3,4,5]);
function miniMaxSum(arr) {
    let mas = arr.slice();
    let max = 0, min = 0, chan;
    arr.forEach(item => {
        let key = mas.splice(0,1);
        chan = mas.reduce((a,b) => a + b);
        min = (min === 0) ? chan : min;
        if (chan > max) max = chan;
        else if (chan < min) min = chan;
        mas.push(key[0]);
    });
    console.log(min, max);
}
