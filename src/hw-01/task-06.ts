// Напиши скрипт который просит посетителя ввести число
// в prompt до тех пор, пока посетитель на нажмет Cancel
// и каждый раз добавляет введенное значение к общей сумме.

// При загрузке страницы пользователю предлагается в prompt
// ввести число.Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока
//  пользователь не нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку
// Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число,
//  а не произвольный набор символов, не нужно.Если хочешь,
//  в случае некорректного ввода, показывай alert с текстом
// 'Было введено не число, попробуйте еще раз', при этом
// результат prompt плюсовать к общей сумме не нужно,
//  после чего снова пользователю предлагается ввести число в prompt.

console.log('Task 6');
let input: number | null;
let total: number = 0;

do {
  input = Number(prompt('Доданок:'));
  console.log('input', input, typeof input);
  if (isNaN(input)) {
    alert('Це було не число!');
    input = Number(prompt('Доданок:'));
  }
  total = total + input;
  console.log('total', total, typeof total);
} while (input);
alert(`Загальна сума чисел рівна ${total}`);
console.log('end total', total);
export {};
