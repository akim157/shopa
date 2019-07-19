/* =========== Поиск гласных ========== */
//Нужно написать функцию, принимающую строку в качестве аргумента
// и возвращающую количество гласных, которые содержатся в строке.
// Гласными являются «a», «e», «i», «o», «u».
/* ========== Solution ================ */
const findVowels = str => {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let char of str.toLowerCase()) {
      if (vowels.includes(char)) {
          count++
      }
  }
  return count
};

console.log(findVowels('hello')); //2
console.log(findVowels('why')); //0

const findVowels2 = str => {
    const matched = str.match(/[aeiou]/gi)
    console.log(matched);
    return matched ? matched.length : 0;
}
console.log(findVowels2('hello')); //2
