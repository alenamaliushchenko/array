// Мінімум

// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
let shoppingList = [
  {
    name: "banana",
    quantity: 20,
    buy: true,
    pricePerProduct: 30,
    sum: 600,
  },
  {
    name: "apple",
    quantity: 15,
    buy: false,
    pricePerProduct: 25,
    sum: 375,
  },
  {
    name: "orange",
    quantity: 10,
    buy: true,
    pricePerProduct: 40,
    sum: 400,
  },
]

console.log(shoppingList);

// Функції
// // Змінити ціну продукту:
function updatePrice(productName, newPrice) {
  const product = shoppingList.find(item => item.name === productName);
  product ? (product.pricePerProduct = newPrice, product.sum = product.quantity * newPrice, console.log(`${productName} ціна змінена на ${newPrice}.`)) : console.log(`${productName} не знайдено у списку`);
}
updatePrice("banana", 35);


// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
let productNotBought = shoppingList.filter(item => !item.buy);
let productBought = shoppingList.filter(item => item.buy);

let sortedShoppingList = productNotBought.concat(productBought);
shoppingList.forEach(item => {
  console.log(`Продукт: ${item.name}, Кількість: ${item.quantity}, Ціна: ${item.pricePerProduct}, Сума: ${item.sum}`);
  
})
console.log(sortedShoppingList);


// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
function purchaseProduct (productName) {
  const productItem = shoppingList.find(item => item.name === productName);

  if (product) {
    if(!product.buy) {
      product.buy === true;
      console.log(`${productName} відзначено як куплений.`);
    } else {
      console.log(`${productName} вже куплений.`);
    }
  } else {
    console.log(`${productName} не знайдено в списку.`);
  }
}


// Норма

// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
function removeProduct(productName) {
  const updateShoppingList = shoppingList.filter (item => item.name !== productName);
 return updateShoppingList;
}
const newShoppingList = removeProduct("banana");
console.log(newShoppingList);


// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
function addProduct(productName, quantity, pricePerProduct) {
   // Знайдемо продукт у списку
  let existingProduct = shoppingList.find(item => item.name === productName);
  
  if(existingProduct){
 // Якщо продукт вже існує, збільшимо кількість та оновимо суму
 existingProduct.quantity += quantity;// Збільшуємо кількість
 existingProduct.pricePerProduct = pricePerProduct;  // Оновлюємо ціну за одиницю
 existingProduct.sum = existingProduct.quantity * existingProduct.pricePerProduct;
 console.log(`${productName} -оновлений, кількість - ${existingProduct.quantity}, Сума - ${existingProduct.sum}.`);
} else {
   // Якщо продукт не існує, додаємо новий
   const newProduct = 
    {
      name: productName,
      quantity: quantity,
      buy: false,
      pricePerProduct: pricePerProduct,
      sum: quantity * pricePerProduct,
    }
  shoppingList.push(newProduct);
  console.log(`${productName} доданий: Кількість - ${newProduct.quantity}, Сума - ${newProduct.sum}`);
}
}


// Максимум

// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
let totalSum = shoppingList
.reduce((acc, item) => acc + item.sum, 0);
console.log(`Сума всіх продуктів ${totalSum}`);




// Підрахунок суми всіх (не) придбаних продуктів.
// Підрахунок суми придбаних продуктів
let totalBuySum = shoppingList
.filter(item => item.buy) // Відбираємо лише придбані продукти
.reduce((acc, item) => acc + item.sum, 0) // Підсумовуємо значення sum
console.log(`Сума придбаних продуктів: ${totalBuySum}`);

// Підрахунок суми не придбаних продуктів
let totalNotBuySum = shoppingList
.filter(item => !item.buy) // Відбираємо лише не придбані продукти
.reduce((acc, item) => acc + item.sum, 0)// Підсумовуємо значення sum
console.log(`Сума не придбаних продуктів: ${totalNotBuySum}`);



// Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)

function sortProductBySum (products, ascending = true) {
  return products.sort((a, b) => {
    if(ascending) {
      return a.sum - b.sum;// Від меншого до більшого
    } else {
      return b.sum - a.sum; // Від більшого до меншого
    }
  })
}
// Сортування від меншого до більшого
const sortedAscending = sortProductBySum(shoppingList);
console.log("Сортування від меншого до більшого:", sortedAscending);

// Сортування від більшого до меншого
const sortedDescending = sortProductBySum(shoppingList, false);
console.log("Сортування від більшого до меншого:", sortedDescending);