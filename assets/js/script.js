var nextIcon= '<img class="icon-next" src="assets/images/next.svg" width="50px">'
var prevIcon= '<img class="icon-prev" src="assets/images/prev.svg" width="50px">'

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1,
    loop: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    nav:true,
    navElement: 'div',
    navText:[
     prevIcon,
     nextIcon
    ]
  });
});     

$('[data-fancybox]').fancybox({
    youtube : {
        controls : 1,
        showinfo : 1
    }
});