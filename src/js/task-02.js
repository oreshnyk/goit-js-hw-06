const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
  'test'
];


const elements = ingredients.map( (ingredient) => {
  const element = document.createElement("li");
  element.innerText = ingredient;
  element.classList.add("item");
  return element;
});

const list = document.getElementById("ingredients");
list.append(...elements);
