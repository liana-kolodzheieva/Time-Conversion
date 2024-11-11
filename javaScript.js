const karas = 97200;
const skyphos = 7203
const kiaf = 840
const drop = 4
function calculation() {
    const day = document.getElementById("day").value
    const hour = document.getElementById("hour").value
    const min = document.getElementById("min").value
    const sec = document.getElementById("sec").value
    // console.log(hour)
    // console.log(min)
    // console.log(sec)

    //конвртация в секунды
    const dayToSec = day * 24 * 60 * 60
    // console.log(dayToSec)
    const hourToSec = hour * 60 * 60
    // console.log(hourToSec)
    const minToSec = min * 60
    // console.log(minToSec)
    const secToInt = sec * 1

    // сума секунд
    let summ = hourToSec + minToSec + secToInt + dayToSec
    console.log(summ)

    //конвертация

    conversion(summ)
    // document.getElementById('karas'). = 
}


function conversion(summ) {
    //Карас
    let karasNum = summ / karas
    // console.log(karasNum)
    karasNum = Math.floor(karasNum)
    document.getElementById('karas').value = karasNum
    // console.log(karasNum)
    let rimmed = karasNum * karas
    summ = summ - rimmed
    // console.log(summ + " si")

    //Скифос
    let skyphosNum = summ / skyphos
    // console.log(skyphosNum)
    skyphosNum = Math.floor(skyphosNum)
    document.getElementById('skyphos').value = skyphosNum
    let rimmed2 = skyphosNum * skyphos
    summ = summ - rimmed2
    // console.log(summ)

    //Киаф
    let kiafNum = summ / kiaf
    // console.log(kiafNum)
    kiafNum = Math.floor(kiafNum)
    // console.log(kiafNum)
    document.getElementById('kiaf').value = kiafNum
    let rimmed3 = kiafNum * kiaf
    console.log(rimmed3)
    summ = summ - rimmed3
    console.log(summ)

    //капля
    let dropNum = summ / drop
    // console.log(dropNum)
    document.getElementById('drop').value = dropNum
}
