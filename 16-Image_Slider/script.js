const slides = document.querySelectorAll('.slide');
console.log(slides);
const prevbtn = document.querySelector(".prevBtn");
const nextbtn = document.querySelector(".nextBtn");

// Functionality Btn
const defaultBtn = document.querySelector(".default");
const loop = document.querySelector(".loop");


slides.forEach((slide, index) => {
    slide.style.left = `${index*100}%`;
});

// Slide Behaviour
let behaviour = 0;
defaultBtn.onclick = () => {
    behaviour = 0;
    console.log(behaviour);
}
loop.onclick = () => {
    behaviour = 1;
    console.log(behaviour);
}
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