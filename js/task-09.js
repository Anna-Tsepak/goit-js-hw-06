// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnColorEl = document.querySelector(".change-color");

const spanColorEl = document.querySelector(".color");

const bodyEl = document.querySelector("body")




btnColorEl.addEventListener('click', onChangedColor);
   
function onChangedColor(event) {
    let color = getRandomHexColor();
    bodyEl.style.backgroundColor = color;
    spanColorEl.textContent = color;
  }
