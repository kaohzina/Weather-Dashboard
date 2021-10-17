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


const searchHistoryAdd = function(){
  cityName = document.createElement("button");
  cityName.textContent = searchHistoryEl;
  cityName.classList = "btn";
  cityName.setAttribute("city", searchHistoryEl);
  cityName.setAttribute("type", button);
  cityName.append(searchHistoryAdd);
}

// const renderLastSearch = function() {
//   const oldSearch = localStorage.getItem('location')
//   if (oldSearch === null) {
//     return;
//   }
//   searchHistoryEl.textContent = oldSearch;
//   console.log(oldSearch);
// }
// renderLastSearch();
// searchEl.addEventListener('click', function(event) {
//   event.preventDefault();
//   const oldSearch = JSON.parse(localStorage.getItem("Cities"));
//   if (oldSearch === null) {
//     oldSearch = [];
//     return;
//   }
  
//   const entry = {
//     "City": locationEl.value
//   };
//   localStorage.setItem("entry", JSON.stringify(entry));
//   event.push(entry);
//   localStorage.setItem("Cities", json.stringify(oldSearch));
// })

searchEl.addEventListener('click', addEntry); 

function addEntry() {
  // Parse any JSON previously stored in allEntries
  var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
  if(existingEntries == null) existingEntries = [];
  var entryTitle = locationEl.value;
  
  var entry = {
      "City": entryTitle,
  };
  localStorage.setItem("entry", JSON.stringify(entry));
  // Save allEntries back to local storage
  existingEntries.push(entry);
  localStorage.setItem("allEntries", JSON.stringify(existingEntries));
};