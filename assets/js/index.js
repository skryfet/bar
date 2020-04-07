let sphere = document.querySelector('.sphere')
let hello = document.querySelector('.hello')

function enter(form) {
    let time = 5,
        login = ', ' + form.querySelector('.login').value
        
    sphere.style.transform = 'scale(5)'

    let interval = (time / login.length) * 100

    for (let i = 0; i < login.length; i++) {
        setTimeout(() => hello.innerHTML += login[i], (i + 1) * interval)
    }
}

document.onmousemove = (e) => rotateSphere(e);
let startpos
function rotateSphere(e) {
    let pos = { x: e.clientX, y: e.clientY }
    startpos = startpos ? startpos : { x: pos.x, y: pos.y }
    console.log(pos, startpos)
    sphere.style.backgroundPositionX = -(startpos.x - pos.x) + 'px'
    sphere.style.backgroundPositionY = -(startpos.y - pos.y) + 'px'

}