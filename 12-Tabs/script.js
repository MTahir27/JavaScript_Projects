// Get All Constants
const tabSection = document.querySelector(".tab-container");
const tabBtns = document.querySelectorAll(".btns");
const tabContent = document.querySelectorAll(".tab-data");

// Select Id on Click
tabSection.onclick = (e) => {
    const tabId = e.target.dataset.id;
    if (tabId) {
        tabBtns.forEach((tabBtn) => {
            tabBtn.classList.remove("active");
            e.target.classList.add("active");
        });
    }
}