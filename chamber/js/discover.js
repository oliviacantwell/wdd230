// Lazy loading
const images = document.querySelectorAll('[data-src]');
const options = { threshold: [.5] };
function preloadImage(img) { 
    const source = img.getAttribute('data-src'); 
    img.src = source; 
} 
const io = new IntersectionObserver( (entries, io) => {
     entries.forEach(entry => {
        if(!entry.isIntersecting){ 
            return; 
        } 
        else { 
            preloadImage(entry.target); //call a function send in the image that is currently intersecting 
            io.unobserve(entry.target); 
        } 
    }); 
}, options); 
images.forEach(images => { io.observe(images); });


let d = Date();
let y = date.getFullYear();
let m = date.getMonth();
let mDay = date.getDate();

let lastYear = localStorage.getItem('lastYear');
if (lastYear == null) {lastYear = y}
let lastMonth = localStorage.getItem('lastMonth');
if (lastMonth == null) {lastMonth = m}
let lastDay = localStorage.getItem('lastDay');
if (lastDay == null) {lastDay = mDay;}

let currentSec = Date.UTC(y, m, mDay);
let lastSec = Date.UTC(lastYear, lastMonth, lastDay);

let timePassed = (currentSec - lastSec) / (1000 * 60 * 60 * 24);


localStorage.setItem('lastYear', y.toString());
localStorage.setItem('lastMonth', m.toString());
localStorage.setItem('lastDay', mDay.toString());

let visited = document.querySelector('.last-visit');
visited.textContent = 'Days since last visit: ' + timePassed;


// get the current dates
// convert current date to seconds
//get the stored dates
//convert past dates to seconds
//get difference
//store the current date