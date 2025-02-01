const btn_do = document.querySelector(`#btn1`);
const btn_re = document.querySelector(`#btn2`);
const btn_mi = document.querySelector(`#btn3`);
const btn_fa = document.querySelector(`#btn4`);
const btn_sol = document.querySelector(`#btn5`);
const btn_la = document.querySelector(`#btn6`);
const btn_si = document.querySelector(`#btn7`);
const btn_do2 = document.querySelector(`#btn8`);
const btn_re2 = document.querySelector(`#btn9`);
const btn_fa2 = document.querySelector(`#btn10`);
const btn_sol2 = document.querySelector(`#btn11`);
const btn_la2 = document.querySelector(`#btn12`);
const music_do = document.querySelector(`#do`);
console.log(music_do);

// son Do

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

// son Re

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
const music_mi = document.querySelector(`#mi`);
const music_fa = document.querySelector(`#fa`);
const music_sol = document.querySelector(`#sol`);
const music_la = document.querySelector(`#la`);
const music_si = document.querySelector(`#si`);
const music_do2 = document.querySelector(`#do2`);

// configuration du son Mi

document.addEventListener(`keydown`, (e) => {
  if (e.key.toLocaleLowerCase() === `g`) {
    btn_mi.style.backgroundColor = `blue`;
    music_mi.play();
    music_mi.currentTime = 0;
  }
});
document.addEventListener(`keyup`, (e) => {
  if (e.key.toLocaleLowerCase() === `g`) {
    btn_mi.style.backgroundColor = `#f0f0f0`;
    music_mi.pause();
    music_mi.currentTime = 0;
  }
});

// ...son Fa

document.addEventListener(`keydown`, (e) => {
  if (e.key.toLocaleLowerCase() === `h`) {
    btn_fa.style.backgroundColor = `red`;
    music_fa.play();
    music_fa.currentTime = 0;
  }
});
document.addEventListener(`keyup`, (e) => {
  if (e.key.toLocaleLowerCase() === `h`) {
    btn_fa.style.backgroundColor = `#f0f0f0`;
    music_fa.pause();
    music_fa.currentTime = 0;
  }
});

// configuration du son Sol

document.addEventListener(`keydown`, (e) => {
  if (e.key.toLocaleLowerCase() === `j`) {
    btn_sol.style.backgroundColor = `yellow`;
    music_sol.play();
    music_sol.currentTime = 0;
  }
});
document.addEventListener(`keyup`, (e) => {
  if (e.key.toLocaleLowerCase() === `j`) {
    btn_sol.style.backgroundColor = `#f0f0f0`;
    music_sol.pause();
    music_sol.currentTime = 0;
  }
});

// son La

document.addEventListener(`keydown`, (e) => {
  if (e.key.toLocaleLowerCase() === `k`) {
    btn_la.style.backgroundColor = `chocolate`;
    music_la.play();
    music_la.currentTime = 0;
  }
});
document.addEventListener(`keyup`, (e) => {
  if (e.key.toLocaleLowerCase() === `k`) {
    btn_la.style.backgroundColor = `#f0f0f0`;
    music_la.pause();
    music_la.currentTime = 0;
  }
});

// son Si
document.addEventListener(`keydown`, (e) => {
  if (e.key.toLocaleLowerCase() === `l`) {
    btn_si.style.backgroundColor = `green`;
    music_si.play();
    music_si.currentTime = 0;
  }
});
document.addEventListener(`keyup`, (e) => {
  if (e.key.toLocaleLowerCase() === `l`) {
    btn_si.style.backgroundColor = `#f0f0f0`;
    music_si.pause();
    music_si.currentTime = 0;
  }
});

// le Do#
document.addEventListener(`keydown`, (e) => {
  if (e.key.toLocaleLowerCase() === `r`) {
    btn_do2.style.backgroundColor = `gold`;
    music_do2.play();
    music_do2.currentTime = 0;
  }
});
document.addEventListener(`keyup`, (e) => {
  if (e.key.toLocaleLowerCase() === `r`) {
    btn_do2.style.backgroundColor = `#f0f0f0`;
    music_do2.pause();
    music_do2.currentTime = 0;
  }
});

// le Re#
const music_re2 = document.querySelector(`#re2`);
document.addEventListener(`keydown`, (e) => {
  if (e.key.toLocaleLowerCase() === `t`) {
    btn_re2.style.backgroundColor = `cyan`;
    music_re2.play();
    music_re2.currentTime = 0;
  }
});
document.addEventListener(`keyup`, (e) => {
  if (e.key.toLocaleLowerCase() === `t`) {
    btn_re2.style.backgroundColor = `#f0f0f0`;
    music_re2.pause();
    music_re2.currentTime = 0;
  }
});
console.log(music_do2, music_re2);

// le son Fa#
const music_fa2 = document.querySelector(`#fa2`);
document.addEventListener(`keydown`, (e) => {
  if (e.key.toLocaleLowerCase() === `u`) {
    btn_fa2.style.backgroundColor = `salmon`;
    music_fa2.play();
    music_fa2.currentTime = 0;
  }
});
document.addEventListener(`keyup`, (e) => {
  if (e.key.toLocaleLowerCase() === `u`) {
    btn_fa2.style.backgroundColor = `#f0f0f0`;
    music_fa2.pause();
    music_fa2.currentTime = 0;
  }
});



