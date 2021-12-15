const endDate = document.querySelector('.end-time');
const timer = document.querySelectorAll('.date h1');
console.log(timer);

const saleDate = new Date(2021, 27, 03, 12, 00, 00);
// Get Year
const year = saleDate.getFullYear();
// Get Month
const month = saleDate.getMonth();
// Get Date
const date = saleDate.getDate();
// Get Day
const day = saleDate.getDay();
// Get Hour
const hour = saleDate.getHours();
// Get Minutes
const minutes = saleDate.getMinutes();


endDate.innerHTML = `End on ${day} ${year} ${month}, ${date}, ${hour}:${minutes} AM`;