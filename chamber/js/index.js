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
fetch('https://api.openweathermap.org/data/2.5/weather?lat=33&lon=-96&units=imperial&appid=758fa07509c554ccd9c538beeb26a583')
.then(response => response.json())
.then(data => {
    
    const temp = Math.round(data.main.temp);
    const wSpeed = Math.round(data.wind.speed);
    const wDescript = data.weather[0].description;
    const wChill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + 
        (0.4275*temp*Math.pow(wSpeed,0.16)));
    console.log(wChill, temp, wSpeed, wDescript);
    
    let displayTemp = document.querySelector('.temp');
    displayTemp.textContent = temp + '\xB0F';
    
    let displayDesc = document.querySelector('.weather-desc');
    displayDesc.textContent = wDescript.toUpperCase();
    
    let displayWSpeed = document.querySelector('.wind-speed');
    displayWSpeed.textContent = "Wind Speed: " + wSpeed + " mph";
    
    const icon = data.weather[0].icon;

    (async () => {
        let weatherIcon = document.querySelector('.weather-icon');
        const imageUrl = 'https://openweathermap.org/img/wn/' + icon + '@2x.png';
        const response = await fetch(imageUrl);
        const imageBlob = await response.blob();
        const reader = new FileReader();
        reader.readAsDataURL(imageBlob);
        reader.onloadend = () => {
          const base64data = reader.result;
          weatherIcon.src = base64data;
        };
      })();
});

function thanksPage() {
    window.location.href="https://oliviacantwell.github.io/wdd230/chamber/thankyou.html";
}



