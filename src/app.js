import { collectUserInput, displayWeather } from "./modules/domHandler";

const getWeather = async (city) => {
    const cityName = city;
    const apiKey = 'ec688efc2c108fe1c068628da912c1f0';
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiURL);

        if (!response.ok){
            throw new Error (`Failed to fetch weather data. Status: ${response.status}`)
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('error fetching weather data: ', error);
        alert('please enter a valid city name');
        throw error;
    }

};

// Function to extract required information from weatherData
const extractWeatherInfo = (weatherData) => {
    const extractedInfo = {
      cityName: weatherData.name,
      countryName: weatherData.sys.country,
      currentTime: new Date(weatherData.dt * 1000), 
      currentTemperature: weatherData.main.temp,
      highTemperature: weatherData.main.temp_max,
      lowTemperature: weatherData.main.temp_min,
      description: weatherData.weather[0].description,
      windSpeed: weatherData.wind.speed,
      forecast: weatherData.weather[0].main, 
      
    };
  
    return extractedInfo;
  };

const fetchAndDisplayWeather = async (city) => {
    try {
        const weatherData = await getWeather(city);
        console.log('weather data: ', weatherData);
        const requiredWeatherInfo = extractWeatherInfo(weatherData);
        console.log(requiredWeatherInfo);
        displayWeather(requiredWeatherInfo);
    } catch (error) {
        console.error('Failed to fetch weather data:', error);

    }

};

const loadPage = () => {
    console.log("hellow World");
    const searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', ()=> {
     const city =  collectUserInput();
     fetchAndDisplayWeather(city);
    });
}

export {loadPage};