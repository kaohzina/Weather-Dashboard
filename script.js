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

let list = [];

const searchHistoryAdd = function(){
  searchHistoryEl = document.createElement("button");
  searchHistoryEl.textContent = searchItem;
  searchHistoryEl.classList = "btn";
  searchHistoryEl.setAttribute("city", searchItem);
  searchHistoryEl.setAttribute("type", button);
  locationEl.append(searchHistoryAdd);
}

searchEl.addEventListener("click", function() {
  locationEl
})

const saveSearch = function() {
  let newSearch = searchItem

  localStorage.setItem('City', JSON.stringify(saveList))
}