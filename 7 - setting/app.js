/*
$green:#2ecc71;
$red:#c0392b;
$blue:#2980b9;
$purple:#8e44ad;
$orange:#d35400;
$dark:#2c3e50;
$light:#ecf0f1;
$mid:#bdc3c7;

 */

 let screen = document.querySelector('.screen');
 let screenBtn = document.querySelector('.screen__btn');
 let screenIcon = document.querySelector('.screen__icon');

//  THEME 
let darkBtn =  document.querySelector('.dark');
let lightBtn = document.querySelector('.light');
let midBtn = document.querySelector('.mid');

// COLOR
let greenBtn = document.querySelector('.green');
let blueBtn = document.querySelector('.blue');
let redBtn = document.querySelector('.red');
let purpleBtn = document.querySelector('.purple');
let orangeBtn = document.querySelector('.orange');

darkBtn.addEventListener('click',() =>{
   screen.classList.toggle('darkState');
});

lightBtn.addEventListener('click',() =>{
    screen.classList.toggle('lightState');
});

midBtn.addEventListener('click',() =>{
    screen.classList.toggle('midState');

});

greenBtn.addEventListener('click',() =>{
        screen.classList.toggle('greenState');
});
redBtn.addEventListener('click',() =>{
        screen.classList.toggle('redState');
});
blueBtn.addEventListener('click',() =>{
        screen.classList.toggle('blueState');
});
purpleBtn.addEventListener('click',() =>{
        screen.classList.toggle('purpleState');
});
orangeBtn.addEventListener('click',() =>{
        screen.classList.toggle('orangeState');
});