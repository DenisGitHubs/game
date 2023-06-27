import { levelStr } from "./levelChoice.js";
export function gamePageLvl() {
    const levelEl = document.querySelector('body');
const levelHtml = `
<div><h3>Здесь будет игра сложности ${window.user.level}</h3></div>
<button id="back-button">Вернутся назад</button>`;

levelEl.innerHTML = levelHtml;
document.getElementById("back-button").addEventListener('click', () => {
    levelStr()
})
}
