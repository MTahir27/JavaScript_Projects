const clientReviews = [{
        id: 1,
        name: "John Deo",
        job: "Front-end Web Developer",
        image: "images/Agent-1.png",
        message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque aliquam cumque corrupti beatae illum non quae fugiat facilis aut modi nihil, maiores inventore laborum perferendis distinctio.Nisi aliquid repudiandae iure!"
    },

    {
        id: 2,
        name: "Sabrina Green",
        job: "UI/UX designer",
        image: "images/Agent-2.png",
        message: "Lorem ipsum, beatae illum non quae fugiat facilis aut modi nihil, maiores inventore laborum perferendis distinctio.Nisi aliquid repudiandae dolor sit amet consectetur adipisicing elit. Eaque aliquam cumque corrupti iure!"
    },

    {
        id: 3,
        name: "Gwen Garza",
        job: "Baxk-end Web Developer",
        image: "images/Agent-3.png",
        message: "cumque corrupti beatae illum non quae fugiat facilis aut modi nihil, maiores inventore laborum perferendis Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque aliquam  distinctio.Nisi aliquid repudiandae iure!"
    },

    {
        id: 4,
        name: "Kristi Larson",
        job: "React Developer",
        image: "images/Agent-4.png",
        message: "Eaque aliquam cumque corrupti beatae illum non quae fugiat facilis aut modi nihil, maiores inventore laborum perferendis distinctio.Nisi aliquid repudiandae iure! Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },

    {
        id: 5,
        name: "Pauline Mckenzie",
        job: "Node JS Developer",
        image: "images/Agent-5.png",
        message: " nihil, maiores inventore laborum perferendis distinctio.Nisi aliquid repudiandae iure! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque aliquam cumque corrupti beatae illum non quae fugiat facilis aut modi"
    },

    {
        id: 6,
        name: "Genevieve Edwards",
        job: "Graphic Designer",
        image: "images/Agent-6.png",
        message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque aliquam cumque corrupti beatae.Nisi aliquid repudiandae iure! illum non quae fugiat facilis aut modi nihil, maiores inventore laborum perferendis distinctio"
    },
];

// Get Element
const reviewImg = document.getElementById('reviewImg');
const reviewName = document.getElementById('name');
const reviewJob = document.getElementById('job');
const reviewMessage = document.getElementById('message');

let currentItem = 1;
// Load Context in Review Div
window.addEventListener("DOMContentLoaded", function () {
    showReview(currentItem);
});

// Store Next Text in Review Div
function showReview(reviewShow) {
    const review = clientReviews[reviewShow];
    reviewImg.src = review.image;
    reviewName.textContent = review.name;
    reviewJob.textContent = review.job;
    reviewMessage.textContent = review.message;
}

// Get Next & Prev Button
const btnGroup = document.querySelectorAll('.btn');
btnGroup.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        // Get All Classes of Click Item
        const btnClick = e.currentTarget.classList;
        // Check If button is Prev-btn
        if (btnClick.contains('prev-btn')) {
            currentItem--;
            // Check If Array Item or Client Review Index less than 0
            if (currentItem < 0) {
                currentItem = clientReviews.length - 1;
            }
            showReview(currentItem);
        }
        // Check if Button is Next Btn
        if (btnClick.contains('next-btn')) {
            currentItem++;
            // Check Condition If Current Item is Greater than Array Item or Client Review
            if (currentItem > clientReviews.length - 1) {
                currentItem = 0;
            }
            showReview(currentItem);
        }
    });

});
// Select Button
const randomBtn = document.getElementById('randomBtn');
randomBtn.onclick = function () {
    // Generate Ramdom index to current Item in between Reviews Length
    currentItem = Math.floor(Math.random() * clientReviews.length);
    showReview(currentItem);
}
// Index of Review Store