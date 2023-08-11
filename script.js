$(function() {
    $('#slider-list').owlCarousel({
        items:7,
        autoplay:true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:true
    });
})

$(function() {
    $('#design-slider-list').owlCarousel({
        items:3,
        autoplay:true,
        loop:true,
        dots:false,
        autoplayHoverPause:true,
        margin : 30,
        nav    : true,
        smartSpeed :900,
        mouseDrag:false,
        navText: ['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
 
})
$(function() {
    $('.designs').owlCarousel({
        items:1,
        autoplay:false,
        autoplayHoverPause:true,
        navText: false,
        mouseDrag:false,
        dots:true
    });
 
})
$(function () {

    // animate on scroll
    new WOW().init();
});
$(function () {

    $("#diplomas").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }

    });
});
// Show/Hide transparent black navigation
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    nav.classList.add('top-nav');
  } else {
    nav.classList.remove('top-nav');
  }
});
