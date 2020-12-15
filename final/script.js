$(document).ready(function () {
    // carousel
    $('.carousel').carousel({
        interval: 5000,
        keyboard: false,
    });

    let carouselPaused = false;

    $('.js-carousel-pause').click(function () {
        if (carouselPaused) {
            $('.carousel').carousel('cycle');
            $(this).html('<i class="fas fa-pause"></i>');
        } else {
            $('.carousel').carousel('pause');
            $(this).html('<i class="fas fa-play"></i>');
        }

        carouselPaused = !carouselPaused;
    });

    // modal
    $("#signUp").modal('show');

    //add to cart
    $(".addCart").click(function() {
        let q = parseInt($(this).prev(".quantity").val());
        let currentQ = parseInt($("#cartCount").text());
        console.log(currentQ);
        if (!isNaN(currentQ)){
            q += currentQ;
        }
        $("#cartCount").text(q);
    });

});