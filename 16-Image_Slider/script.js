const slides = document.querySelectorAll('.slide');
console.log(slides);
const prevbtn = document.querySelector(".prevBtn");
const nextbtn = document.querySelector(".nextBtn");

// Functionality Btn
const defaultBtn = document.querySelector(".default");
const loop = document.querySelector(".loop");
const scrollTypes = document.querySelectorAll(".scrollType");

// Active Btn

defaultBtn.addEventListener("click", () => {
    scrollTypes.forEach((scrollType) => {
        scrollType.classList.remove("active");
    });
    defaultBtn.classList.add("active");
})

loop.addEventListener("click", () => {
    scrollTypes.forEach((scrollType) => {
        scrollType.classList.remove("active");
    });
    loop.classList.add("active");
})


slides.forEach((slide, index) => {
    slide.style.left = `${index*100}%`;
});

// Slide Behaviour
let behaviour = 0;
defaultBtn.onclick = () => {
    behaviour = 0;
}
loop.onclick = () => {
    behaviour = 1;
}
let count = 0;
nextbtn.onclick = () => {
    // Check Behavour isDefault or Loop
    if (behaviour == 0) {
        if (count < slides.length - 1) {
            count++;
        }
    } else {
        if (count < slides.length - 1) {
            count++;
        } else {
            count = 0;
        }
    }
    move();
}
prevbtn.onclick = () => {
    // Check Behavour isDefault or Loop
    if (behaviour == 0) {
        if (count > 0) {
            count--;
            console.log(behaviour);
        }
    } else {
        if (count > 0) {
            count--;
            console.log(behaviour);
        } else {
            count = slides.length - 1;
        }
    }
    move();
}

const move = () => {
    slides.forEach((slide, index) => {
        slide.style.transform = `translate(-${count*100}%)`;
    });
}