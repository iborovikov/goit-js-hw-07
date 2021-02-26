const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients')
const elements = document.createElement('ul')


ingredients.map(ing => {
  const element = document.createElement('li')
  element.textContent = ing;
  elements.appendChild(element)
})
ingredientsRef.appendChild(elements)
console.log(ingredientsRef)
