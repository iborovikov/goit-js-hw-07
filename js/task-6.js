const inpuRef = document.querySelector('#validation-input');
const validLengthRef = Number(inpuRef.getAttribute('data-length'));

inpuRef.addEventListener('blur', onBlur);

function onBlur(event) {
  const lengthOfInput = event.currentTarget.value.length;
  
  if (lengthOfInput === validLengthRef) {
    inpuRef.classList.remove('invalid');
    return inpuRef.classList.add('valid');
  }
  
  inpuRef.classList.remove('valid');
  inpuRef.classList.add('invalid');
}