let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let seconds = document.getElementById("seconds");

let setClock = setInterval(() => {
  let dateNow = new Date();
  let hr = dateNow.getHours();
  let min = dateNow.getMinutes();
  let sec = dateNow.getSeconds();

  let calc_hr = hr * 30 + min / 2;
  let calc_min = min * 6 + min / 10;
  let calc_sec = sec * 6;

  hour.style.transform = `rotate(${calc_hr}deg)`;
  minute.style.transform = `rotate(${calc_min}deg)`;
  seconds.style.transform = `rotate(${calc_sec}deg)`;
}, 1000);
