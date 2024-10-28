// Створити массив
let array = new Array;
let arrC= [];

// Значення масива
let arrA = [
  "Oleksii",
  "Nikita",
];
// або
let arrB = ["Oleksii",  "Nikita", ];


// Методи масивів

// Метод push добавляє елемент в кінець масиву 
let arr = ["Oleksii",  "Nikita", ];
arr.push = "Kyrylo";
console.log(arr);

// Метод shift видаляє елемент на початку, так , що 2-ий елемент стає 1-ий
let arrShift = ["Oleksii",  "Nikita", ];
arrShift.shift();
console.log(arrShift);

// Метод pop видаляє останній елемент масиву
let arrPop = ["Oleksii",  "Nikita", ];
arrPop.pop();
console.log(arrPop);

// Метод unshift додає елемент на початок масиву
let arrUnshift = ["Oleksii",  "Nikita", ];
arrUnshift.unshift("Kyrylo");
console.log(arrUnshift);

// Метод splice. Дозволяє додати, видалити та замінити елементи.
// Синтаксис arr.splice(index[, deleteCount, elem1, ..., ElemN])

// Видаляєм елемент
let arrOne = ["Oleksii",  "Nikita", "Kyrylo" ];
// Починая з 1-ої позиції видаляєм один елемент
arrOne.splice(1, 1);
console.log(arrOne);
arrOne.splice(0, 1);
console.log(arrOne);

// Видаляємо елемент та додаєм в змінну
let arrTwo = ["Oleksii",  "Nikita", "Kyrylo" ];
let removed = arrTwo.splice(1, 1);
console.log(removed);

// Заміняємо елементи
let arrThree = ["Oleksii",  "Nikita", "Kyrylo" ];
// Починаючи з 0-ої ("Oleksii") позиції заміняємо один елемент
arrThree.splice(0, 1, "Alena");
console.log(arrThree);


// Додаєм елементи
let arrFour = ["Oleksii",  "Nikita", "Kyrylo" ];
// Починаючи з 1-ої (перед "Nikita") додаєм 2 елементи
arrFour.splice(1, 0, "Alena", "Love");
console.log(arrFour);

// Видаляєм елемент
let arrFive = ["Oleksii",  "Nikita", "Kyrylo" ];
// Починаючи з останньої позиції "Kyrylo" видаляєм елемент
arrFive.splice(-1, 1);
console.log(arrFive);

// Метод slice
// Створює новий масив, в який копіює частину або весь масив
// Синтаксис arr.slice([start], [end]) Не включая [end]

// Копіює частину масива
let arrOneSlice = ["Oleksii",  "Nikita", "Kyrylo" ];

// Починая з 1-ої позиції "Nikita" до 2-ої позиції "Kyrylo" (не вкл)
let arrTwoSlice = arrOneSlice.slice(1, 2);
console.log(arrTwoSlice);

// Починая з передостанньої позиції "Nikita" до останньої позиції "Kyrylo" (не вкл)
let arrThreeSlice = arrOneSlice.slice(-2, -1);
console.log(arrThreeSlice);

// Копіюємо весь масив
let arrFourSlice = arrOneSlice.slice();
console.log(arrFourSlice);


// Метод concat
// Створює новий масив в який копіює дані з інших масивів і доповнює значення вкінець масива
// Синтаксис arr.concat(arg1, arg2...)
let arrOneC = ["Oleksii",  "Nikita", "Kyrylo" ];
let arrTwoC = arrOneC.concat("Alena");
console.log(arrTwoC);


// Задача1
// Яке число (довжину) ми отримаєм?
let arrName = ["Oleksii",  "Nikita", "Kyrylo" ];
let newArrName = arrName;
arrName.push("Alena");
console.log(arrName.length);

// Задача2
// Створіть масив users з елементами "Oleksii" та "Nikita"
// Додати "Kyrylo" в кінець
// Замінити значення "Nikita" на "Niki"
// Код для пошуку значень повинен працювати для масивів з любою довжиною
// Видаліть перший елемент масива та покажіть його
// Додайте "Alena" та "Oleksii" на початок масива
let users = ["Oleksii",  "Nikita"];
console.log(users);

users.push("Kyrylo");
console.log(users);

users.splice(1, 1, "Niki");
console.log(users);

let deletedUser = users.shift(0);
console.log(deletedUser);
console.log(users);

users.unshift("Alena", "Oleksii");
console.log(users);
  // ['Alena', 'Oleksii', 'Niki', 'Kyrylo']

// Код для пошуку значень повинен працювати для масивів з любою довжиною
let hasNiki = users.includes("Niki");
console.log(hasNiki);

// Використовуємо indexOf для отримання індексу значення
let indexNiki = users.indexOf("Niki");
console.log(indexNiki); // Виведе індекс "Niki" 2 або -1, якщо значення немає

// Або знайдемо перший елемент, який відповідає певній умові
let foundUser = users.find(user => user === "Niki");
console.log(foundUser);  // "Niki" або undefined, якщо значення немає


// Задача 3
// Видалити елемент 'Kyrylo' та повернути його в змінну
let family = ['Alena', 'Oleksii', 'Niki', 'Kyrylo'];
let removedPerson = family.splice(3, 1);
console.log(removedPerson);

// Задача 4
// Зробити зі строки масив
let str = 'Alena, Oleksii, Niki, Kyrylo';
let strArray = str.split(", ");
console.log(strArray);

// Задача 5
// Чому дорівнює previousValue на початку роботи метода?
let arrNumbers = [9, 2, 8];
let reduceValue = arrTwo.reduce(function (previousValue, item, index, array) {
  console.log(previousValue);
  
})
