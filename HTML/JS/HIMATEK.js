
// Toggle class active untuk hamburger menu
// const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
// document.querySelector('#hamburger-menu').onclick = () => {
//   navbarNav.classList.toggle('active');
// };


function showOptions() {
  var optionsDiv = document.getElementById("options");

  if (optionsDiv.style.display === "none") 
  {
    optionsDiv.style.display = "block";
  } 
  else 
  {
    optionsDiv.style.display = "none";
  }
}
function showOptionss() {
  var optionsDiv = document.getElementById("contak");

  if (optionsDiv.style.display === "none") 
  {
    optionsDiv.style.display = "block";
  } 
  else 
  {
    optionsDiv.style.display = "none";
  }
}

// yang mau di kick di beri ini    onclick="showOptions()



//======================= Clas aktif pada program ===========================


// Toggle class active untuk search form
// const searchForm = document.querySelector('.search-form');
// const searchBox = document.querySelector('#search-box');

// document.querySelector('#search-button').onclick = (e) => {
//   searchForm.classList.toggle('active');
//   searchBox.focus();
//   e.preventDefault();
// };

// Toggle class active untuk shopping cart
// const shoppingCart = document.querySelector('.shopping-cart');
// document.querySelector('#shopping-cart-button').onclick = (e) => {
//   shoppingCart.classList.toggle('active');
//   e.preventDefault();
// };

// Klik di luar elemen
// const hm = document.querySelector('#hamburger-menu');
// const sb = document.querySelector('#search-button');
// const sc = document.querySelector('#shopping-cart-button');

// document.addEventListener('click', function (e) {
//   if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
//     navbarNav.classList.remove('active');
//   }

//   if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
//     searchForm.classList.remove('active');
//   }

//   if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
//     shoppingCart.classList.remove('active');
//   }
// });

// Modal Box
// const itemDetailModal = document.querySelector('#item-detail-modal');
// const itemDetailButtons = document.querySelectorAll('.item-detail-button');

// itemDetailButtons.forEach((btn) => {
//   btn.onclick = (e) => {
//     itemDetailModal.style.display = 'flex';
//     e.preventDefault();
//   };
// });

// klik tombol close modal
// document.querySelector('.modal .close-icon').onclick = (e) => {
//   itemDetailModal.style.display = 'none';
//   e.preventDefault();
// };

// klik di luar modal
// window.onclick = (e) => {
//   if (e.target === itemDetailModal) {
//     itemDetailModal.style.display = 'none';
//   }
// };




// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
// if (prevScrollpos > currentScrollPos) {
// document.getElementById("demo1Navbar").style.top = "0";
// } else {
// document.getElementById("demo1Navbar").style.top = "-50px";
// }
// prevScrollpos = currentScrollPos;
// }







