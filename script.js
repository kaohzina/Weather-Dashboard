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

searchEl.addEventListener('click', function(event) {
  event.preventDefault();
  const oldSearch = localStorage.getItem('location')

  if (oldSearch === null) {
    return;
  }
})


// const renderLastSearch = function() { 
//   const newSearch = JSON.parse(localStorage.getItem('search')) || [];
// }


// const oldSearch = JSON.parse(localStorage.getItem('search')) || [];
// const newSearch = locationEl;

// searchEl.addEventListener("click", function(event) {
//   event.preventDefault();
//   localStorage.setItem('City', JSON.stringify(oldSearch));
//   // renderLastSearch();
// })

// const saveSearch = function() { 
//   let searchItem = locationEl.value;
//   localStorage.setItem('City', searchItem);

// }