const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

const dayName = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
];
const endDate = document.querySelector('.end-time');
const timer = document.querySelectorAll('.date h1');
console.log(timer);

const saleDate = new Date(2021, 11, 16, 12, 00);
// Get Year
const year = saleDate.getFullYear();
// Get Month
const month = months[saleDate.getMonth()];
// Get Date
let date = saleDate.getDate();
if (date <= 9) {
    date = "0" + date;
}
// Get Day
const day = dayName[saleDate.getDay()];
// Get Hour
const hour = saleDate.getHours();
// Get Minutes
let minute = saleDate.getMinutes();
if (minute <= 9) {
    minute = "0" + minute;
}


endDate.innerHTML = `End on ${day} ${date} ${month} ${year} , ${hour}:${minute} AM`;


// Miliseconds in one day & hour & minute & seconds
const oneSecond = 1000;
const oneMinute = 60 * oneSecond;
const oneHour = 60 * oneMinute;
const oneDay = 24 * oneHour;

// Remaining Time
const endTime = saleDate.getTime();
const calculateTime = () => {
    const currentTime = new Date().getTime();
    let remainingTime = endTime - currentTime;

    // Calculate Remaining Time

    // Calculate day
    const days = Math.floor(remainingTime / oneDay);
    const dayText = document.querySelector(".day").innerHTML = days;
    // Claculate Hours
    const hours = Math.floor((remainingTime % oneDay) / oneHour);
    const hourText = document.querySelector(".hour").innerHTML = hours;
    // Calculate Minutes
    const minutes = Math.floor((remainingTime % oneHour) / oneMinute);
    const minuteText = document.querySelector(".minute").innerHTML = minutes;
    // Calculate Seconds
    const seconds = Math.floor((remainingTime % oneMinute) / oneSecond);
    const secondText = document.querySelector(".second").innerHTML = seconds;
}
calculateTime();