const sechand = document.querySelector("[data-second]")
const minhand = document.querySelector("[data-minute]")
const hourhand = document.querySelector("[data-hour]")
function setClock(){
    
    console.log("uh huh")
    const currentDate = new Date()
    let seconds = currentDate.getSeconds() / 60
    let minutes = currentDate.getMinutes()
    let hours = currentDate.getHours()
    console.log(seconds)
    setRotation(sechand, seconds)
    setRotation(minhand, minutes)
    setRotation(hourhand, hours)
}

function setRotation(hand, rotation){
    hand.style.setProperty('--rotation', rotation * 360)
}

setInterval(setClock, 1000)
setClock()
