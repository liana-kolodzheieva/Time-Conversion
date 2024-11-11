const karas = 97200;
const skyphos = 7203
const kiaf = 840
const drop = 4
function calculation() {
    const day = parseInt(document.getElementById("day").value) || 0
    const hour = parseInt(document.getElementById("hour").value) || 0
    const min = parseInt(document.getElementById("min").value) || 0
    const sec = parseInt(document.getElementById("sec").value) || 0
    console.log(day)
    console.log(hour)
    console.log(min)
    console.log(sec)

    //конвртация в секунды
    const dayToSec = day * 24 * 60 * 60
    // console.log(dayToSec)
    const hourToSec = hour * 60 * 60
    // console.log(hourToSec)
    const minToSec = min * 60
    // console.log(minToSec)

    // сума секунд
    let summ = hourToSec + minToSec + sec + dayToSec
    console.log(summ)

    //конвертация

    conversion(summ)
    // document.getElementById('karas'). = 
}


function conversion(summ) {
    summ = calculateTime(summ, karas, 'karas')
    summ = calculateTime(summ, skyphos, 'skyphos')
    summ = calculateTime(summ, kiaf, 'kiaf')

    //капля
    let dropNum = summ / drop
    // console.log(dropNum)
    document.getElementById('drop').value = dropNum
}

function calculateTime(summ, mesUnit, elementId) {
    let value = Math.floor(summ / mesUnit)
    console.log(value)
    document.getElementById(elementId).value = value
    let rimmed = value * mesUnit
    summ = summ - rimmed
    console.log(summ + " si")
    return summ;
}
