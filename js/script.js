function menuLogic () {
    var $header = $('.header');
    var $mobileMenuTrigger = $('.mobile-menu-toggle', $header);
    var $menuBlock = $('.menu', $header);
    var openClass = 'is-open';

    // Toggle main menu.
    $mobileMenuTrigger.on('click', function(e) {
        e.preventDefault();
        $menuBlock.toggleClass(openClass);
    });
}




function popup (){
  $('.sign-in').magnificPopup();
  $('.sign-up').magnificPopup();
}

function tabs() {
    $('.tabs').lightTabs();
}

$(window).on('load', function() {
    menuLogic();
    popup();
    tabs();
});