
levelStr()



function levelStr() {
    const levelEl = document.querySelector('body');
const levelHtml = `
<div class="container">
    <div class="container-text"><p>Выбери сложность</p></div>
    <div class="container-level-buttons">
        <div><button class="buttons-button">1</button></div>
        <div><button class="buttons-button">2</button></div>
        <div><button class="buttons-button">3</button></div>
    </div>
    <div class="container-start-button"><button class="start">Старт</button></div>
</div>`
levelEl.innerHTML = levelHtml;
}
