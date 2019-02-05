function menuLogic() {
    var $header = $('#header');
    var $mobileMenuTrigger = $('.mobile-menu-toggle', $header);
    var $menuBlock = $('.menu', $header);
    var openClass = 'is-open';

    // Toggle main menu.
    $mobileMenuTrigger.on('click', function (e) {
        e.preventDefault();
        $menuBlock.toggleClass(openClass);
    });
}

function menuLogic2() {
    var $header = $('#header');
    var $mobileMenuTrigger = $('.mobile-menu-toggle', $header);
    var $menuBlock = $('.account', $header);
    var openClass = 'is-open-account';

    // Toggle main menu.
    $mobileMenuTrigger.on('click', function (e) {
        e.preventDefault();
        $menuBlock.toggleClass(openClass);
    });
}

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

$(window).on('load', function () {
    menuLogic();
    menuLogic2();
    menuLogicCh();
    popup();
    closePopup();
    tabs();
});