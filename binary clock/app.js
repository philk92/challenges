let dots = document.querySelectorAll(".dot");
function time() {
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

  toggleClass(hour.toString()[0], "hour1");
  toggleClass(hour.toString()[1], "hour2");
  toggleClass(minute.toString()[0], "min1");
  toggleClass(minute.toString()[1], "min2");
  toggleClass(second.toString()[0], "sec1");
  toggleClass(second.toString()[1], "sec2");
  setInterval(time, 1000);
}

function toggleClass(string, classname) {
  switch (string) {
    case "1":
      document.getElementById(`${classname}1`).classList.add("on");
      break;
    case "2":
      document.getElementById(`${classname}2`).classList.add("on");
      break;
    case "3":
      document.getElementById(`${classname}1`).classList.add("on");
      document.getElementById(`${classname}2`).classList.add("on");
      break;
    case "4":
      document.getElementById(`${classname}4`).classList.add("on");
      break;
    case "5":
      document.getElementById(`${classname}1`).classList.add("on");
      document.getElementById(`${classname}4`).classList.add("on");
      break;
    case "6":
      document.getElementById(`${classname}2`).classList.add("on");
      document.getElementById(`${classname}4`).classList.add("on");
      break;
    case "7":
      document.getElementById(`${classname}1`).classList.add("on");
      document.getElementById(`${classname}2`).classList.add("on");
      document.getElementById(`${classname}4`).classList.add("on");
      break;
    case "8":
      document.getElementById(`${classname}8`).classList.add("on");
      break;
    case "9":
      document.getElementById(`${classname}1`).classList.add("on");
      document.getElementById(`${classname}8`).classList.add("on");
      break;
  }
}

time();
