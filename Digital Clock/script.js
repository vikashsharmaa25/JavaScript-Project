let clock = document.getElementById("clock");
let AllData = document.getElementById("date");

function updateTime() {
  let now = new Date();
  let hour = now.getHours().toString().padStart(2, "0");
  let minute = now.getMinutes().toString().padStart(2, "0");
  let second = now.getSeconds().toString().padStart(2, "0");
  let ampm = "AM";

  if (hour > 12) {
    hour -= 12;
    ampm = "PM";
  }

  if (hour === 0) {
    hour = 12;
  }

  let timeString = `${hour} : ${minute} : ${second} ${ampm}`;
  clock.innerText = timeString;
}

function dateAndMonth() {
  let dateObj = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
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
    "December",
  ];
  let day = dateObj.getDay();
  let month = dateObj.getMonth();
  let date = dateObj.getDate();
  let year = dateObj.getFullYear();

  // monday, 21 January 2024

  let allDate = `${daysOfWeek[day]}, ${date} ${months[month]} ${year}`;

  AllData.innerText = allDate;
}

dateAndMonth();

setInterval(() => {
  updateTime();
}, 1000);
