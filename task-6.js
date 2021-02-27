const inpuRef = document.querySelector('#validation-input');
const validLengthRef = inpuRef.getAttribute('data-length');

inpuRef.addEventListener('blur', onBlur);
function onBlur(event) {
  const lengthOfInput = event.currentTarget.value.length;
  if (lengthOfInput <= validLengthRef && lengthOfInput > 0) {
    inpuRef.classList.remove('invalid')
   return inpuRef.classList.add('valid') 
  } else if (lengthOfInput === 0) {
    inpuRef.classList.remove('invalid')
     return inpuRef.classList.remove('valid') 
  }
   return inpuRef.classList.add('invalid')
  
}
