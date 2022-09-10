// Напиши фукцнию findLongestWord(string), которая принимает
// параметром произвольную строку(в строке будут только слова и пробелы)
//  и возвращает самое длинное слово в этой строке.

const findLongestWord = function (
  string: string,
) {
  const array: string[] = string.split(' ');
  let longest: string = array[0];
  for (let i = 0; i < array.length - 1; i++) {
    if (longest.length < array[i + 1].length) {
      longest = array[i + 1];
    }
  }
  return longest;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
export {};
