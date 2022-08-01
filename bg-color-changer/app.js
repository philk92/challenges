const body = document.body;
const button = document.querySelector("button");
const h1 = document.querySelector("h1");

function randCol() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const a = Math.floor(Math.random() * 10) / 10;
  return `rgba(${r},${g},${b},${a})`;
}

button.addEventListener("click", () => {
  body.style.backgroundColor = randCol(0.5);
  h1.innerText = body.style.backgroundColor;
});

function onload() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const a = Math.floor(Math.random() * 10) / 10;
  let str = `rgba(${r},${g},${b},${a})`;
  body.style.backgroundColor = str;
  h1.innerText = body.style.backgroundColor;
}
