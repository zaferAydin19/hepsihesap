// SCROL NAVBAR ADD STICKY

$(window).on('scroll', function () {
    if ($(this).scrollTop() > 10) {
        $('header').addClass('sticky');
    } else {
        $('header').removeClass('sticky');
    }
});