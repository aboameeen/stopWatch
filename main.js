let sec = document.querySelector(".sec");
let min = document.querySelector(".min");
let hour = document.querySelector(".hour");

//>>>>>>>>>>>>>>>>>

let start = document.querySelector(".start");
let stope = document.querySelector(".stop");
let pause = document.querySelector(".pause");

//>>>>>>>>>>>>>>>>

let second = "00";
let minute = "00";
let hours = "00";

let interval;

//>>>>>>>>>>>>>>>>

function starttimer() {
  second++;
  if (second <= 9) {
    second = "0" + second;
  }
  if (second > 59) {
    second = 0;
    second = "0" + second;
    minute++;
    if (minute <= 9) {
      minute = "0" + minute;
    }
    if (minute > 59) {
      minute = 0;
      minute = "0" + minute;
      hours++;
      if (hours <= 9) {
        hours = "0" + hours;
      }
    }
  }
  sec.innerHTML = second;
  min.innerHTML = minute;
  hour.innerHTML = hours;
}

start.onclick = function () {
  interval = setInterval(starttimer, 1000);
  // start.style.visibility = "hidden";
  start.setAttribute("disabled", "disabled");
};
// start.onclick = function () {
//   setTimeout(() => {
//     start.style.display = "none";
//   }, 2000);
// };
pause.onclick = function () {
  interval = clearInterval(interval);
  // start.style.visibility = "visible";
  start.removeAttribute("disabled");
};

stope.onclick = function () {
  interval = clearInterval(interval);
  // start.style.visibility = "visible";
  start.removeAttribute("disabled");
  second = "00";
  minute = "00";
  hours = "00";

  sec.innerHTML = second;
  min.innerHTML = minute;
  hour.innerHTML = hours;
};
