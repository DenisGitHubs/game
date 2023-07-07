import { levelStr } from "./levelChoice.js";
export function endGame() {
  let el = document.querySelector("body");
  let html = `
    <div div class="end-container container center">
    <img src="./img/win.png" class="end-img" alt="win">
    <div><p class="end-text">Вы выиграли!</p></div>
    <div><p class="text">Затраченное время:</p></div>
    <div><p class="time-result">01.20</p></div>
    <div class="container-start-button"><button class="start-button" id="start">Играть снова</button></div>
    </div>`;
  el.innerHTML = el.innerHTML + html;
  let buttonAgain = document.getElementById("start");
  buttonAgain.addEventListener("click", () => {
    levelStr();
  });
}
