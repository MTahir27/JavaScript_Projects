const slides = document.querySelectorAll('.slide');
console.log(slides);
const prevbtn = document.querySelector(".prevBtn");
const nextbtn = document.querySelector(".nextBtn");

slides.forEach((slide, index) => {
    slide.style.left = `${index*100}%`;
});
let count = 0;
nextbtn.onclick = () => {
    if (count < slides.length - 1) {
        count++;
    }
    move();
}
prevbtn.onclick = () => {
    if (count > 0) {
        count--;
    }
    move();
}

const move = () => {
    slides.forEach((slide, index) => {
        slide.style.transform = `translate(-${count*100}%)`;
    });
}