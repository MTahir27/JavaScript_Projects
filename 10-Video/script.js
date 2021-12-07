const video = document.querySelector('.video-section');
const videoBtn = document.querySelector('.video-btns');

videoBtn.onclick = function () {
    if (videoBtn.classList.contains('stop')) {
        videoBtn.classList.remove('stop');
        video.play();
    } else {
        videoBtn.classList.add("stop");
        video.pause();
    }
}