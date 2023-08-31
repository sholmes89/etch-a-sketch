const GridContainer = document.querySelector('#GridContainer');
const Btn = document.querySelector('#Btn')

function randomNum() {
    return Math.floor(Math.random() * 255)
}

function darken(x) {
    var result = x - 25.5;
    return result < 0 ? 0 : result;
}

function createGrid(gridSize) {
    let basis = 100 / gridSize;
    GridContainer.innerHTML = ''
    for (let i = 1; i <= (gridSize * gridSize); i++) {
        let square = document.createElement('div');
        square.style.cssText = `flex: 1 1 ${basis}%;`;
        square.addEventListener('mouseenter', () => {
            if (square.style['background']) {
                let bgProps = square.style['background'].substring(4)
                bgProps = bgProps.substring(0, bgProps.length - 1).split(',')
                square.style.cssText = `flex: 1 1 ${basis}%; background: rgb(${darken(bgProps[0])},${darken(bgProps[1])},${darken(bgProps[2])})`
            } else {
                square.style.cssText = `flex: 1 1 ${basis}%; background: rgb(${randomNum()},${randomNum()},${randomNum()})`
            }
        })
        GridContainer.appendChild(square)
    }
}

createGrid(16)

Btn.addEventListener('click', () => {
    var userInput = window.prompt('What sized grid would you like? (max 100)')
    if (!userInput) {return null}
    while (userInput > 100) {
        userInput = window.prompt('What sized grid would you like? (max 100)')
    }
    createGrid(userInput)
})