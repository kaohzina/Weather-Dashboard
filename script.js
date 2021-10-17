const apiKey = "e0ec3338bd31d20ecc0b95e95df665f8"
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

const currentDay = moment().subtract(10, 'days').calendar();
currentDayEl.text(currentDay);
console.log(currentDayEl);