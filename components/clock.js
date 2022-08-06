let time = document.querySelector(".time");
let dateLong = document.querySelector(".dateLong");
let dateShort = document.querySelector(".dateShort");

function uhrzeit() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let d = date.getDate();
  let mon = date.getMonth();
  let y = date.getFullYear();
  let dt = date.getDay();
  let year = y;

  const months = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];

  const days = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];

  // add leading 0 to variables under 10
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  let month = mon < 10 ? "0" + (mon + 1) : mon + 1;
  let day = d < 10 ? "0" + d : d;
  // assign weekday to name in array "days"
  let weekday = days[dt - 1];
  // assign month to name in array "month"
  let monthName = months[mon];
  // returns last 2 digits of year
  let yearShort = y.toString().slice(2);
  // reruns itself every second

  time.innerText = `${h}:${m}:${s}`;
  dateLong.innerText = `${weekday}, ${d}. ${monthName} ${year}`;
  dateShort.innerText = `${day}.${month}.${yearShort}`;

  setTimeout(uhrzeit, 1000);
}
// starts for first time
uhrzeit();
