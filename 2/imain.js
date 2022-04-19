
function validE() {
   const emailReg = /([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})/gi
   let testMail = document.getElementById('email').value;
   let errorMail = document.querySelector('.error__email');
   let validMail = emailReg.test(testMail);
   if (!validMail) {
      errorMail.classList.remove('hidden')
    } else { 
       return;
   }
}

function validP() {
   const phoneReg =  /^\d[\d\(\)\ -]{4,14}\d$/
   let testPhone = document.getElementById('phone').value;
   let errorPhone = document.querySelector('.error__phone');
   let validPhone = phoneReg.test(testPhone);
   if (!validPhone) {
      errorPhone.classList.remove('hidden')
   } else { 
      return;
   }
}
