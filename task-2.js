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


ingredients.map(ing => {
  const element = document.createElement('li')
  element.textContent = ing;
  elements.push(element)
})
ingredientsRef.append(...elements)
console.log(ingredientsRef)
