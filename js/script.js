$(document).ready(function () {


$('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
});
$('.parallax-window').parallax({imageSrc: 'img/header/bg.png'});

$(".owl-carousel").owlCarousel({
    loop:true,
    responsiveClass:true,
    center:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
        }
    }
});



$( ".owl-prev").html('<i class="fa fa-angle-left"></i>');
$( ".owl-next").html('<i class="fa fa-angle-right"></i>');
          
});