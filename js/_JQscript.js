$(function() {
    // fixed header
    let header = $("#header"),
        intro = $("#intro"),
        introH = intro.innerHeight(),
        scrollPos = $(window).scrollTop(),
        nav = $("#nav"),
        navToggle = $("#navToggle");


        checkScroll(scrollPos, introH);

        $(window).on("scroll resize", function() {
            introH = intro.innerHeight();
            scrollPos = $(this).scrollTop();

            checkScroll(scrollPos, introH);
        });

        function checkScroll(scrollPos, introH) {
            if( scrollPos > introH ) {
                header.addClass ("fixed");
            } else {
                header.removeClass ("fixed");
            }
        }


    // smooth scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 60
        }, 700);
    });


    // navToggle
    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
        navToggle.toggleClass("active");
    });


    // reviewsSlider: https://kenwheeler.github.io/slick/
    let slider = $("#reviewsSlider");

    slider.slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          arrows: false,
          dots: true
    });


});
