// Get All Constants
const tabSection = document.querySelector(".tab-container");
const tabBtns = document.querySelectorAll(".btns");
const tabContents = document.querySelectorAll(".tab-data");

// Select Id on Click
tabSection.onclick = (e) => {
    const tabId = e.target.dataset.id;
    if (tabId) {
        tabBtns.forEach((tabBtn) => {
            tabBtn.classList.remove("active");
            e.target.classList.add("active");
        });
        const tabIds = document.getElementById(tabId);
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove("active");
            tabIds.classList.add("active");
        });

    }
}