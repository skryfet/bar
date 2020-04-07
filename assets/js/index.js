let sphere = document.querySelector('.sphere')
let hello = document.querySelector('.hello')
let listener = document.onmousemove = (e) => rotateSphere(e);
let center = { x: innerWidth / 2, y: innerHeight / 2 }
let dontMove = false


function enter(form) {
    let time = 5,
        login = form.querySelector('.login').value,
        message = ` to home, ${login}`


    document.querySelector('.login').disabled = true
    document.querySelector('.login-btn').disabled = true

    dontMove = true

    sphere.style.backgroundPositionX = `calc(50% + ${-(center.x)}px)`
    sphere.style.backgroundPositionY = `calc(50% + ${-(center.y)}px)`

    sphere.style.transform = `translate(-50%, -50%) scale(${innerWidth / 480 * 1.5})`

    let interval = (time / message.length) * 100

    for (let i = 0; i < message.length; i++) {
        setTimeout(() => hello.innerHTML += message[i], (i + 1) * interval)
    }

    sphere.style.backgroundPosition = 'center center',
        setTimeout(() => (
            sphere.style.transition = 'background 0s ease-out, transform 0s',
            sphere.style.transform = 'translate(-50%, -50%) scale(1.5)',
            sphere.style.backgroundRepeat = 'no-repeat',
            sphere.style.backgroundSize = 'cover',
            dontMove = false
        ), time * 1000)
    setTimeout(() => {
        sphere.style.transition = 'background .4s ease-out'
    }, time * 1000 + 1)

}


function rotateSphere(e) {
    if (dontMove) return false;
    let pos = { x: e.clientX, y: e.clientY },
        center = { x: innerWidth / 2, y: innerHeight / 2 }

    sphere.style.backgroundPositionX = `calc(50% + ${-(center.x - pos.x)}px)`
    sphere.style.backgroundPositionY = `calc(50% + ${-(center.y - pos.y)}px)`
}

let requestfullscreen = () => document.body.requestFullscreen()

window.onresize = checkSize

function checkSize() {
    if (innerHeight == window.screen.height && innerWidth == window.screen.width) document.querySelector('.message').style.display = 'none'
    else document.querySelector('.message').style.display = 'flex'
}
checkSize()