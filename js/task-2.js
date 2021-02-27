const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');
const elements = [];


ingredients.map(ingredient => {
  const element = document.createElement('li')
  element.textContent = ingredient;
  elements.push(element)
})
ingredientsRef.append(...elements)
console.log(ingredientsRef)
