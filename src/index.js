//Display the current day and time
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
  


function displayTemperature(response) {
  console.log(response.data)
  let temperature = Math.round(response.data.current.temp_c);
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
  let mainIconElement = document.querySelector("#main-icon")

  result.innerHTML = response.data.location.name.toUpperCase();
  temperatureElement.innerHTML = `${temperature}`;
  description.innerHTML = response.data.current.condition.text;
  humidityElement.innerHTML = `Humidity- ${humidity}%`;
  pressureElement.innerHTML = `Pressure- ${pressure}`;
  windSpeedElement.innerHTML = `Wind Speed- ${windSpeed} km/h`;
  timeElement.innerHTML = formatTime(response.data.location.localtime);
  dateElement.innerHTML = formatDate(response.data.location.localtime_epoch * 1000);
  mainIconElement.setAttribute("src", `icons/${response.data.current.condition.code}.png`)

}

function displayLiveTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector(".temperature");
  let description = document.querySelector("#temperature-description");
  let humidity = response.data.main.humidity;
  let humidityElement = document.querySelector("#current-humidity");
  let pressure =  response.data.main.pressure;
  let pressureElement = document.querySelector("#current-pressure");
  let windSpeed = response.data.wind.speed;
  let windSpeedElement = document.querySelector("#current-wind-speed");
  let result = document.querySelector(".result");

  result.innerHTML = response.data.name.toUpperCase();
  temperatureElement.innerHTML = `${temperature}`;
  description.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = `Humidity- ${humidity}%`;
  pressureElement.innerHTML = `Pressure- ${pressure}`;
  windSpeedElement.innerHTML = `Wind Speed- ${windSpeed} km/h`;
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
  
let form = document.querySelector("form");
form.addEventListener("submit", searchForm);
searchCity("Lagos")


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
 

// function convertToFahrenheit(event) {
//    event.preventDefault();
//    let temperatureElement = document.querySelector(".temperature");
//    temperatureElement.innerHTML = 66;
// }

// function convertToCelsius(event) {
//  event.preventDefault();
//  let temperatureElement = document.querySelector(".temperature");
//  temperatureElement.innerHTML = 19;
// }

// let fahrenheitLink = document.querySelector("#fahrenheit-link");
// fahrenheitLink.addEventListener("click", convertToFahrenheit);


// let celsiusLink = document.querySelector("#celsius-link");
// celsiusLink.addEventListener("click", convertToCelsius);

