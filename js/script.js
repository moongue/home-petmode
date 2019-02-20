function menuLogic() {
    var $header = $('#header');
    var $mobileMenuTrigger = $('.lines', $header);
    var $menuBlock = $('.menu', $header);
    var openClass = 'is-open';

    // Toggle main menu.
    $mobileMenuTrigger.on('click', function (e) {
        e.preventDefault();
        $menuBlock.toggleClass(openClass);
    });
}

// function menuLogic2() {
//     var $header = $('#header');
//     var $mobileMenuTrigger = $('.lines', $header);
//     var $menuBlock = $('.account', $header);
//     var openClass = 'is-open-account';
//
//     // Toggle main menu.
//     $mobileMenuTrigger.on('click', function (e) {
//         e.preventDefault();
//         $menuBlock.toggleClass(openClass);
//     });
// }

function menuLogicCh() {
    var $header = $('#header-ch');
    var $mobileMenuTrigger = $('.lines', $header);
    var $menuBlock = $('.menu', $header);
    var openClass = 'is-open';

    // Toggle main menu.
    $mobileMenuTrigger.on('click', function (e) {
        e.preventDefault();
        $menuBlock.toggleClass(openClass);
    });
}

function closePopup() {
    $.magnificPopup.close();
}

function popup() {
    $('.sign-in').magnificPopup({
        showCloseBtn: false,
        fixedContentPos: true
    });
    $('.sign-up').magnificPopup({
        showCloseBtn: false,
        fixedContentPos: true
    });
}

function tabs() {
    $('.tabs').lightTabs();
}




function slider() {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 1000,
        arrows: true,
        responsive: [
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 624,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}


$(window).on('load', function () {
    menuLogic();
    menuLogicCh();
    popup();
    closePopup();
    tabs();
    slider();
});