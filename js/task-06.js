const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", inputBlur);

function inputBlur(event) {
  if (
    event.currentTarget.value.length ===
    Number(inputRef.getAttribute("data-length"))
  ) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
    return;
  }
  inputRef.classList.add("invalid");
}




// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
// перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість смиволів повинна бути в інпуті, зазначається в його 
// атрибуті data - length.
// Якщо введена правильна кількість символів, то border інпуту стає 
// зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, 
// які ми вже додали у вихідні файли завдання.