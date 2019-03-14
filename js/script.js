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

function showTelephone() {
    $('.block-show-telephone').click(function () {
        $('.hide-telephone').hide('slow', function () {
            $('.show-telephone').show('slow');
        });
    });
}

function showFastRegistration() {
    $('.show-fast-registration').click(function () {
        $('.block-fast-registration').show('slow');
    });
}

function showDetailedInformation() {
    $('.show-detailed-information').click(function () {
      $(this).next().slideToggle();
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
    $('.btn-add').magnificPopup({
        showCloseBtn: false,
        fixedContentPos: true
    });
    $('.btn-verification').magnificPopup({
        showCloseBtn: false,
        fixedContentPos: true
    });
    $('.next-step-verification').magnificPopup({
        showCloseBtn: false,
        fixedContentPos: true
    });
    $('.btn-delete-acc').magnificPopup({
        showCloseBtn: false,
        fixedContentPos: true
    });
    $('.btn-restore-password').magnificPopup({
        showCloseBtn: false,
        fixedContentPos: true
    });
}

// function tabs() {
//     $('.tabs').lightTabs();
// }

function sliderImg() {
    var sliderImg = $('.slider-img');

    if (sliderImg.length) {
        sliderImg.slick({
            infinity: true,
            arrows: true,
            dots: false
        });
    }
}

function sliderImgAds() {
    var sliderImg = $('.image-ads-slider');

    if (sliderImg.length) {
        sliderImg.slick({
            infinity: true,
            arrows: true,
            dots: false
        });
    }
}


function slider() {
    var slider = $('.slider');

    if (slider.length) {
        slider.slick({
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
}

function scrollMenu() {

    $(document).on("scroll",function(){
        if($(document).scrollTop()>87){
            $(".sidebar-menu-hider").addClass("active");
        } else{
            $(".sidebar-menu-hider").removeClass("active");
        }
    });

}


function mainMenu() {
//главная функция
        var $header = $('#sidebar-menu-hider');
        var $showSidebar = $('.show-sidebar', $header);
        var $menuBlock = $('.sidebar-menu-hider', $header);
        var $wrapperSmall = $('.wrapper-small');
        var $wrapper = $('.wrapper');
        var openClass = 'is-open';

        // Toggle main menu.
        $showSidebar.on('click', function (e) {
            e.preventDefault();
            $menuBlock.toggleClass(openClass);
            $wrapperSmall.toggleClass(openClass);
            $wrapper.toggleClass(openClass);
        });
    // $('.show-sidebar').click(function () { /* выбираем класс icon-menu и
    //            добавляем метод click с функцией, вызываемой при клике */
    //
    //     $('.sidebar-menu-hider').animate({ //выбираем класс menu и метод animate
    //
    //         left: '0px' /* теперь при клике по иконке, меню, скрытое за
    //            левой границей на 285px, изменит свое положение на 0px и станет видимым */
    //
    //     }, 200); //скорость движения меню в мс
    //
    //     $('.wrapper-small').animate({ //выбираем тег body и метод animate
    //
    //        paddingLeft: '40px' /* чтобы всё содержимое также сдвигалось вправо
    //            при открытии меню, установим ему положение 285px */
    //
    //     }, 200); //скорость движения меню в мс
    //
    // });
    //
    // $('.show-sidebar').click(function () { //выбираем класс icon-close и метод click
    //
    //     $('.sidebar-menu-hider').animate({ //выбираем класс menu и метод animate
    //
    //         left: '-250px' /* при клике на крестик меню вернется назад в свое
    //            положение и скроется */
    //
    //     }, 200); //скорость движения меню в мс
    //     $('.wrapper-small').animate({ //выбираем тег body и метод animate
    //
    //         paddingLeft: '0px' /* чтобы всё содержимое также сдвигалось вправо
    //            при открытии меню, установим ему положение 285px */
    //
    //     }, 200); //скорость движения меню в мс
    // });
}

$(window).on('load', function () {
    menuLogic();
    menuLogicCh();
    popup();
    closePopup();
    slider();
    sliderImg();
    sliderImgAds();
    showTelephone();
    mainMenu();
    showDetailedInformation();
    scrollMenu();
    showFastRegistration();
});