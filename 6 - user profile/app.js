
let themeBtn = document.querySelector('.bg__theme');

themeBtn.addEventListener('click',function(){
    document.querySelector('.header').classList.toggle('dark');
    document.querySelector('.profile__user').classList.toggle('dark');
})