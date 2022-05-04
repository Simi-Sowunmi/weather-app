let now = new Date();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDay = days[now.getDay()];
let currentHours = now.getHours();
  if (currentHours < 10) {
  currentHours = `0${currentHours}`;
 };
let currentMinutes = now.getMinutes();
 if (currentMinutes < 10) {
  currentMinutes = `0${currentMinutes}`;
 };
let currentSeconds = now.getSeconds();
let currentDate = now.getDate();
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
  ];
let currentMonth = months[now.getMonth()];
let currentYear = now.getFullYear();

let liveDay= document.querySelector(".liveDay");
liveDay.innerHTML = currentDay;

let liveTime = document.querySelector(".liveTime");
liveTime.innerHTML = `${currentHours}:${currentMinutes}:${currentSeconds}`;

let liveDate = document.querySelector(".liveDate");
liveDate.innerHTML = `${currentDate}-${currentMonth}-${currentYear}`;

//API WEATHER
function searchCity(city) { 
  let apiKey = "044a056e32379d4d1f99d87630c1a498";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(displayTemperature)
}


function displayTemperature(response) {
  console.log(response.data)
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
  windSpeedElement.innerHTML = `Wind Speed- ${windSpeed}`;
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
  let apiKey = "044a056e32379d4d1f99d87630c1a498";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "metric"
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

  axios.get(url).then(displayTemperature);
}

function currentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchCurrentCity);
}

let currentButton = document.querySelector(".live-search");
currentButton.addEventListener("click", currentLocation);
 


