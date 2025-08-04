let nav = document.querySelector('nav');
let navLink = document.querySelectorAll('nav ul li a');
// console.log(navLink);

// 偵測頁面捲動時
window.addEventListener('scroll', () => {
    // console.log(window.pageYOffset);
    if (window.pageYOffset != 0) {
        // nav.style.color="#fff"; 這樣無法直接改變menu字的顏色，因為層級不對，menu字樣都是超連結
        nav.style.backgroundColor = "rgba(0,0,0,.7)";
        navLink.forEach(a => {
            a.style.color = "#fff";
        });
    } else {
        nav.style.backgroundColor = "ccc";
        navLink.forEach(a => {
            a.style.color = "333";
        });
    }
})