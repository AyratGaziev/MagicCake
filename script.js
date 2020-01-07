'use strict'

let cakeItem = document.querySelectorAll('.cake-item'),
    weightWrapInner = document.querySelector('.weight-wrap-inner'),
    cakeName = document.querySelector('.cake-name'),
    weight = document.querySelector('#weight'),
    nextBtnWeight = document.querySelector('#next-btn-weight'),
    alertText = document.querySelector(".alert-text"),
    xBtn = document.querySelector('.x-btn'),
    cakeFilling = document.querySelector('.cake-filling'),
    fruit = document.querySelector('.fruit'),
    fruitInnerWrap = document.querySelector('.fruit-inner-wrap'),
    checkboxes = document.querySelectorAll('.checkbox'),
    layersItem = document.querySelectorAll('.layers-item'),
    nextBtnFilling = document.querySelector('#next-btn-filling'),
    checkboxRightFat = document.querySelectorAll('.checkbox-right-fat'),
    checkboxRightThin = document.querySelectorAll('.checkbox-right-thin'),
    fillingFatWrap = document.querySelector('.filling-fat-wrap'),
    fillingThinWrap = document.querySelector('.filling-thin-wrap'),
    layersColorFat = document.querySelectorAll('.layers-color-fat'),
    layersColorThin = document.querySelectorAll('.layers-color-thin'),
    filling = document.querySelector('.filling'),
    title = document.querySelector('.title'),
    cakeOrder = document.querySelector('.cake-order'),
    layers = document.querySelector('.layers'),
    next = document.querySelector('.next'),
    submitCakeWrap = document.querySelector('.submit-cake-wrap'),
    orderSum = document.querySelector('.order-sum'),

    order = {
        check: {
            sweet: 0,
            marshmallows: 0,
            strawberry: 0,
            raspberries: 0
        },
        fillingFat: {
            classic: 0,
            choco: 0
        },
        fillingThin: {
            mousse: 0,
            jelly: 0
        }
     };
    

cakeItem[0].addEventListener('click', function(){    
    cakeItem[1].classList.add('hide');
    cakeItem[2].classList.add('hide');
    cakeName.style.display = 'none';
    weightWrapInner.classList.remove('hide');
    nextBtnWeight.addEventListener('click', () => {
        if (weight.value >= 1000 && weight.value != isNaN(NaN)) {
            cakeItem[0].classList.add('hide');
            weightWrapInner.classList.add('hide');
            order.cakeWeight = +weight.value;
            console.log(order.cakeWeight);
            cakeFilling.classList.remove('hide');
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

    let fruitChange = ({ target }) => {
        if (target && target.classList.contains('checkbox')) {
            checkboxes.forEach((el, i) => {
               if (target === el) {
                    layersItem[i].classList.toggle('hide',  !el.checked);
               }
            });   
        };
    }

    fruitInnerWrap.addEventListener('change', fruitChange)

    let changeInnerFat = ({target}) => {
        if (target && target.classList.contains('checkbox-right-fat')) {
            checkboxRightFat.forEach((el, i) => {
                if(target === el && el.checked === true) {
                    if ( i === 0 ) {
                        console.log(i);
                        layersColorFat.forEach(element => {
                            element.style.backgroundColor = '#D08657';
                        });
                        //order.fillingFat.choco = true;
                    } else if (i === 1) {
                        console.log(i);
                        layersColorFat.forEach(element => {
                            element.style.backgroundColor = '#FBE67D';
                        });
                        //order.fillingFat.classic = true;
                    };
                };
            });
        };
    };

    let changeInnerThin = ({target}) => {
        if (target && target.classList.contains('checkbox-right-thin')) {
            checkboxRightThin.forEach((el, i) => {
                if(target === el && el.checked === true) {
                    if ( i === 0 ) {
                        console.log(i);
                        layersColorThin.forEach(element => {
                            element.style.backgroundColor = '#FF334A';
                        });
                        //order.fillingThin.mousse = true;
                    } else if (i === 1) {
                        console.log(i);
                        layersColorThin.forEach(element => {
                            element.style.backgroundColor = '#89333E';
                        });
                        //order.fillingThin.jelly = true;
                    };
                };
            });
        };
    };

    fillingFatWrap.addEventListener('change', changeInnerFat);
    fillingThinWrap.addEventListener('change', changeInnerThin);


    let nextBtnFill = () => {
        checkboxes.forEach((elem, i) => {
            if (elem.checked) {               
                if (i === 0) {
                    order.check.sweet = 150;
                } else if (i === 1) {
                    order.check.marshmallows = 120;
                } else if (i === 2) {
                    order.check.strawberry = 300;
                } else if (i === 3) {
                    order.check.raspberries = 250;
                };                
            };
        });
        checkboxRightFat.forEach((elem, i) => {
            if (elem.checked) {
                if (i === 0) {
                    order.fillingFat.choco = 150;
                } else if (i === 1) {
                    order.fillingFat.classic = 50;
                };
            }; 
        });
        checkboxRightThin.forEach((elem, i) => {
            if (elem.checked) {
                if (i === 0) {
                    order.fillingThin.mousse = 50;
                } else if (i === 1) {
                    order.fillingThin.jelly = 100;
                };
            }; 
        });
        fruit.classList.add('hide');
        filling.classList.add('hide');
        cakeOrder.classList.remove('hide');
        layers.style.marginRight = '90px';
        next.classList.add('hide');
        submitCakeWrap.classList.remove('hide');

        let cakeOrderSum = () => {
            let weight = order.cakeWeight * 650 / 1000;            
            let sum = Math.round(weight);
            function orderObjSelect (obj) {
                for (let key in obj) {
                    let value = obj[key]
                    if (typeof value == 'object') {
                        for (let key2 in value) {
                            if (value[key2] > 0) {
                                sum+=value[key2]
                                console.log(`Сумма увеличена на ${value[key2]} руб`)
                            }
                        }
                    }
                }
                return sum
            }
            orderObjSelect(order);
            return sum
            }
            

        orderSum.textContent = `Ваш заказ на сумму ${cakeOrderSum()} рублей`;


        // console.log(order);

    }
    
    nextBtnFilling.addEventListener('click', nextBtnFill);


});

