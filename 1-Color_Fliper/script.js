const bgColor = ['red', 'green', 'blue', 'pink'];

const mainSection = document.getElementById('mainSection');

const colorName = document.getElementById('colorName');

const bgChangeBtn = document.getElementById('bgChangeBtn');
const color = document.getElementById('color');

bgChangeBtn.addEventListener("click", function () {
    mainSection.style.background = bgColor[1];
    color.innerText = bgColor[1];
});