const inpuRef = document.querySelector('#validation-input');
const validLengthRef = inpuRef.getAttribute('data-length');

inpuRef.addEventListener('blur', onBlur);
function onBlur(event) {
  if (event.currentTarget.value.length <= validLengthRef) {
    inpuRef.classList.remove('invalid')
   return inpuRef.classList.add('valid') 
  } 
    inpuRef.classList.remove('valid')
   return inpuRef.classList.add('invalid')
  
}
