         
   function showFormData() {  // GetelemenByid berguna untuk mendeteksi kelas mana yang mempuyai id lalu di panggil 
      const name = document.getElementById('login-name').value;
      const nim = document.getElementById('login-nim').value;
      const jurusan = document.getElementById('login-jurusan').value;
      const email = document.getElementById('login-email').value;
      const phone = document.getElementById('login-phone').value;

      //Skrip kemudian melakukan validasi dengan memeriksa apakah ada yang kosong (!name berarti "jika nama kosong", dan seterusnya). 
      //Jika ada setidaknya satu kolom input yang kosong, muncul pemberitahuan menggunakan alert dan fungsi berhenti 
      //(return) sehingga bagian selanjutnya dari fungsi tidak dijalankan

      if (!name || !nim || !jurusan || !email || !phone) { 
         alert('Tolong masukan data diri anda.');
         return; // Stop execution if any field is empty
      }
      // Jika semua input sudah terisi, skrip akan membuat string formData yang berisi data-format yang akan ditampilkan dalam alert.
      const formData = `Nama: ${name}\nNIM: ${nim}\nJurusan: ${jurusan}\nEmail: ${email}\nNomor HP: ${phone}`;

      alert(formData); // Berduna untuk saat user sudah mengisi maka akan kembali ke menu utama menggunaan 
                       //  window.location.href = "../index.html";
      window.location.href = "../index.html";
   }





// let slideIndex = 1;

// function openModal() {
//     document.getElementById('myModal').style.display = 'block';
// }

// function closeModal() {
//     document.getElementById('myModal').style.display = 'none';
// }

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     const slides = document.getElementsByClassName('mySlides');
//     if (n > slides.length) {
//         slideIndex = 1;
//     }
//     if (n < 1) {
//         slideIndex = slides.length;
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = 'none';
//     }
//     slides[slideIndex - 1].style.display = 'block';
// }