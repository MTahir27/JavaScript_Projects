// Get Current Year
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// Hide & Show Navbar
const toggleBtn = document.querySelector('.toggle-btn');
const collaspe = document.querySelector('.collapse');
const navbarNav = document.querySelector('.navbar-nav');

// Onresize Check Height
window.onresize = () => {
    width = window.innerWidth;
    if (width < 775.98) {
        collaspe.style.height = `0px`;
    }
}

toggleBtn.onclick = function () {
    const collaspeHeight = collaspe.getBoundingClientRect().height;
    const navbarHeight = navbarNav.getBoundingClientRect().height;
    if (collaspeHeight === 0) {
        collaspe.style.height = `${navbarHeight}px`;
    } else {
        collaspe.style.height = `0px`;
    }
};