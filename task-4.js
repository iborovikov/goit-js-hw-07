const counterValue = document.querySelector('#value');
const btnPlusRef = document.querySelector('[data-action="increment"]');
const btnMinusRef = document.querySelector('[data-action="decrement"]');
const increment = () => {
 let total = Number(counterValue.textContent);
  total += 1;
  return counterValue.textContent = total
}
const decrement = () => {
  let total = Number(counterValue.textContent);
   total -= 1;
  return counterValue.textContent = total
}
btnPlusRef.addEventListener('click', increment);
btnMinusRef.addEventListener('click', decrement)
