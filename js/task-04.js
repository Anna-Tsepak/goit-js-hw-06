
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


const valueSummaryEl = document.querySelector("#value");

const btnMinusEl = document.querySelector('[data-action="decrement"]');
const btnPlusEl = document.querySelector('[data-action="increment"]');

let counterValue = 0

btnMinusEl.addEventListener('click', () => {
    counterValue -= 1;
    valueSummaryEl.textContent = counterValue;
})

btnPlusEl.addEventListener('click', () => {
    counterValue += 1;
    valueSummaryEl.textContent = counterValue;
})

// onSabjectEventIncreases

// onSabjectEventReduces