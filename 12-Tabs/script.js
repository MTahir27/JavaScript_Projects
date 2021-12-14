// Get All Constants
const tabSection = document.querySelector(".tab-container");
const tabBtns = document.querySelectorAll(".btns");
const tabContents = document.querySelectorAll(".tab-data");

// Select Id on Click
tabSection.onclick = (e) => {
    const tabId = e.target.dataset.id;
    if (tabId) {
        // Add or Remove Active Class
        tabBtns.forEach((tabBtn) => {
            tabBtn.classList.remove("active");
            e.target.classList.add("active");
        });
        // Get Id of Click Button
        const tabIds = document.getElementById(tabId);
        // Remove Active Class & Add Active Class of Tab that id Match
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove("active");
            tabIds.classList.add("active");
        });

    }
}