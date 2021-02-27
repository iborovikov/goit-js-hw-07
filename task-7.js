
const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRef.addEventListener('input', onFontChange);

function onFontChange(event) {
  const fontSize = event.currentTarget.value
return textRef.style.fontSize = `${fontSize}px`
}
