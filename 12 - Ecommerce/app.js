const reviews = document.querySelectorAll('.item__review');
const itemImages = document.querySelectorAll('.item__img');
const itemTitle = document.querySelectorAll('.item__title');
const names = [
    'Shirt of God',
    'Shoes of Mercury',
    'Clothes of the Masses',
    'Sweater of Heat'
]


reviews.forEach(review=>{
    review.textContent = `Reviews(${Math.floor(Math.random() * 100)})`;
});

itemImages.forEach(img=>{
    img.src = `./img/${Math.floor((Math.random() * 6)) + 1}.jpg`
})

itemTitle.forEach(item=>{
    item.firstChild.textContent = names[Math.floor(Math.random() * names.length)];
})

const headerBtns = document.querySelectorAll('.header__btn');
const headerBg = document.querySelectorAll('.header__bg');

for (var i = 0; i < headerBtns.length; i++) {
    headerBtns[i].addEventListener("click", function() {
        (document.querySelector('.selected')) ? document.querySelector('.selected').classList.remove('selected') : '';
        this.classList.add('selected');
        headerBg[i].classList.add('showBg');
    });

} 

const navi = document.querySelector('.mobilenav__list');
const menuBtn = document.querySelector('.menu');

menuBtn.addEventListener('click',()=>{
    navi.classList.toggle('openNav');
});