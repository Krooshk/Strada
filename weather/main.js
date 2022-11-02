let input = document.querySelector('input');
const tabNow = {
    CITY: document.querySelector('.city-now'),
    ICON: document.querySelector('.icon-weather img'),
    TEMP: document.querySelector('.temperature-tab1'),
}


input.addEventListener("keyup", sentName);

function sentName(event) {
    if (event.keyCode === 13) {
        const cityName = input.value;
        const apiKey = "111836d36d452866f627599b193d2401";
        const serverUrl = "https://api.openweathermap.org/data/2.5/weather";
        const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
        let response = fetch(url);
        let json = response.then((response) => response.json());
        json.then((result) => {
                tabNow.ICON.src = `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
                tabNow.TEMP.textContent = `${Math.round(result.main.temp)}°`;
                tabNow.CITY.textContent = cityName;
                input.value = "";
            })
            .catch(err => alert(err));

    }
}