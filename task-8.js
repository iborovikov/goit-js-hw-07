const boxesRef = document.querySelector('#boxes');
const controlsRef = document.querySelector('#controls');
const renderRef = document.querySelector('[data-action="render"]');
const destroyRef = document.querySelector('[data-action="destroy"]');
const inputRef = document.querySelector('input')

renderRef.addEventListener('click', createBoxes);
destroyRef.addEventListener('click', destroyBoxes);


function createBoxes(amount) {
  amount = inputRef.value
  const elements = [];
  for (let i = 1; i <= amount; i++) {
    const box = document.createElement('div');
    const elementSize = i * 10 + 20;
    const elementColor = () => {
      const r = Math.floor(Math.random() * (256));
      const g = Math.floor(Math.random() * (256));
      const b = Math.floor(Math.random() * (256));
      return '#' + r.toString(16) + g.toString(16) + b.toString(16);
    }
    box.style.backgroundColor = elementColor();
    box.style.width = `${elementSize}px`
    box.style.height = `${elementSize}px`
    elements.push(box);
  }
  boxesRef.innerHTML = '';
  return boxesRef.append(...elements)
};

function destroyBoxes() {
  boxesRef.innerHTML = '';
};

