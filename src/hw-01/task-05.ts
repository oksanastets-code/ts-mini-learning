// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

console.log('Task 5');

let country: string | null = prompt(
  'До якої країни доставка?',
);
if (!country) {
    console.log('Відміна!');
} else {
    country = country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();
    console.log(country);
}

let message: string;
let price: number;

switch (country) {
  case 'Китай':
    price = 100;
    break;
  case 'Чілі':
    price = 250;
    break;
  case 'Австралія':
    price = 170;
    break;
  case 'Індія':
    price = 80;
    break;
  case 'Ямайка':
    price = 120;
    break;

  default:
    price = 0;
    break;
}
if (!price) {
  message = 'До такої країни доставки немає';
} else
  message = `Доставка в ${country} буде коштувати ${price} грошей.`;
alert(message);
console.log(message);

export {};
