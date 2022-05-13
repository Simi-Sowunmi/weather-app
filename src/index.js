//DISPLAY THE CURRENT DATE AND TIME
function formatTime(timestamp) {
 let time = new Date(timestamp);
 let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 let day = days[time.getDay()];
 let hours = time.getHours();
 if (hours < 10) {
  hours = `0${hours}`;
 }
 let minutes = time.getMinutes();
 if (minutes < 10) {
  minutes = `0${minutes}`;
 }
 return `${day}, ${hours}:${minutes}`;
}

function formatDate(timestamp) {
 let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
   ]
 let date = new Date(timestamp);
 let currentDate = date.getDate();
 let month = months[date.getMonth()];
 let year = date.getFullYear();

 let formattedDate = `${currentDate} ${month} ${year}`
 return formattedDate;
}

//FORECAST DAY
function formatDay(timestamp) {
  let date = new Date(timestamp * 1000)
  let day = date.getDay();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  return days[day];
}

//WEATHER FORECAST FOR LIVE SEARCH
function displayForecast(response) {
  let forecast = response.data.forecast.forecastday;
  let forecastElement = document.querySelector("#forecast")

  let forecastHTML = `<span class="row gx-3">`;
  forecast.forEach(function (forecastDay) {
   forecastHTML = forecastHTML +
     `
     <div class="card col-12" style="width: 18rem">
     <div class="card-body">
    <span
     <h5 class="card-title weather-forecast-date">${formatDay(forecastDay.date_epoch)}</h5>
      <img
        src="assets/icons/${forecastDay.day.condition.code}.png"
        alt=""
        width="42"
      />
      <p class="weather-forecast-temperature">${forecastDay.day.condition.text}</p>
      <div class="forecast-details">
      <span class="weather-forecast-temperature-max">Temperature- ${Math.round(forecastDay.day.maxtemp_c)}°</span>
      <span class="weather-forecast-temperature-min">${Math.round(forecastDay.day.mintemp_c)}°</span>
      <span><h6 class="forecast-humidity">Humidity-${forecastDay.day.avghumidity}%</h6></span>
      </div>
      <div class="forecast-details">
      </div>
      </div>
    </div> `;
  });

    forecastHTML = forecastHTML + `</span>`
    forecastElement.innerHTML = forecastHTML;
}


//WEATHER FORECAST FOR CURRENT LOCATION
function displayLiveForecast(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast")

  let forecastHTML = `<span class="row gx-3">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 3) {
   forecastHTML = forecastHTML +
     `
     <div class="card col-12" style="width: 18rem">
     <div class="card-body">
     <span
      <h5 class="card-title weather-forecast-date">${formatDay(forecastDay.dt)}</h5>
      <img
        src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png"
        alt=""
        width="42"
      />
      <p class="weather-forecast-temperature">${forecastDay.weather[0].description}</p>
      <div class="forecast-details"
      <span class="weather-forecast-temperature-max">Temperature- ${Math.round(forecastDay.temp.max)}°</span>
      <span class="weather-forecast-temperature-min">${Math.round(forecastDay.temp.min)}°</span>
      <span><h6 class="forecast-humidity">Humidity-${forecastDay.humidity}%</h6></span>
      </div>
      </div class="forecast-details">
      </div>
      </div>
    </div> `;
    }
  });

    forecastHTML = forecastHTML + `</span>`
    forecastElement.innerHTML = forecastHTML;
}

//WEATHER FORECAST FOR LAGOS LINK
function displayLagosForecast(response) {
  let forecast = response.data.forecast.forecastday;
  let forecastElement = document.querySelector("#forecast")

  let forecastHTML = `<span class="row gx-3">`;
  forecast.forEach(function (forecastDay) {
   forecastHTML = forecastHTML +
     `
     <div class="card col-12" style="width: 18rem">
     <div class="card-body">
    <span
     <h5 class="card-title weather-forecast-date">${formatDay(forecastDay.date_epoch)}</h5>
      <img
        src="assets/icons/${forecastDay.day.condition.code}.png"
        alt=""
        width="42"
      />
      <p class="weather-forecast-temperature">${forecastDay.day.condition.text}</p>
      <div class="forecast-details">
      <span class="weather-forecast-temperature-max">Temperature- ${Math.round(forecastDay.day.maxtemp_c)}°</span>
      <span class="weather-forecast-temperature-min">${Math.round(forecastDay.day.mintemp_c)}°</span>
      <span><h6 class="forecast-humidity">Humidity-${forecastDay.day.avghumidity}%</h6></span>
      </div>
      <div class="forecast-details">
      </div>
      </div>
    </div> `;
  });

    forecastHTML = forecastHTML + `</span>`
    forecastElement.innerHTML = forecastHTML;
}

//WEATHER FORECAST FOR PARIS LINK
function displayParisForecast(response) {
  let forecast = response.data.forecast.forecastday;
  let forecastElement = document.querySelector("#forecast")

  let forecastHTML = `<span class="row gx-3">`;
  forecast.forEach(function (forecastDay) {
   forecastHTML = forecastHTML +
     `
     <div class="card col-12" style="width: 18rem">
     <div class="card-body">
    <span
     <h5 class="card-title weather-forecast-date">${formatDay(forecastDay.date_epoch)}</h5>
      <img
        src="assets/icons/${forecastDay.day.condition.code}.png"
        alt=""
        width="42"
      />
      <p class="weather-forecast-temperature">${forecastDay.day.condition.text}</p>
      <div class="forecast-details">
      <span class="weather-forecast-temperature-max">Temperature- ${Math.round(forecastDay.day.maxtemp_c)}°</span>
      <span class="weather-forecast-temperature-min">${Math.round(forecastDay.day.mintemp_c)}°</span>
      <span><h6 class="forecast-humidity">Humidity-${forecastDay.day.avghumidity}%</h6></span>
      </div>
      <div class="forecast-details">
      </div>
      </div>
    </div> `;
  });

    forecastHTML = forecastHTML + `</span>`
    forecastElement.innerHTML = forecastHTML;
}

//WEATHER FORECAST FOR ACCRA LINK
function displayAccraForecast(response) {
  let forecast = response.data.forecast.forecastday;
  let forecastElement = document.querySelector("#forecast")

  let forecastHTML = `<span class="row gx-3">`;
  forecast.forEach(function (forecastDay) {
   forecastHTML = forecastHTML +
     `
     <div class="card col-12" style="width: 18rem">
     <div class="card-body">
    <span
     <h5 class="card-title weather-forecast-date">${formatDay(forecastDay.date_epoch)}</h5>
      <img
        src="assets/icons/${forecastDay.day.condition.code}.png"
        alt=""
        width="42"
      />
      <p class="weather-forecast-temperature">${forecastDay.day.condition.text}</p>
      <div class="forecast-details">
      <span class="weather-forecast-temperature-max">Temperature- ${Math.round(forecastDay.day.maxtemp_c)}°</span>
      <span class="weather-forecast-temperature-min">${Math.round(forecastDay.day.mintemp_c)}°</span>
      <span><h6 class="forecast-humidity">Humidity-${forecastDay.day.avghumidity}%</h6></span>
      </div>
      <div class="forecast-details">
      </div>
      </div>
    </div> `;
  });

    forecastHTML = forecastHTML + `</span>`
    forecastElement.innerHTML = forecastHTML;
}

//WEATHER FORECAST FOR LONDON LINK
function displayLondonForecast(response) {
  let forecast = response.data.forecast.forecastday;
  let forecastElement = document.querySelector("#forecast")

  let forecastHTML = `<span class="row gx-3">`;
  forecast.forEach(function (forecastDay) {
   forecastHTML = forecastHTML +
     `
     <div class="card col-12" style="width: 18rem">
     <div class="card-body">
    <span
     <h5 class="card-title weather-forecast-date">${formatDay(forecastDay.date_epoch)}</h5>
      <img
        src="assets/icons/${forecastDay.day.condition.code}.png"
        alt=""
        width="42"
      />
      <p class="weather-forecast-temperature">${forecastDay.day.condition.text}</p>
      <div class="forecast-details">
      <span class="weather-forecast-temperature-max">Temperature- ${Math.round(forecastDay.day.maxtemp_c)}°</span>
      <span class="weather-forecast-temperature-min">${Math.round(forecastDay.day.mintemp_c)}°</span>
      <span><h6 class="forecast-humidity">Humidity-${forecastDay.day.avghumidity}%</h6></span>
      </div>
      <div class="forecast-details">
      </div>
      </div>
    </div> `;
  });

    forecastHTML = forecastHTML + `</span>`
    forecastElement.innerHTML = forecastHTML;
}


//DISPLAY LIVE WEATHER RESULTS
function getForecast(city) {
  let apiKey = "e373d49861284b7b9b990052220705";
  let apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=no`;
//https://api.weatherapi.com/v1/forecast.json?key=900cc2ae081d424d98e125751222304&q=Texas&days=7&aqi=no&alerts=no

  axios.get(apiUrl).then(displayForecast);
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector(".temperature");
  let description = document.querySelector("#temperature-description");
  let humidity = response.data.current.humidity;
  let humidityElement = document.querySelector("#current-humidity");
  let pressure =  response.data.current.pressure_mb;
  let pressureElement = document.querySelector("#current-pressure");
  let windSpeed = response.data.current.wind_kph;
  let windSpeedElement = document.querySelector("#current-wind-speed");
  let result = document.querySelector(".result");
  let timeElement = document.querySelector(".liveDayTime");
  let dateElement = document.querySelector(".liveDate");
  let mainIcon = document.querySelector("#main-icon");

  celsiusTemperature = response.data.current.temp_c;

  result.innerHTML = response.data.location.name.toUpperCase();
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  description.innerHTML = response.data.current.condition.text;
  humidityElement.innerHTML = `Humidity- ${humidity}%`;
  pressureElement.innerHTML = `Pressure- ${pressure}`;
  windSpeedElement.innerHTML = `Wind Speed- ${windSpeed} km/h`;
  timeElement.innerHTML = formatTime(response.data.location.localtime);
  dateElement.innerHTML = formatDate(response.data.location.localtime_epoch * 1000);
  mainIcon.setAttribute("src",`assets/icons/${response.data.current.condition.code}.png`);
  mainIcon.setAttribute("alt", response.data.current.condition.text);

  getForecast(response.data.location.name);
}

function getLiveForecast(coordinates) {
  apiKey = "044a056e32379d4d1f99d87630c1a498";
  apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(displayLiveForecast);
}

function displayLiveTemperature(response) {
  let temperatureElement = document.querySelector(".temperature");
  let description = document.querySelector("#temperature-description");
  let humidity = response.data.main.humidity;
  let humidityElement = document.querySelector("#current-humidity");
  let pressure =  response.data.main.pressure;
  let pressureElement = document.querySelector("#current-pressure");
  let windSpeed = response.data.wind.speed;
  let windSpeedElement = document.querySelector("#current-wind-speed");
  let result = document.querySelector(".result");
  let mainIcon = document.querySelector("#main-icon")

  celsiusTemperature = response.data.main.temp;

  result.innerHTML = response.data.name.toUpperCase();
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  description.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = `Humidity- ${humidity}%`;
  pressureElement.innerHTML = `Pressure- ${pressure}`;
  windSpeedElement.innerHTML = `Wind Speed- ${windSpeed} km/h`;
  mainIcon.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  mainIcon.setAttribute("alt", response.data.weather[0].description);

  getLiveForecast(response.data.coord);
}


//API TO SHOW THE WEATHER OF CITIES LISTED BY CLICKING ON THEM
function getLagosForecast(city) {
  let apiKey = "e373d49861284b7b9b990052220705";
  let apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=no`;

  axios.get(apiUrl).then(displayLagosForecast);
}

function searchLagos(city) { 
  let apiKey = "e373d49861284b7b9b990052220705";
  let apiLagosUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no&alerts=no`;

  axios.get(apiLagosUrl).then(displayTemperature)

  getLagosForecast(data.location.name)
}


function getParisForecast(city) {
  let apiKey = "e373d49861284b7b9b990052220705";
  let apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=no`;

  axios.get(apiUrl).then(displayParisForecast);
}

function searchParis(city) { 
  let apiKey = "e373d49861284b7b9b990052220705";
  let apiParisUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no&alerts=no`;

  axios.get(apiParisUrl).then(displayTemperature)

  getParisForecast(data.location.name)
}


function getAccraForecast(city) {
  let apiKey = "e373d49861284b7b9b990052220705";
  let apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=no`;

  axios.get(apiUrl).then(displayAccraForecast);
}

function searchAccra(city) { 
  let apiKey = "e373d49861284b7b9b990052220705";
  let apiAccraUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no&alerts=no`;

  axios.get(apiAccraUrl).then(displayTemperature);

  getAccraForecast(data.location.name);
}


function getLondonForecast(city) {
  let apiKey = "e373d49861284b7b9b990052220705";
  let apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=no`;

  axios.get(apiUrl).then(displayLondonForecast);
}

function searchLondon(city) { 
  let apiKey = "e373d49861284b7b9b990052220705";
  let apiLondonUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no&alerts=no`;

  axios.get(apiLondonUrl).then(displayTemperature);

  getLondonForecast(data.location.name);
}


//API WEATHER
function searchCity(city) { 
  let apiKey = "e373d49861284b7b9b990052220705";
  let apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no&alerts=no`;

  axios.get(apiUrl).then(displayTemperature)
}

function searchForm(event) {
  event.preventDefault();
  let city = document.querySelector("#searching").value;
  let result = document.querySelector(".result");
  result.innerHTML = city.toUpperCase();
  searchCity(city);
}


//FUNCTION TO INPUT SEARCH VALUE OF LISTED CITIES
function searchList(event) {
  event.preventDefault();
  let city = "LAGOS";
  let result = document.querySelector(".result");
  result.innerHTML = "LAGOS";
  searchLagos(city);
}

function searchList2(event) {
  event.preventDefault();
  let city = "PARIS";
  let result = document.querySelector(".result");
  result.innerHTML = "PARIS";
  searchParis(city);
}

function searchList3(event) {
  event.preventDefault();
  let city = "ACCRA";
  let result = document.querySelector(".result");
  result.innerHTML = "ACCRA";
  searchAccra(city);
}

function searchList4(event) {
  event.preventDefault();
  let city = "LONDON";
  let result = document.querySelector(".result");
  result.innerHTML = "LONDON";
  searchLondon(city);
}


//GEOLOCATION API
function searchCurrentCity(position) {
  let apiKey2 = "044a056e32379d4d1f99d87630c1a498";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "metric"
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey2}`

  axios.get(url).then(displayLiveTemperature);
}

function currentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchCurrentCity);
}

let currentButton = document.querySelector(".live-search");
currentButton.addEventListener("click", currentLocation);
 

//LET STATEMENTS TO SELECT LISTED CITIES IN ORDER TO ASSIGN FUNCTIONS
let lagos = document.querySelector(".lagos");
lagos.addEventListener("click", searchList)

let paris = document.querySelector(".paris");
paris.addEventListener("click", searchList2)

let accra = document.querySelector(".accra");
accra.addEventListener("click", searchList3)

let london = document.querySelector(".london");
london.addEventListener("click", searchList4)


let form = document.querySelector("form");
form.addEventListener("submit", searchForm);


//UNIT CONVERSION
function convertToFahrenheit(event) {
   event.preventDefault();
   let temperatureElement = document.querySelector(".temperature");

   //REMOVE THE ACTIVE CLASS FROM THE CELSIUS LINK
   celsiusLink.classList.remove("active")
   fahrenheitLink.classList.add("active");

   let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
   temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector(".temperature");

  //REMOVE THE ACTIVE CLASS FROM THE FAHRENHEIT LINK
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active")

  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

searchCity("Lagos")
