'use strict'

let cakeItem = document.querySelectorAll('.cake-item'),
    weightWrapInner = document.querySelector('.weight-wrap-inner'),
    cakeName = document.querySelector('.cake-name'),
    weight = document.querySelector('#weight'),
    nextBtn = document.querySelector('.next-btn'),
    alertText = document.querySelector(".alert-text"),
    xBtn = document.querySelector('.x-btn'),
    order = {};

cakeItem[0].addEventListener('click', function(){    
    cakeItem[1].classList.add('hide');
    cakeItem[2].classList.add('hide');
    cakeName.style.display = 'none';
    weightWrapInner.classList.remove('hide');
    nextBtn.addEventListener('click', () => {
        if (weight.value >= 1000 && weight.value != isNaN(NaN)) {
            cakeItem[0].classList.add('hide');
            weightWrapInner.classList.add('hide');
            order.cakeWeight = +weight.value;
            console.log(order.cakeWeight);
        } else {
            console.log('Введите вес (минимальный заказ 1000 грамм)')
            let pos = -400;
            let frame = setInterval(alertAni, 1);
            function alertAni() {      
                pos += 40;          
                if (pos >= 370) {
                    clearInterval(frame);
                } else {                    
                    alertText.style.left = pos + "px";                                      
                };  
            };             
                        
        };
        
        
    });
    xBtn.addEventListener('click', () => {
        let pos = 360;
        let frame = setInterval(alertAni, 1);
            function alertAni() {
                pos-=40;
                if (pos <=-460) {
                    clearInterval(frame)
                } else {
                    alertText.style.left = pos + 'px' 
                };
            };
    });

});

