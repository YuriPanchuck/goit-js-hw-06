const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsMarkUp = ingredients.map((element) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = element;
  itemRef.classList.add("item");
  return itemRef;
});

const listRef = document.querySelector("#ingredients");
listRef.append(...ingredientsMarkUp);








// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.