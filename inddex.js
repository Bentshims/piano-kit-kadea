const btn_do = document.querySelector(`#btn1`);
const btn_re = document.querySelector(`#btn2`);
const btn_mi = document.querySelector(`#btn3`);
const btn_fa = document.querySelector(`#btn4`);
const btn_sol = document.querySelector(`#btn5`);
const btn_la = document.querySelector(`#btn6`);
const btn_si = document.querySelector(`#btn7`);
const btn_do2 = document.querySelector(`#btn8`);
const btn_re2 = document.querySelector(`#btn9`);
const btn_la2 = document.querySelector(`#btn10`);
const btn_sol2 = document.querySelector(`#btn11`);
const btn_fa2 = document.querySelector(`#btn12`);
const music_do = document.querySelector(`#do`);
console.log(music_do);
document.addEventListener(`keydown`, (e) => {
  if (e.key.toLowerCase() === `d`) {
    console.log(`press !`);
    btn_do.style.backgroundColor = `orange`;
    music_do.play();
    music_do.currentTime = 0;
  }
});

document.addEventListener(`keyup`, (e) => {
  if (e.key.toLocaleLowerCase() === `d`) {
    console.log(`quit`);
    music_do.pause();
    btn_do.style.backgroundColor = `#f0f0f0`;
  }
});

const music_re = document.querySelector(`#re`);
document.addEventListener(`keydown`, (e) => {
  if (e.key.toLocaleLowerCase() === `f`) {
    btn_re.style.backgroundColor = `antiquewhite`;
    music_re.play();
    music_re.currentTime = 0;
  }
});
document.addEventListener(`keyup`, (e) => {
  if (e.key.toLocaleLowerCase() === `f`) {
    btn_re.style.backgroundColor = `#f0f0f0`;
    music_re.pause();
    music_re.currentTime = 0;
  }
});
