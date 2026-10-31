'use strict';

// У task-3.js оголоси функцію filterArray(numbers, value). Вона має повернути новий масив лише з тими числами, які більші за value.

// Створи всередині функції порожній масив для результату.
// Перебери всі елементи numbers циклом for або for...of.
// Для кожного числа перевір умову: воно має бути строго більшим за value.
// Якщо умова виконується, додай число до нового масиву методом push().
// Після завершення циклу поверни новий масив.
// Додай п’ять викликів console.log з ТЗ і залиш їх для ментора.

// Числа, які дорівнюють value, не потрапляють до результату.

function filterArray(numbers, value) {
  const result = [];
  for (const number of numbers) {
    if (number > value) {
      result.push(number);
    }
  }
  return result;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
