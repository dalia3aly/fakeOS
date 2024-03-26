// Fetches weather data and updates - External API documentation: https://rapidapi.com/community/api/open-weather13


async function fetchWeather() {
    const url = 'https://open-weather13.p.rapidapi.com/city/sydney';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3175b02e8cmsh130ca381e03b97fp13191ajsna842d953489 a', // remember to remove the space before the last 'a', the space is for saving my monthly request limit
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();     // parse the response as JSON

        // building the display content
        const weatherInfo = `
            <strong>Location:</strong> ${data.name}, ${data.sys.country}
            <strong>Temperature:</strong> ${data.main.temp}F (Feels like ${data.main.feels_like}F)
            <strong>Minimum Temperature:</strong> ${data.main.temp_min}F
            <strong>Maximum Temperature:</strong> ${data.main.temp_max}F
            <strong>Wind:</strong> ${data.wind.speed} m/s, Direction:</strong> ${data.wind.deg}
            <strong>Humidity:</strong> ${data.main.humidity}%
            <strong>Visibility:</strong> ${data.visibility / 1000} mile
        `;

        // update the DOM
        document.getElementById('weather-info').innerHTML = weatherInfo;
    } catch (error) {
        console.error('Failed to fetch weather data:', error);
        document.getElementById('weather-info').textContent = 'Failed to load weather data.';
    }
}

document.addEventListener('DOMContentLoaded', fetchWeather);

