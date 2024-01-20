let clock = document.getElementById("clock");
console.log(clock.innerText);

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

setInterval(() => {
  updateTime();
}, 1000);
