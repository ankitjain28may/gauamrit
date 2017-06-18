jQuery(document).ready(function () {
    "use strict";
    (function () {
        var flag = true;

        function toggleMailBtn() {
            if (flag) {
                $(".submitMsg").show();
                $(".showNotif").hide();
                $(".showNotif").parent().css({
                    "background-color": "#80cc0c",
                    "border-color": "#80cc0c"
                });
            } else {
                $(".submitMsg").hide();
                $(".showNotif").show();
            }
            flag = !flag;
        }
        $('#contactForm button').click(function (e) {
            e.preventDefault();
            var mail = {};
            mail.name = $("#name").val();
            mail.email = $("#email").val();
            mail.message = $("#message").val();
            console.log(mail);
            console.log($("#contactForm")[0].checkValidity());
            if ($("#contactForm")[0].checkValidity()) {
                mail.submit = 1;
                $.post("http://gauamrit.org/mail.php", mail, function (data, status) {
                    data = JSON.parse(data);
                    if (data.status) {
                        $(".showNotif").text("Message Sent");
                    } else {
                        $(".showNotif").text("Message Failed").parent().css({
                            "background-color": "red",
                            "border-color": "red"
                        });
                    }
                    toggleMailBtn();
                    setTimeout(toggleMailBtn, 700);
                });
            } else {
                $('#submit_handle').click();
                $(".showNotif").text("Please Correct the Errors").parent().css({
                    "background-color": "red",
                    "border-color": "red"
                });
                toggleMailBtn();
                setTimeout(toggleMailBtn, 700);
            }
        })
        toggleMailBtn();
    })()
    /* ------- Preloader ------ */
    jQuery(window).load(function () {
        jQuery(".status").fadeOut();
        jQuery(".preloader").delay(1000).fadeOut("slow");
    });
    /* -------- Appears Menu ------ */
    $(window).on('ready , scroll', function () {
        if ($(window).scrollTop() > 30) {
            $('.main-menu').addClass('minified');
        } else {
            $('.main-menu').removeClass('minified');
        }
    });
    /* ---------- Hide Menu-------- */
    jQuery(".nav a").on("click", function () {
        jQuery("#nav-menu").removeClass("in").addClass("collapse");
    });
    /* --------- One Page Navigation -------- */
    $('#collapsingNavbar').onePageNav({
        currentClass: 'active',
        scrollSpeed: 500,
        easing: 'linear'
    });
    /* ---------- Wow Js ---------- */
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 250, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        }
    });
    wow.init();
    /*--------Client----------*/
    //Owl Carousel
    $('#clients-carousel').owlCarousel({
        items: 4,
        itemsTablet: 3,
        margin: 90,
        stagePadding: 90,
        smartSpeed: 450,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 3],
        itemsTablet: [767, 2],
        itemsTabletSmall: [480, 2],
        itemsMobile: [479, 1],
    });
    /* --------- Scroll Up --------- */
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        scrollDistance: 300, // Distance from top/bottom before showing element (px)
        scrollFrom: 'top', // 'top' or 'bottom'
        scrollSpeed: 5000, // Speed back to top (ms)
        easingType: 'linear', // Scroll to top easing (see http://easings.net/)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: 'Scroll to top', // Text for element, can contain HTML
        scrollTitle: false, // Set a custom <a> title if required. Defaults to scrollText
        scrollImg: true, // Set true to use image
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 99998 // Z-Index for the overlay
    });
    /* ---------- lightbox ---------- */
    $('.featured-work-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    $('.flickr-gallery-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    /* --------- Carousel Slider ---------- */
    // Feature Works
    $("#teams").owlCarousel({
        items: 3,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        itemsMobile: [520, 1],
        autoPlay: 5000
    });
    /* ------------ Stellar ----------- */
    $(window).stellar({
        responsive: true,
        positionProperty: 'position'
    });
    /* ---------- ISoptope --------- */
    var $container = $('.portfolio-items');
    // filter items on button click
    $container.isotope({
        filter: '*',
        itemSelector: '.item',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
    $('#portfolio-filter ul li a').on('click', function () {
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });
    var $optionSets = $('#portfolio-filter ul'),
        $optionLinks = $optionSets.find('a');
    $optionLinks.on('click', function () {
        var $this = $(this);
        // don't proceed if already selected
        if ($this.hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents('#portfolio-filter ul');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
    });
    /* ------------ Home Slider ------------- */
    $('#slider').sliderPro({
        width: '100%',
        height: 800,
        fade: true,
        waitForLayers: true,
        buttons: true,
        autoplay: true,
        autoScaleLayers: false,
        slideAnimationDuration: 1500,
        breakpoints: {
            600: {
                height: 480
            }
        }
    });
});
