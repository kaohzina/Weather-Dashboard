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

// const searchHistoryAdd = function(){
//   cityName = document.createElement("button");
//   cityName.textContent = locationEl;
//   cityName.classList = "btn";
//   cityName.setAttribute("city", locationEl);
//   cityName.setAttribute("type", button);
//   cityName.append(searchHistoryAdd);
// }

const renderLastSearch = function() {
  const oldSearch = localStorage.getItem('location')
  if (oldSearch === null) {
    return;
  }
  searchHistoryEl.textContent = oldSearch;
  console.log(oldSearch);
}
renderLastSearch();
searchEl.addEventListener('click', function(event) {
  event.preventDefault();
  const Search = locationEl.value;
  localStorage.setItem('city', Search);

  const oldSearch = localStorage.getItem('city')
  if (oldSearch === null) {
    return;
  }
  searchHistoryEl.textContent = oldSearch;
  console.log(oldSearch);
})
