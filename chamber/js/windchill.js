fetch('https://api.openweathermap.org/data/2.5/weather?lat=33&lon=-96&units=imperial&appid=758fa07509c554ccd9c538beeb26a583')
.then(response => response.json())
.then(data => {
    
    const temp = data.main.temp;
    const wSpeed = data.wind.speed;
    const wDescript = data.weather[0].description;
    const wChill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + 
        (0.4275*temp*Math.pow(wSpeed,0.16)));
    console.log(wChill, temp, wSpeed, wDescript);
    let displayChill = document.querySelector('.wind-chill');
    if (temp <= 50 && wSpeed > 3)
    { displayChill.textContent = "Wind Chill: " + wChill + "mph"; }
    else
    { displayChill.textContent = "Wind Chill: N/A";  }
});