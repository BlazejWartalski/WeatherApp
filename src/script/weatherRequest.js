function initializeButton() {
    const button = document.getElementById("submitBtn");
    const form = document.getElementById("form")
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    })
    button.addEventListener("click", getUserInput);
}


function getUserInput() {
    const input = document.getElementById("search")
    var inputLocation = input.value;
    requestWeatherAPI(inputLocation)
}

async function requestWeatherAPI(location) {
    const weatherRequest = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=74ed9da5f7ab970ed5563da29da1df3e&units=metric`
    
    // if (!weatherAPI.ok) throw new Error(`Try again`)
    try {
        const weatherAPI = await fetch(weatherRequest, {mode: 'cors'});

        if (!weatherAPI.ok) throw new Error(`There is something wrong with the input. Please try again and make sure there are no blank spaces, and the name is correct.`);
        const weatherData = await weatherAPI.json();
        var arrayOfInfo = {
            name: weatherData.name,
            temp: weatherData.main.temp + "°C",
            weather: weatherData.weather[0].description,
            wind: weatherData.wind.speed + " km/h"
        }
        return renderWeatherReport(arrayOfInfo);
    } catch (error) {
        alert(error);
        return null;
    }
}

function renderWeatherReport(arrayOfInfo) {
    console.log(arrayOfInfo)
    var box = document.getElementById("viewCityWeather")
    box.classList.remove("hidden")

    var cityName = document.getElementById("cityName");
    cityName.innerText = arrayOfInfo.name

    var temperature = document.getElementById("temperature");
    temperature.innerText = arrayOfInfo.temp

    var weatherCondition = document.getElementById("weatherCondition");
    weatherCondition.innerText = arrayOfInfo.weather

    var wind = document.getElementById("wind");
    wind.innerText = arrayOfInfo.wind
}


export default initializeButton;