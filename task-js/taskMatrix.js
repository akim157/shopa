/* ============ Matrix diagonal ===========*/
/*
	Получить сумму цифр по диоганали, а потом получить абслолютное число.
*/
const arr =[
	[1,2,3],
	[4,5,6],
	[8,8,9]
];
let n = arr.length, result = 0;
let resultA = [];
let resultB = [];
for (let i = 0; i < n; i++) { 
		resultA[i] = arr[i][n + i - 3];
		resultB[i] = arr[i][n - i - 1];
}
result = resultA.reduce((a, b) => a + b) - resultB.reduce((a, b) => a + b);
result = Math.abs(result);
return result;