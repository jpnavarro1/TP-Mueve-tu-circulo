window.onload = function() {
    const circle = document.querySelector('.circle')
    const upArrow = document.querySelector('.up')
    const downArrow = document.querySelector('.down')
    const leftArrow = document.querySelector('.left')
    const rightArrow = document.querySelector('.right')
    const redBtn = document.querySelector('.red')
    const greenBtn = document.querySelector('.green')
    const blueBtn = document.querySelector('.blue')

    let yPos = circle.offsetTop
    let xPos = circle.offsetLeft
    let movSpeed = 20

    function moveUp() {
        yPos -= movSpeed
        circle.style.top = yPos + 'px'
    }

    function moveDown() {
        yPos += movSpeed
        circle.style.top = yPos + 'px'
    }

    function moveLeft() {
        xPos -= movSpeed
        circle.style.left = xPos + 'px'
    }

    function moveRight() {
        xPos += movSpeed
        circle.style.left = xPos + 'px'
    }

    function whichKey(event) {
        switch (event.key) {
            case 'w':
            case 'ArrowUp':
                moveUp()
                break
            case 'a':
            case 'ArrowLeft':
                moveLeft()
                break
            case 's':
            case 'ArrowDown':
                moveDown()
                break
            case 'd':
            case 'ArrowRight':
                moveRight()
                break
        }
    }

    redBtn.onclick = function() {
        circle.style.backgroundColor = 'red'
    }

    greenBtn.onclick = function() {
        circle.style.backgroundColor = 'green'
    }

    blueBtn.onclick = function() {
        circle.style.backgroundColor = 'blue'
    }

    upArrow.onclick = moveUp
    downArrow.onclick = moveDown
    leftArrow.onclick = moveLeft
    rightArrow.onclick = moveRight
    document.addEventListener('keydown', whichKey)
}