const visIcon=document.querySelectorAll('.fas.fa-eye');
const inputs=document.querySelectorAll('.password');
let isvisible=false;
visIcon.forEach((icon)=>{
    const ic=icon.closest('.input-container')
    const inpicon=ic.children[0]
    icon.addEventListener('click',()=>{
        if(icon.className=='fas fa-eye')
        {
        icon.classList.replace('fa-eye','fa-eye-slash');
        inpicon.type='text'
        }
        else{
            icon.classList.replace('fa-eye-slash','fa-eye')
            inpicon.type='password'
        }
        
     })

})


   