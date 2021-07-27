
let digital = document.querySelector('.digital')
let segundos = document.querySelector('.p_s')
let minutos = document.querySelector('.p_m')
let horas = document.querySelector('p_h')

function updateRelogio(){
    let now= new Date()
    hour= now.getHours()
    minute = now.getMinutes()
    second = now.getSeconds()

    

    digital.innerHTML = `${zero(hour)}:${zero(minute)}:${zero(second)}`
}

function zero(time){
    if(time<10){
        return '0'+ time
    }else{
        return time
    }
}

setInterval(updateRelogio, 1000)