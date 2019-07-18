/* ========= Преобразование массива в объект =========== */
//На выходе объект {width: 10, height: 20}
/* ========= Solution ================*/
const arr = [
	{name: "width", value: 10},
	{name: "height", value: 20},
];

const result = {} ;
arr.reduce((accumulator, item) => {
	result[item.name] = item.value;
}, {})
console.log(result);