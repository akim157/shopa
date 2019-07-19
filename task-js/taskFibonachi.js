/* ============== Фибоначчи ================= */
//Фибоначчи — это ряд чисел, где каждое последующее является суммой двух предыдущих.
// Так, первые десять чисел выглядят следующим образом: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
/* ============== Solution ================== */
const fibonacci = num => {
    const result = [0, 1];
    for (let i = 2; i <= num; i++) {
        const prevNum1 = result[i - 1];
        const prevNum2 = result[i - 2];
        result.push(prevNum1 + prevNum2)
    }
    return result[num]
};
console.log(fibonacci(3));//2
//Рекурсия
const fibonacci2 = num => {
    if (num < 2) {
        return num
    }
    return fibonacci2(num - 1) + fibonacci(num - 2);
};