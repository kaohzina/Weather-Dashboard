const APIkey = "e0ec3338bd31d20ecc0b95e95df665f8";
const locationEl = document.getElementById("location");
const searchEl = document.getElementById("search");
const searchHistoryEl = document.getElementById("searchHistory");
const currentDayEl = document.getElementById("currentDay");
const cityNameEl = document.getElementById("cityName");
const temperatureEl = document.getElementById("temperature");
const humidityEl = document.getElementById("humidity");
const windSpeedEl = document.getElementById("wind-speed");
const uvIndexEl = document.getElementById("uvIndex");
const day1El = document.getElementById("1");
const day2El = document.getElementById("2");
const day3El = document.getElementById("3");
const day4El = document.getElementById("4");
const day5El = document.getElementById("5");

//trying to get the list sorted
const searchHistoryAdd = function(){
  // searchHistoryEl.textContent = locationEl.value;
  entryTitle = document.createElement("button");
  // cityName.textContent = searchHistoryEl;
  entryTitle.classList = "btn";
  entryTitle.setAttribute("city", searchHistoryEl);
  entryTitle.setAttribute("type", "button");
  entryTitle.append(searchHistoryAdd);
}

searchEl.addEventListener("click", addEntryToLocalStorage, getLocationByQuery);

function addEntryToLocalStorage() {
  // Parse any JSON previously stored in allEntries
  var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
  if (existingEntries == null) existingEntries = [];
  var entryTitle = locationEl.value;

  var entry = {
    City: entryTitle,
  };
  localStorage.setItem("entry", JSON.stringify(entry));
  // Save allEntries back to local storage
  existingEntries.push(entry);
  localStorage.setItem("allEntries", JSON.stringify(existingEntries));
  searchHistoryAdd();
  getLocationByQuery(entry.City);
}

function getLocationByQuery(city) {
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city},&appid=e0ec3338bd31d20ecc0b95e95df665f8`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      currentDayEl.textContent = "Place: " + response[0].name + ", " + response[0].state;
      getWeatherByLatLon(response[0].lat, response[0].lon);
      return response;
    });
}

function getWeatherByLatLon(lat, lon) {
  //one call api
  // needs lat, lon, and apikey

  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=e0ec3338bd31d20ecc0b95e95df665f8`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log("current temp?", data.current.temp);
      
      temperatureEl.textContent = "Temperature: " + data.current.temp + " °F";
      humidityEl.textContent = "Humidity: " + data.current.humidity + " %";
      windSpeedEl.textContent = "Wind Speed: " + data.current.wind_speed + " MPH";
      uvIndexEl.textContent = "UV Index: " + data.current.uvi;
      return data;
    });
}
