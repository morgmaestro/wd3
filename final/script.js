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

    $(".addCart").click(function() {
        let q = parseInt($(this).prev(".quantity").val());
        let currentQ = parseInt($("#cartCount").text());
        console.log(currentQ);
        if (!isNaN(currentQ)){
            q += currentQ;
        }
        $("#cartCount").text(q);
    });

    let form = document.getElementById('modalForm');
    form.addEventListener("submit", function (evt) {
        if (form.checkValidity() === false) {
            evt.preventDefault();
            evt.stopPropagation();
        }

        form.classList.add('was-validated');
    });

});

$('#billingCheck').click(function () {
    console.log($(this).prop('checked'));
    if ($(this).prop('checked')) {
        $('#shippingAddress1').val($('#billingAddress1').val());
        $('#shippingAddress2').val($('#billingAddress2').val());
        $('#shippingCity').val($('#billingCity').val());
        $('#shippingState').val($('#billingState').val());
        $('#shippingZip').val($('#billingZip').val());
    } else {
        $('#shippingAddress1').val('');
        $('#shippingAddress2').val('');
        $('#shippingCity').val('');
        $('#shippingState').val('');
        $('#shippingZip').val('');
    }
});