$(document).ready(function ($) {
    window.addEventListener('scroll', onScroll);
    function onScroll(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
            shrinkOn = 30;
        if (distanceY > shrinkOn) {
            $("header" ).addClass("scrolled");
        } else {
            $("header" ).removeClass("scrolled");
        }
    }
    onScroll();
    
    
    $(".mobile-menu-cont").hide();

    $(".mobile_menu").simpleMobileMenu({
        "menuStyle": "slide",
    });

    document.addEventListener( 'wpcf7mailsent', function( event ) {
        var inputs = event.detail.inputs;
        thankyouPage = getFieldValueByName(inputs, "thankyou-page");
        if(thankyouPage) window.location = thankyouPage;
    }, false );


    $(".popup .bg").on("click", function(){
        $(this).closest(".popup").fadeOut();
    })


    $(document).mouseleave(function () {
        //$(".popup").fadeIn();
    });

    //$(".popup").hide();
});

function getFieldValueByName(ar, name){
    var result = "";
    ar.forEach(function(item) {
        if(item.name == name) result = item.value;
    });
    return result;
}