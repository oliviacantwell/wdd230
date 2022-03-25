const hambutton = document.querySelector('.hamburger');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

//Date

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const monthDay = date.getDate();
const weekDay = date.getDay();
const lastModified = document.lastModified;


let dateElement = document.querySelector(".top-date");

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

dateElement.innerHTML = daysOfWeek[weekDay] + ', ' +  monthDay + ' ' + months[month] + ' ' + year;

let bottomDate = document.querySelector(".bottom-change");
bottomDate.textContent =  "©" + year + " Frisco Chamber";

let modified = document.querySelector(".modified");
modified.textContent = "Last modified: " + lastModified;

// Let message appear only on Tuesdays and Wednesdays
const msgBox = document.querySelector('.msg-box');
if (weekDay == 2 || weekDay == 3) {
    
    msgBox.style.display = 'block';
}
else {

    msgBox.style.display = 'none';
}

// Wind Chill
const wChill = Math.round((35.74 + (0.6215 * tempF))-(35.75 * Math.pow(wSpeed,0.16)) + 
      (0.4275*tempF*Math.pow(wSpeed,0.16)));

