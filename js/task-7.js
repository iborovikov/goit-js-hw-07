const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRef.addEventListener('input', onInputFontChange);

function onInputFontChange(event) {
  const fontSize = event.currentTarget.value;
  
  return textRef.style.fontSize = `${fontSize}px`;
}
