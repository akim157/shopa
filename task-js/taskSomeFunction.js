/* ============== Что делает эта функция =========== */
function someFunction(A) {
	var n = A.length;	
	for (var i = 0; i < n-1; i++) {
		for (var j = 0; j < n-1-i; j++) {
			if (A[j+1] < A[j]) {
				var t = A[j+1];
				A[j+1] = A[j];
				A[j] = t;
			}
		}
	}
	return A;
}

const result = someFunction([10, 5, 3, 8]);
console.log(result);
/* Сортирует*/