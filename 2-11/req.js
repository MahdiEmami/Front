const reqinputs = document.querySelectorAll('input[required]');
const requiredText="*";
reqinputs.forEach(n=>{
const label=n.closest('.input-container').previousElementSibling;
label.innerHTML=requiredText+label.innerHTML;
})