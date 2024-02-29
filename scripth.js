function getWeather(cityName) {
    const apiKey = '1c486ba2d04410f0ffbe9831e732251a'; // Replace this with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=kelvin-273.15`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const temperature = data.main.temp;
            console.log(`Temperature in ${cityName} is ${(parseFloat(temperature.toFixed(2)) - 273).toFixed(2)}°C`);
            // Do something with the weather data
        })
        .catch(error => {
            console.error(error);
        });
}

getWeather('jhajjar');
