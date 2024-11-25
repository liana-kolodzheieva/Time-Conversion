const karas = 97200;
const skyphos = 7380;
const kiaf = 840;
const drop = 4;

const day = 86400;
const hour = 3600;
const min = 60;
const sec = 1;

function calculation() {
  const day = parseInt(document.getElementById("day").value) || 0;
  const hour = parseInt(document.getElementById("hour").value) || 0;
  const min = parseInt(document.getElementById("min").value) || 0;
  const sec = parseInt(document.getElementById("sec").value) || 0;
  console.log(day);
  console.log(hour);
  console.log(min);
  console.log(sec);

  //Проверка если время меньше нуля
  if (day < 0 || hour < 0 || min < 0 || sec < 0) {
    alert(
      "Время не может быть отрицательным, пожалуйста введите правильное время"
    );
  } else {
    //конвртация в секунды
    const dayToSec = day * 24 * 60 * 60;
    // console.log(dayToSec)
    const hourToSec = hour * 60 * 60;
    // console.log(hourToSec)
    const minToSec = min * 60;
    // console.log(minToSec)

    // сума секунд
    let summ = hourToSec + minToSec + sec + dayToSec;
    console.log(summ);

    //конвертация

    conversion(summ);
    // document.getElementById('karas'). =
  }
}

function conversion(summ) {
  summ = calculateTime(summ, karas, "karas");
  summ = calculateTime(summ, skyphos, "skyphos");
  summ = calculateTime(summ, kiaf, "kiaf");

  //капля
  let dropNum = summ / drop;
  // console.log(dropNum)
  document.getElementById("drop").value = dropNum;
}

function calculateTime(summ, mesUnit, elementId) {
  let value = Math.floor(summ / mesUnit);
  console.log(value);
  document.getElementById(elementId).value = value;
  let rimmed = value * mesUnit;
  summ = summ - rimmed;
  // console.log(summ + " si");
  return summ;
}

function raplasingTimes() {
  //наще время
  const day = document.getElementById("day").value;
  const hour = document.getElementById("hour").value;
  const min = document.getElementById("min").value;
  const sec = document.getElementById("sec").value;
  //Архей
  const karas = document.getElementById("karas").value;
  const skypchos = document.getElementById("skyphos").value;
  const kiaf = document.getElementById("kiaf").value;
  const drop = document.getElementById("drop").value;

  //перезапизаписывание данных
  document.getElementById("dayText").innerHTML = "карас(а)";
  document.getElementById("hourText").innerHTML = "скифос(а)";
  document.getElementById("minText").innerHTML = "киаф(а)";
  document.getElementById("secText").innerHTML = "капля(и)";

  document.getElementById("day").value = karas;
  document.getElementById("hour").value = skypchos;
  document.getElementById("min").value = kiaf;
  document.getElementById("sec").value = drop;

  document.getElementById("karasText").innerHTML = "д.";
  document.getElementById("skyphosText").innerHTML = "ч.";
  document.getElementById("kiafText").innerHTML = "мин.";
  document.getElementById("dropText").innerHTML = "сек.";

  document.getElementById("karas").value = day;
  document.getElementById("skyphos").value = hour;
  document.getElementById("kiaf").value = min;
  document.getElementById("drop").value = sec;

  document.getElementById(
    "inline"
  ).innerHTML = `<button id="swap" onclick="raplasingTimesBack()"><b>⇅</b></button>`;
  document.getElementById(
    "butt"
  ).innerHTML = `<button onclick="CullToOurTime()">Конвертировать</button>`;
}

function CullToOurTime() {
  const karas = document.getElementById("day").value;
  const skyphos = document.getElementById("hour").value;
  const kiaf = document.getElementById("min").value;
  const drop = document.getElementById("sec").value;

  const karasToSec = karas * 97200;
  const skypchosToSec = skyphos * 7380;
  const kiafToSec = kiaf * 840;
  const dropToSec = drop * 4;

  let summ = karasToSec + skypchosToSec + kiafToSec + dropToSec;
  console.log(summ);

  convToOurTime(summ);
}

function convToOurTime(summ) {
  summ = calculateTime(summ, day, "karas");
  summ = calculateTime(summ, hour, "skyphos");
  summ = calculateTime(summ, min, "kiaf");

  let SecNum = summ / sec;
  document.getElementById("drop").value = SecNum;
}

function raplasingTimesBack() {
  //наще время
  const karas = document.getElementById("day").value;
  const skypchos = document.getElementById("hour").value;
  const kiaf = document.getElementById("min").value;
  const drop = document.getElementById("sec").value;
  //Архей
  const day = document.getElementById("karas").value;
  const hour = document.getElementById("skyphos").value;
  const min = document.getElementById("kiaf").value;
  const sec = document.getElementById("drop").value;

  //

  document.getElementById("karasText").innerHTML = "карас(а)";
  document.getElementById("skyphosText").innerHTML = "скифос(а)";
  document.getElementById("kiafText").innerHTML = "киаф(а)";
  document.getElementById("dropText").innerHTML = "капля(и)";

  document.getElementById("karas").value = karas;
  document.getElementById("skyphos").value = skypchos;
  document.getElementById("kiaf").value = kiaf;
  document.getElementById("drop").value = drop;

  document.getElementById("dayText").innerHTML = "д.";
  document.getElementById("hourText").innerHTML = "ч.";
  document.getElementById("minText").innerHTML = "мин.";
  document.getElementById("secText").innerHTML = "сек.";

  document.getElementById("day").value = day;
  document.getElementById("hour").value = hour;
  document.getElementById("min").value = min;
  document.getElementById("sec").value = sec;

  document.getElementById(
    "inline"
  ).innerHTML = `<button id="swap" onclick="raplasingTimes()"><b>⇅</b></button>`;
}

function cleaningForm() {
  document.getElementById("day").value = null;
  document.getElementById("hour").value = null;
  document.getElementById("min").value = null;
  document.getElementById("sec").value = null;
  document.getElementById("karas").value = null;
  document.getElementById("skyphos").value = null;
  document.getElementById("kiaf").value = null;
  document.getElementById("drop").value = null;
}
