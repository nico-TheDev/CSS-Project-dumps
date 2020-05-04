console.log('working');

//when click a button it adds up to the screen
let buttons,inputBar,clear,equal;
let operators = [1,2,3,7,11,15,17,18]

inputBar = document.querySelector('.calculator__input');
clear = document.querySelector('.clear');
equal = document.querySelector('.equal');

console.log(clear);

buttons = document.getElementsByTagName('button');
console.log(buttons);
for(let i = 1; i < buttons.length - 1; i++){
    buttons[i].addEventListener('click',function(){
        if (inputBar.value === ''){
            operators.forEach(function(item){
                buttons[item].disabled = true;
            });
        }
        else{
            operators.forEach(function(item){
                buttons[item].disabled = false;
            });
        }

        inputBar.value += buttons[i].dataset.input;
        
    })
}
clear.addEventListener('click',function(){
    inputBar.value = '';
});


equal.addEventListener('click',function(){
    if (inputBar.value === ''){
        for (let i = 0; i < operators.length; i++){
            buttons[i].disabled = true;
        }
    }
    else{
        inputBar.value = eval(inputBar.value);
    }
});