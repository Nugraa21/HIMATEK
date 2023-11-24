const showHiddenPass = (loginPass, loginEye) =>{
    const input = document.getElementById(loginPass),
          iconEye = document.getElementById(loginEye)
 
    iconEye.addEventListener('click', () =>{
       if(input.type === 'password'){
          input.type = 'text'
 
          iconEye.classList.add('ri-eye-line')
          iconEye.classList.remove('ri-eye-off-line')
       } else{
          input.type = 'password'
 
          iconEye.classList.remove('ri-eye-line')
          iconEye.classList.add('ri-eye-off-line')
       }
    })
 }
 
 showHiddenPass('login-pass','login-eye')

 function validateForm() {
   var username = document.getElementById('login-username').value;
   var password = document.getElementById('login-pass').value;
   if (
    username && password 
    ) 
    {
      alert('Klick ( OK ) untuk menuju halaman selanjutnya');
      window.location.href = "HTML/HIMATEK.html";

      setTimeout(function() {
         window.location.href = "HTML/HIMATEK.html";
      }, 0);

   } else {
      alert('Maaf anda tidak di kenal');
   }
    return false;
}