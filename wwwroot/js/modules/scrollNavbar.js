// assets/js/modules/scrollNavbar.js

export function setupStickyNavbar(selector = 'header', threshold = 10) {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > threshold) {
            $(selector).addClass('sticky');
        } else {
            $(selector).removeClass('sticky');
        }
    });
}
