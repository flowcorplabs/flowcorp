$(() => {
    'use-strict';
    
    const navbarCollapse = () => {
        if ($(window).width() > 768) {
            if ($('#flowNav').offset().top > 300) {
                $('#flowNav').addClass('navbar-flow');
            } else {
                $('#flowNav').removeClass('navbar-flow');
            }
        }
    }

    navbarCollapse();

    $(window).scroll(navbarCollapse);
});