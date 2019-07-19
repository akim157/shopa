/* =============== Анаграмма ============== */
//Так называют слово, которое содержит все буквы другого слова
//в том же количестве, но ином порядке.
//Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, 
//причем регистр букв не имеет значения. Учитываются лишь символы; 
//пробелы или знаки препинания в расчет не берутся.
/* =========== Solution ================== */
const buildCharObject = str => {
	const charObj = {};
	for (let char of str.replace(/[^\w]/g).toLowerCase()) {
		charObj[char] = charObj[char] + 1 || 1;
		console.log(charObj[char] + 1 || 1);
	}
	console.log(charObj);
	return charObj;
}

const anagram = (strA, strB) => {
	const aCharObject = buildCharObject(strA);
	const bCharObject = buildCharObject(strB);
	if (Object.keys(aCharObject).length !== Object.keys(bCharObject).length)
		return false;
	for (let char in aCharObject) {
		if (aCharObject[char] !== bCharObject[char])
			return false;
	}
	return true;
}

// console.log(anagram('!finder', 'Friend!'));
console.log(anagram('hello', 'bye'));