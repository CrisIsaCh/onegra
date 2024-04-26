const btnLeft = document.querySelector('.btn-left'),
    btnRight = document.querySelector('.btn-right'),
    slider = document.querySelector('#slider')
console.log(slider);
sliderSection = document.querySelectorAll(".slider-section");
console.log(sliderSection);


btnLeft.addEventListener('click', moveToLeft);
btnRight.addEventListener('click', moveToRight);


let operacion =0;
let widthImg=100/sliderSection.length;
console.log(widthImg);

function moveToRight() {
    console.log(operacion);
    operacion=operacion+widthImg
    console.log(operacion);
    if (operacion/100==1) {
        slider.style.transform=`translateX(0%)`;       
        operacion=0;
        slider.style.transition="none"
        return
    }
    
    slider.style.transform=`translateX(-${operacion}%)`;
    slider.style.transition="all ease .9s"

}

function moveToLeft() {
    console.log(operacion)
    operacion=operacion-widthImg
    console.log(operacion);
    
    if (operacion==-widthImg) {
        console.log(-(widthImg));
        console.log((sliderSection.length-1)*(widthImg));
        slider.style.transform=`translateX(-${(sliderSection.length-1)*(widthImg)}%)`;
        operacion=(sliderSection.length-1)*(widthImg)
        slider.style.transition="none"
        return;        
    }
    
    slider.style.transform=`translateX(-${operacion}%)`;
    slider.style.transition="all ease .9s"

}
setInterval(() => {
   moveToRight() 
}, 5000);