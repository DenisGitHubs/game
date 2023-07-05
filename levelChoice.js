
import { gamePageLvl } from "./game.js";
let levelChoice = 0;
export function levelStr() {
    const levelEl = document.querySelector('body');
const levelHtml = `
<div class="container">
    <div class="container-text"><p>Выбери сложность</p></div>
    <div class="container-level-buttons">
        <div><button class=${levelChoice == 0 ? "buttons-button" : levelChoice == 1 ? "choice-button" : "buttons-button"} id="1">1</button></div>
        <div><button class=${levelChoice == 0 ? "buttons-button" : levelChoice == 2 ? "choice-button" : "buttons-button"} id="2">2</button></div>
        <div><button class=${levelChoice == 0 ? "buttons-button" : levelChoice == 3 ? "choice-button" : "buttons-button"} id="3">3</button></div>
    </div>
    <div class="container-start-button"><button class="start-button" id="start">Старт</button></div>
</div>`
levelEl.innerHTML = levelHtml;

choiceButton(levelChoice)
startButton(levelChoice)

}

function choiceButton() {
    const choiceButtons = document.getElementsByClassName("buttons-button");
    for (const choiceButton of choiceButtons) {
        choiceButton.addEventListener("click", () => {
            levelChoice = choiceButton.id;

            levelStr()
        });
            
        
    }

}
function startButton(levelChoice) {
    document.getElementById("start").addEventListener('click', () => {
        if (levelChoice == 0) {
            alert("Выберете сложность")
            return
        }
        window.user.level = levelChoice

        console.log(window.user.level)
        gamePageLvl()
    })

}