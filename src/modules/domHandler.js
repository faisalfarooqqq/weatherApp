const collectUserInput = ()=> {
    const userInput = document.getElementById('userInput').value;

    return userInput;
}

const displayWeather = (obj) => {
    const cityWeather = obj;

    const mainContainer = document.getElementById('main');
    const resultContainer = document.createElement('div');
   
    const cityName = document.createElement('h2');
    cityName.textContent = `City: ${cityWeather.name}`;

    const countryName = document.createElement('h3');
    countryName.textContent = `Country: ${cityWeather.sys.country}`;

    const cityTemp = document.createElement('p');
    cityTemp.textContent = `Temp: ${cityWeather.main.temp}`;
    
    const description = document.createElement('p');
    description.textContent = `Description: ${cityWeather.weather[0].description}`;

    resultContainer.appendChild(cityName);
    resultContainer.appendChild(countryName);
    resultContainer.appendChild(cityTemp);
    resultContainer.appendChild(description);

    mainContainer.appendChild(resultContainer);

}


export {collectUserInput, displayWeather};