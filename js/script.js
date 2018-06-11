$(document).ready(function () {
    $('.clientsCarusel').owlCarousel({
        loop:true,
        margin:1,
        nav:false,
        center:true,
        dotsEach:3,
        dotData:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        items:1,


    })
    var owl = $('.clientsCarusel');
    owl.owlCarousel();
    // Go to the next item
    $('.section_clients__content_box__aside__button--left').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.section_clients__content_box__aside__button--right').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });

});

$('.owlHeader').owlCarousel({
    loop:true,
    margin:1,
    nav:false,
    center:true,
    dots: true,
    dotsEach:3,
    dotData:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    items:1,

})

$('.section_header__hamburger').click(function () {

    $('.section_header__hamburger__button').toggleClass('is-active');
    $('.section_header__menu').toggleClass('is-hidden');
});
