export default function delay(ms = 1000) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(), ms);
	});
}