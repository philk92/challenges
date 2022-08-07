function time() {
  let dots = document.querySelectorAll(".dot");
  for (const dot of dots) {
    dot.classList.remove("on");
  }
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  let hourString = Number(hour).toString().split("");
  let minuteString = Number(minute).toString().split("");
  let secondString = Number(second).toString().split("");
  if (hourString.length === 1) {
    hourString.unshift("0");
  }
  if (minuteString.length === 1) {
    minuteString.unshift("0");
  }
  if (secondString.length === 1) {
    secondString.unshift("0");
  }
  toggleClass(hourString[0], "hour1");
  toggleClass(hourString[1], "hour2");
  toggleClass(minuteString[0], "min1");
  toggleClass(minuteString[1], "min2");
  toggleClass(secondString[0], "sec1");
  toggleClass(secondString[1], "sec2");
  setInterval(time, 1000);
}

function toggleClass(string, classname) {
  if (string === "1") {
    document.getElementById(`${classname}1`).classList.add("on");
  }
  if (string === "2") {
    document.getElementById(`${classname}2`).classList.add("on");
  }
  if (string === "3") {
    document.getElementById(`${classname}1`).classList.add("on");
    document.getElementById(`${classname}2`).classList.add("on");
  }
  if (string === "4") {
    document.getElementById(`${classname}4`).classList.add("on");
  }
  if (string === "5") {
    document.getElementById(`${classname}1`).classList.add("on");
    document.getElementById(`${classname}4`).classList.add("on");
  }
  if (string === "6") {
    document.getElementById(`${classname}2`).classList.add("on");
    document.getElementById(`${classname}4`).classList.add("on");
  }
  if (string === "7") {
    document.getElementById(`${classname}1`).classList.add("on");
    document.getElementById(`${classname}2`).classList.add("on");
    document.getElementById(`${classname}4`).classList.add("on");
  }
  if (string === "8") {
    document.getElementById(`${classname}8`).classList.add("on");
  }
  if (string === "9") {
    document.getElementById(`${classname}1`).classList.add("on");
    document.getElementById(`${classname}8`).classList.add("on");
  }
}

time();
