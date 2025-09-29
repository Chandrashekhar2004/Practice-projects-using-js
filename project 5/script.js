const start = document.querySelector('.start')
const stop = document.querySelector('.stop')

let startInterId;

const sayHello = function () {
    console.log("hitesh", Date.now())
}

start.addEventListener('click', function () {
    // interval start
    startInterId = setInterval(sayHello, 2000)
})

stop.addEventListener('click', function () {
    // interval stop
    clearInterval(startInterId)
})
