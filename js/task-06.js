// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.


const inputEl = document.querySelector("#validation-input");

const validLengthEl = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", onEventValid);

function onEventValid(event) {
    if (event.target.value.length === validLengthEl) {
        eventUpdate("valid", "invalid");
    } else {
        eventUpdate("invalid", "valid");
    }
}

function eventUpdate(addCl, remCl) {
    inputEl.classList.remove(remCl);
    inputEl.classList.add(addCl);
}


