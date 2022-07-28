function createMain() {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("maindiv");

    const container = document.getElementById("container")
    container.appendChild(mainDiv);

    const search = document.createElement("div");
    search.classList.add("search");
        var form = document.createElement("FORM");
        form.setAttribute("id","form")

            var searchInput = document.createElement("input");
            searchInput.setAttribute("type","text");
            searchInput.setAttribute("id","search");
            searchInput.setAttribute("class","searchBar");
            form.appendChild(searchInput);
        
            var searchBtn = document.createElement("button");
            searchBtn.innerText = "Search";
            searchBtn.setAttribute("class","button");
            searchBtn.setAttribute("id","submitBtn");
            form.appendChild(searchBtn);
        search.appendChild(form);
    mainDiv.appendChild(search);


    const result = document.createElement("div");
    result.setAttribute("id","viewCityWeather");
    result.classList.add("hidden");
        const cityName = document.createElement("div");
        cityName.setAttribute("id","cityName")
        result.appendChild(cityName);

        var temperature = document.createElement("div");
        temperature.setAttribute("id","temperature")
        result.appendChild(temperature);

        var weatherCondition = document.createElement("div");
        weatherCondition.setAttribute("id","weatherCondition")
        result.appendChild(weatherCondition);

        var wind = document.createElement("div");
        wind.setAttribute("id","wind")
        result.appendChild(wind);

    mainDiv.appendChild(result);
}

export default createMain;