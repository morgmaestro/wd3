$(document).ready(function () {

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

    $("#signUp").modal('show');

    let form = document.getElementById('myForm');
    form.addEventListener("submit", function (evt) {
        if (form.checkValidity() === false) {
            evt.preventDefault();
            evt.stopPropagation();
        }

        form.classList.add('was-validated');
    })

});

console.log($(this).prop('checked'));
$('#billingCheck').click(function () {
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
})

let form = document.getElementById('myForm');
form.addEventListener("submit", function (evt) {
    if (form.checkValidity() === false) {
        evt.preventDefault();
        evt.stopPropagation();
    }

    form.classList.add('was-validated');
});


// javascript is an event based language