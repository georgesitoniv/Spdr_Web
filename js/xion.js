$( document ).ready(function(){
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
});

$(window).scroll(function (){ 
    var navbarHeight = $('.navigation-bar').heigth;
    if($(this).scrollTop () > 50){
        $('.navigation-bar').removeClass('opaque');
    } else{
        $('.navigation-bar').addClass('opaque');
    }
});

$('a[href*="#"]:not([href="#"])').click(function() {
    $("li").removeClass('active');
    $(this).parents('li').addClass('active');
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
        return false;
        }
    }
});