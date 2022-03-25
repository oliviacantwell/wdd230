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


