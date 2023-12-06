const collectUserInput = ()=> {
    const userInput = document.getElementById('userInput').value;
    return userInput;
}

const displayWeather = (weatherInfo) => {
    const mainContainer = document.getElementById('main');
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('resultContainer');
  
    const cityName = document.createElement('h2');
    cityName.textContent = `City: ${weatherInfo.cityName}`;
  
    const countryName = document.createElement('h3');
    countryName.textContent = `Country: ${weatherInfo.countryName}`;
  
    const cityTemp = document.createElement('p');
    cityTemp.textContent = `Temp: ${weatherInfo.currentTemperature} °C`;
  
    const highTemp = document.createElement('p');
    highTemp.textContent = `High Temp: ${weatherInfo.highTemperature} °C`;
  
    const lowTemp = document.createElement('p');
    lowTemp.textContent = `Low Temp: ${weatherInfo.lowTemperature} °C`;
  
    const description = document.createElement('p');
    description.textContent = `Description: ${weatherInfo.description}`;
  
    const windSpeed = document.createElement('p');
    windSpeed.textContent = `Wind Speed: ${weatherInfo.windSpeed} m/s`;
  
    const forecast = document.createElement('p');
    forecast.textContent = `Forecast: ${weatherInfo.forecast}`;
  
    resultContainer.appendChild(cityName);
    resultContainer.appendChild(countryName);
    resultContainer.appendChild(cityTemp);
    resultContainer.appendChild(highTemp);
    resultContainer.appendChild(lowTemp);
    resultContainer.appendChild(description);
    resultContainer.appendChild(windSpeed);
    resultContainer.appendChild(forecast);
  
    mainContainer.innerHTML = ''; // Clear existing content
    mainContainer.appendChild(resultContainer);
  };

export {collectUserInput, displayWeather};