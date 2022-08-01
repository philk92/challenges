const code = document.querySelector("#code");
const keys = document.querySelector("#keys");
const keyCodes = document.querySelector("#keyCodes");
const keyPress = window.addEventListener("keydown", function (key) {
  console.log(key);
  code.innerText = key.code;
  keys.innerText = key.key;
  keyCodes.innerText = key.keyCode;
});
