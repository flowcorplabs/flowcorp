$(() => {
    'use-strict';
    
    const navbarCollapse = () => {
        if ($(window).width() > 768) {
            const nav = $('#flowNav');
            nav.toggleClass('navbar-flow', nav.offset().top > 300);
        }
    }

    navbarCollapse();

    $(window).scroll(navbarCollapse);
});