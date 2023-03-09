$(document).ready(function () {
    $("#banner_hd").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });
    $(document).on("click", "button", function (event) {
        $( ".backg_cts" ).toggleClass( "enable" )
    });
    $(document).on("click", ".wind_cts img", function (event) {
        $( ".backg_cts" ).toggleClass( "enable" )
    });
    
});

function gam_click() {
    $(".gam").css("top", "0");
    $("#websiteHeader").css("display", "none");
}

function close_gam() {
    $(".gam").css("top", "-4000px");
    $("#websiteHeader").css("display", "block");
}