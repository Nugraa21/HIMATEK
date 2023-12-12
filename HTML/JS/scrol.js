window.addEventListener('scroll', function () {
    var header = document.getElementById('navigasi');
    var scrollPosition = window.scrollY;
if (scrollPosition > 100) {
    header.style.backgroundColor = '#fd0000'; // sebelum
} else {
    header.style.backgroundColor = '#4c0000'; // sesudah 
}
});