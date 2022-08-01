const body = document.body;
const button = document.querySelector("button");
const h1 = document.querySelector("h1");

function randCol() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = Math.floor(Math.random() * 6) / 10 + 0.5;
  return `rgba(${r},${g},${b},${a})`;
}

button.addEventListener("click", () => {
  body.style.backgroundColor = randCol();
  h1.innerText = body.style.backgroundColor;
});

function onload() {
  body.style.backgroundColor = randCol();
  h1.innerText = body.style.backgroundColor;
}
