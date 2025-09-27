const clock = document.querySelector('#clock');
// created a clock that updates every second    using setInterval and toLocaleTimeString method
setInterval(function (){
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);