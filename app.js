function searchWeather(){
    const searchCity = document.getElementById("search-city").value;
    getWeatherData(searchCity); 
}

const apiKey = '41dcc8a8076d78b024e42e23fa87f206';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const getWeatherData = city => {
    const url = `${apiUrl}?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => updateUI(data))
}

const updateUI = data =>{
    document.getElementById('show-city').innerHTML = data.name || "Unknown Location!";
    document.getElementById('show-temperature').innerText=data.main.temp;
    document.getElementById('weather-status').innerText=data.weather[0].main;
    document.getElementById('weather-icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById("search-city").value='';
}
getWeatherData('Dhaka');//default call