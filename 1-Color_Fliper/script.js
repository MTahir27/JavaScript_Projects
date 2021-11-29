const bgColor = ['red', 'green', 'blue', 'pink'];

const mainSection = document.getElementById('mainSection');

const colorName = document.getElementById('colorName');

const bgChangeBtn = document.getElementById('bgChangeBtn');
const color = document.getElementById('color');

bgChangeBtn.addEventListener("click", function () {
    totalColor = bgColor.length;
    const colorIndex = Math.floor(Math.random() * totalColor);

    mainSection.style.background = bgColor[colorIndex];
    color.innerText = bgColor[colorIndex];
});