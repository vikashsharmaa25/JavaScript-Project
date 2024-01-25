let isStop = true; // means timer is stopped
let timerElement = document.getElementById("timer");
let s = 0;
let m = 0;
let h = 0;

function start() {
  if (isStop === true) {
    isStop = false;
    runTimer();
  }
}

function runTimer() {
  s = parseInt(s);
  m = parseInt(m);
  h = parseInt(h);

  if (isStop === false) {
    s++;

    if (s == 60) {
      s = 0;
      m++;
    }
    if (m == 60) {
      m = 0;
      h++;
    }

    if (s < 10) {
      s = "0" + s;
    }
    if (m < 10) {
      m = "0" + m;
    }
    if (h < 10) {
      h = "0" + h;
    }
    timerElement.innerText = `${h} : ${m} : ${s}`;
    setTimeout(() => {
      runTimer();
    }, 1000);
  }
}
function stop() {
  isStop = true;
}

function reset() {
  isStop = true;
  s = 0;
  m = 0;
  h = 0;
  timerElement.innerText = `00 : 00 : 00`;
}
