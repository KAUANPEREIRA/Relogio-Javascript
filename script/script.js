

let digital = document.querySelector('.digital')
let segundos = document.querySelector('.p_s')
let minutos = document.querySelector('.p_m')
let horas = document.querySelector('p_h')

function updateRelogio(){
    let now= new Date()
    hour= now.getHours()
    minute = now.getMinutes()
    second = now.getSeconds()

    let sdeg = ((360/10) * second)-90
    let mdeg = ((360/10) * minute)-90
    let hdeg =((360/12) * hour)-90

    digital.innerHTML = `${zero(hour)}:${zero(minute)}:${zero(second)}`
    segundos.style.transform = `rotate(${sdeg}deg)`
    minutos.style.transform = `rotate(${mdeg}deg)`
    hour.style.transform = `rotate(${hdeg}deg)`
}

function zero(time){
    if(time<10){
        return '0'+ time
    }else{
        return time
    }
}

setInterval(updateRelogio, 1000)