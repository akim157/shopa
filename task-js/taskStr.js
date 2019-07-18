/* =========== Преобразование строки в новую строку ======== */
// Дана строка, состоящая из букв A-Z:
// AAAABBBCCZYXDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
// Нужно написать функцию RLE, которая на выходе даст строку вида:
// A4B3C2ZYXD4E3F3A5B28
/* =========== Solution ======================== */
const str = 'AAAABBBCCZYXDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBBB';
const rle = str => {
	let result = '', event = '', i = 1;
	str.split('').forEach(item => {
		if (item !== event) {
			result += (i > 1) ? event + i : event;
			i = 1;
			event = item;
		} else {
			i++;
		}
	});
	result += event + i;
	return result;
};

console.log(rle(str));
