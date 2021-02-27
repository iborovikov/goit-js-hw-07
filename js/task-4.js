const counterValue = document.querySelector('#value');
const btnPlusRef = document.querySelector('[data-action="increment"]');
const btnMinusRef = document.querySelector('[data-action="decrement"]');

btnPlusRef.addEventListener('click', onClickIncrement);
btnMinusRef.addEventListener('click', onClickDecrement);

function onClickIncrement() {
  let total = Number(counterValue.textContent);
  total += 1;
  return counterValue.textContent = total;
};

function onClickDecrement() {
  let total = Number(counterValue.textContent);
  total -= 1;
  return counterValue.textContent = total;
};

