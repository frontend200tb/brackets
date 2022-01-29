module.exports = function check(str, bracketsConfig) {

  console.log('str', str); // Просмотр входящей строки со скобками
  console.log('bracketsConfig', bracketsConfig); // Просмотре входящего массива пар скобок в массивах

  let br = bracketsConfig.flat(); // Из входного массива массивов делаем простой массив

  console.log('bracketsConfig flat', br); // Смотрим его
  console.log();

  // Создание объекта для хранения пар скобок
  const pairBrackets = {}; // Объект для хранения пар скобок в формате ключ - закрывающая скобка, значение - открывающая скобка

  for (let i = 0; i < br.length; i += 2) {
    pairBrackets[br[i + 1]] = br[i]; // Заполняем объект значениями
  }

  // Создадим массив для хранения открывающих скобок
  const openBrackets = Object.values(pairBrackets); // Значения возьмем из значений объекта пар скобок

  console.log('pairBrackets', pairBrackets);
  console.log('openBrackets', openBrackets);
  console.log();

  let stack = []; // Стек для открывающих скобок из входящей строки
  let topElement; // Верхний элемент стека

  for (let i = 0; i < str.length; i++) { // Перебираем входную строку по одному символу
    let currentSymbol = str[i];
    console.log();
    console.log('текущий символ', currentSymbol);
    console.log('номер символа', i);

    if (openBrackets.includes(currentSymbol)) { //Если пришла открывающая скобка
      console.log('пришла открывающая скобка', currentSymbol);


      // Блок проверки одинаковых скобок открывающая = закрывающая
      if (pairBrackets[currentSymbol] === currentSymbol) { // Если открывающая скобка такая же как и закрывающая
        console.log('пришла скобка ||');
        topElement = stack[stack.length - 1];
        if (pairBrackets[currentSymbol] === topElement) { // Если закрывающая скобка такая же как в стеке
          console.log('скобка || уже есть в стеке');
          stack.pop(); // Извлечь ее из стека
          console.log('достаем скобку из стека', stack);
        } else {        // Иначе если в стеке не такая скобка как открывающая равная закрывающей
          console.log('такой скобки нет в стеке');
          stack.push(currentSymbol); // Положить ее в стек
          console.log('открывающую скобку положили в стек', stack);
        }
      


      } else { // Если открывающая скобка не такая же как и закрывающая
        stack.push(currentSymbol); // Положить ее в стек
        console.log('открывающую скобку положили в стек', stack);
      }

    } else { // Иначе если пришла не открывающая скобка
      console.log('пришла закрывающая скобка');
      if (stack.length === 0) { // Проверить если стек равен нулю
        console.log('result false стек равен нулю');
        return false; // Вернуть false
      }

      topElement = stack[stack.length - 1];

      if (pairBrackets[currentSymbol] === topElement) {
        stack.pop();
        console.log('достаем скобку из стека', stack);
      } else {
        console.log('result false закрывающая не равна открывающей');
        return false;
      }
    }
  }

  console.log('stack.length', stack.length)
  return stack.length === 0;
}
// Я два дня решал эту задачу!!! Пока не покрыл все консоль логами и не отловил все ошибки