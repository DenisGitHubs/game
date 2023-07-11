import { levelStr } from "./levelChoice.js";
export function endGame(min, sec, win) {
  let el = document.querySelector("body");
  let html = `
    <div div class="end-container container center">
    <img src=${
      win ? "./cards/win.png" : "./cards/dead.png"
    } class="end-img" alt="win">
    <div><p class="end-text">${win ? "Вы выиграли!" : "Вы проиграли!"}</p></div>
    <div><p class="text">Затраченное время:</p></div>
    <div><p class="time-result"></p></div>
    <div class="container-start-button"><button class="start-button" id="start">Играть снова</button></div>
    </div>`;
  el.innerHTML = el.innerHTML + html;
  let time = document.getElementsByClassName("time-result")[0];
  time.textContent =
    (min > 9 ? min : "0" + min) + ":" + (sec > 9 ? sec : "0" + sec);
  let buttonAgain = document.getElementById("start");
  buttonAgain.addEventListener("click", () => {
    levelStr();
  });
}
