let h2 = document.querySelector("h2");

let now = new Date();
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
];
let weekday = days[now.getDay()];
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
let month = months[now.getMonth()];

h2.innerHTML = `${weekday}, ${month} ${date}, ${hours}:${minutes}`;

// Update subheading with current date
// Update forecast menu with names of week

let nextDay = document.querySelector("#next-day");
nextDay.innerHTML = days[now.getDay() + 1];

let secondDay = document.querySelector("#second-next-day");
secondDay.innerHTML = days[now.getDay() + 2];

let thirdDay = document.querySelector("#third-next-day");
thirdDay.innerHTML = days[now.getDay() + 3];

let fourthDay = document.querySelector("#fourth-next-day");
fourthDay.innerHTML = days[now.getDay() + 4];

let fifthDay = document.querySelector("#fifth-next-day");
fifthDay.innerHTML = days[now.getDay() + 5];

let apiKey = "87ea285fd528486819f9be1f3ac61b1d";
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,minutely&appid=${apiKey}`;