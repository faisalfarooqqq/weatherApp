import tempIcon from '../images/temperature-celsius.svg' ;
import highTemp from '..//images/thermometer-high.svg';
import lowTemp from '../images/thermometer-low.svg';

const collectUserInput = ()=> {
    const userInput = document.getElementById('userInput').value;
    return userInput;
}

const displayWeather = (weatherInfo) => {
    const mainContainer = document.getElementById('main');
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('resultContainer');

    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('descriptionContainer');

    const locationContainer = document.createElement('div');
    locationContainer.classList.add('locationContainer');
    locationContainer.textContent = `${weatherInfo.cityName + ', ' + weatherInfo.countryName + '.'} `;

    const tempContainer = document.createElement('div');
    tempContainer.classList.add('tempContainer');

    const cityTempContainer = document.createElement('div')
    cityTempContainer.classList.add('cityTempContainer');
  
    const cityTemp = document.createElement('p');
    cityTemp.classList.add('cityTemp');
    cityTemp.textContent = `${weatherInfo.currentTemperature}`;

    const currenTempIcon = document.createElement('img');
    currenTempIcon.classList.add('currenTempIcon');
    currenTempIcon.src = tempIcon;
    currenTempIcon.alt = 'Celsius Icon';


    const highTempContainer = document.createElement('div');
    highTempContainer.classList.add('highTempContainer');

    const highT = document.createElement('div');
    const highIcon = document.createElement('img');
    highIcon.src = highTemp;
    highIcon.alt = 'high temp thermometer';

  
    const highTempPara = document.createElement('p');
    highTempPara.textContent = `${weatherInfo.highTemperature}`;

    const highTempIcon = document.createElement('img');
    highTempIcon.classList.add('highTempIcon');
    highTempIcon.src = tempIcon;
    highTempIcon.alt = 'Celsius Icon';

    const lowTempContainer = document.createElement('div');
    lowTempContainer.classList.add('lowTempContainer');

    const lowT = document.createElement('div');
    lowT.classList.add('lowT');

    const lowIcon = document.createElement('img');
    lowIcon.src = lowTemp;
    lowIcon.alt = 'low temp thermometer';

  
    const lowTempPara = document.createElement('p');
    lowTempPara.textContent = `${weatherInfo.lowTemperature}`;

    const lowTempIcon = document.createElement('img');
    lowTempIcon.classList.add('lowTempIcon');
    lowTempIcon.src = tempIcon;
    lowTempIcon.alt = 'Celsius Icon';
  
    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = `${weatherInfo.description}`;

    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('detailsContainer');

  
    const windSpeed = document.createElement('p');
    windSpeed.textContent = `Wind Speed: ${weatherInfo.windSpeed} m/s`;
  
    const forecast = document.createElement('p');
    forecast.textContent = `Forecast: ${weatherInfo.forecast}`;
    
    const weatherIcon = document.createElement('img');
    weatherIcon.classList.add('weatherIcon');
    weatherIcon.src = `https://openweathermap.org/img/w/${weatherInfo.weatherIconCode}.png`;
    weatherIcon.alt = 'Weather Icon';


    descriptionContainer.appendChild(description);
    descriptionContainer.appendChild(weatherIcon);
    
    resultContainer.appendChild(descriptionContainer);
    resultContainer.appendChild(locationContainer);

    cityTempContainer.appendChild(cityTemp);
    cityTempContainer.appendChild(currenTempIcon);

    highT.appendChild(highTempPara);
    highT.appendChild(highTempIcon);
    highTempContainer.appendChild(highT);
    highTempContainer.appendChild(highIcon);

    lowT.appendChild(lowTempPara);
    lowT.appendChild(lowTempIcon);
    lowTempContainer.appendChild(lowT);
    lowTempContainer.appendChild(lowIcon);
    


    tempContainer.appendChild(cityTempContainer);
    tempContainer.appendChild(highTempContainer);
    tempContainer.appendChild(lowTempContainer);

    resultContainer.appendChild(tempContainer);
 
    detailsContainer.appendChild(windSpeed);
    detailsContainer.appendChild(forecast);
    
    resultContainer.appendChild(detailsContainer);
  
    mainContainer.innerHTML = ''; // Clear existing content
    mainContainer.appendChild(resultContainer);
  };

export {collectUserInput, displayWeather};