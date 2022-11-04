import { INPUT, tabNow, locations, tabDetails } from '/Strada/weather/view.js';
let addedLocations = ["Amur", "Samara", "Moscow", "Tokyo"];
const apiKey = "111836d36d452866f627599b193d2401";
const serverUrl = "https://api.openweathermap.org/data/2.5/weather";

INPUT.addEventListener("keyup", sentName);
getInfo("Moscow");
tabNow.SHAPE.addEventListener("click", () => {
    let name = tabNow.CITY.textContent;
    if (!addedLocations.includes(name)) {
        addedLocations.push(name);
        createCity(name);
        console.log(addedLocations);
    }
});

addedLocations.forEach(locationName => {
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
    addedLocations = addedLocations.filter(el => el !== name);
    this.closest("p").remove();
    console.log(addedLocations);
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
            console.log(result);
            tabNow.ICON.src = `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
            tabNow.TEMP.textContent = `${Math.round(result.main.temp)}°`;
            tabNow.CITY.textContent = cityName;
            tabDetails.CITY.textContent = cityName;
            tabDetails.TEMP.textContent = `${Math.round(result.main.temp)}`;
            tabDetails.FEEL_LIKE.textContent = `${Math.round(result.main.feels_like)}`;
            tabDetails.WEATHER.textContent = result.weather[0].main;
            tabDetails.SUNSET.textContent = `${new Date(1000*result.sys.sunset).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}`;
            tabDetails.SUNRISE.textContent = `${new Date(1000*result.sys.sunrise).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}`;

            INPUT.value = "";
        })
        .catch(err => alert(err));
}


for (let el in tabDetails) {
    console.log(el);
}