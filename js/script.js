const iconMenu = document.querySelector('.icon-menu'),
      menuBody = document.querySelector('.menu__body');
function ibg(){
    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
        ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}    
ibg();
iconMenu.addEventListener('click',()=>{
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
    document.body.toggle('lock');
});

if($('.slider__body').length>0){
    $('.slider__body').slick({
        dots:true,
        arrows:false,
        accessibility:false,
        slideToShow:1,
        autoplaySpeed: 3000,
        adaptiveHeight:true,
        nextArrow:'<button type="button" class="slick-next"></button>',
        prevArrow:'<button type="button" class="slick-prev"></button>',
        responsive: [{
            breakpoint: 768,
            settings:{

            }
        }]
    })
}