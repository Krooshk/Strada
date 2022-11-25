import { INPUT, tabNow, locations, tabDetails, tabItem3 } from '/Strada/weather/view.js';


let favoriteCities = new Set(JSON.parse(localStorage.getItem("favoriteCities")));
const currentCity = localStorage.getItem("currentCity") || "Moscow";

const apiKey = "111836d36d452866f627599b193d2401";
const serverUrl = "https://api.openweathermap.org/data/2.5/weather";
const serverUrlGeo = "https://api.openweathermap.org/geo/1.0/direct"
const serverUrlForecast = "https://api.openweathermap.org/data/2.5/forecast";

INPUT.addEventListener("keyup", sentName);
getInfo(currentCity);
tabNow.SHAPE.addEventListener("click", () => {
    let name = tabNow.CITY.textContent;
    if (!favoriteCities.has(name)) {
        favoriteCities.add(name);
        createCity(name);
        localStorage.setItem("favoriteCities", JSON.stringify([...favoriteCities]));
    }
});

favoriteCities.forEach(locationName => {
    createCity(locationName);
});




function createCity(locationName) {
    let location = document.createElement('p');
    location.innerHTML = `<span>${locationName}</span><img src="./assets/close-icon-45.svg" alt="close">`;
    locations.append(location);
    location.querySelector('img').addEventListener("click", deleteCity);
    location.childNodes[0].addEventListener("click", () => getInfo(locationName));
}

function deleteCity() {
    let name = this.closest("p").textContent;
    favoriteCities.delete(name);
    this.closest("p").remove();
    localStorage.setItem("favoriteCities", JSON.stringify([...favoriteCities]));
}



function sentName(event) {
    if (event.keyCode === 13) {
        const cityName = INPUT.value;
        getInfo(cityName);
    }
}

function getInfo(cityName) {
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
    let response = fetch(url);
    let json = response.then((response) => response.json());
    json.then((result) => {
            fillNowTab(result, cityName);
            fillDetailsTab(result, cityName);
            fillForecastTab(cityName);
            INPUT.value = "";
            localStorage.setItem("currentCity", cityName);
        })
        .catch(err => alert(err));
}


function fillNowTab(res, city) {
    tabNow.ICON.src = `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`;
    tabNow.TEMP.textContent = `${Math.round(res.main.temp)}°`;
    tabNow.CITY.textContent = city;
}

function fillDetailsTab(res, city) {
    tabDetails.CITY.textContent = city;
    tabDetails.TEMP.textContent = `${Math.round(res.main.temp)}`;
    tabDetails.FEEL_LIKE.textContent = `${Math.round(res.main.feels_like)}`;
    tabDetails.WEATHER.textContent = res.weather[0].main;
    tabDetails.SUNSET.textContent = `${new Date(1000*res.sys.sunset).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}`;
    tabDetails.SUNRISE.textContent = `${new Date(1000*res.sys.sunrise).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}`;

}


function fillForecastTab(city) {
    const urlGeo = `${serverUrlGeo}?q=${city}&appid=${apiKey}&units=metric`

    async function showAsync() {
        try {
            let responseGeo = await fetch(urlGeo);
            let result = await responseGeo.json();
            const url = `${serverUrlForecast}?lat=${result[0].lat}&lon=${result[0].lon}&appid=${apiKey}&units=metric`;
            let response = await fetch(url);
            let result_second = await response.json();
            forecastProcessing(result_second.list);
        } catch (err) {
            alert(err);
        }
    }
    showAsync();

    tabItem3.innerHTML = `<div class="city-tab3">${city}</div>`;

}

function forecastProcessing(json, i = 0) {
    if (i > 3) {
        return
    }
    let options = {
        date: new Date((json[i].dt - 180 * 60) * 1000).getDate() + " " + new Date(json[i].dt * 1000).toLocaleString('en-US', { month: 'long' }),
        time: json[i].dt_txt.substr(-8, 5),
        temp: Math.round(json[i].main.temp),
        feels_like: Math.round(json[i].main.feels_like),
        weatherDescription: json[i].weather[0].main,
        icon: json[i].weather[0].icon,
    }
    createForecastElement(options);
    forecastProcessing(json, i + 1);


}

function createForecastElement({ date, time, temp, feels_like, weatherDescription, icon }) {
    let forecastElement = document.createElement('div');
    forecastElement.classList.add("day-block");
    let linkOnImage = `http://openweathermap.org/img/wn/${icon}@2x.png`
    forecastElement.innerHTML = ` <div class="info date">${date}</div>
	<div class="info time">${time}</div>
	<div class="info parameters">
		<p>Temperature: ${temp}</p>
		<p>Feels like: ${feels_like}</p>
	</div>
	<div class="info mini-icon">
		<p>${weatherDescription}</p><img  src="${linkOnImage}" alt="weather"></div>`;
    tabItem3.append(forecastElement);
}