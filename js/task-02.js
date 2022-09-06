const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector("#ingredients");
const newList = []
ingredients.forEach(ingridient => {
  const ingredientsList = document.createElement("li");
  ingredientsList.className = 'item';
  ingredientsList.textContent = ingridient;
  newList.push(ingredientsList);
}
  )
ulEl.append(...newList)

console.log (...newList)


// const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');
// ulEl.innerHTML = list;



