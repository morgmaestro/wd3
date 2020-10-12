$(document).ready(function() {
    
    $('.carousel').carousel({
        interval : 5000,
        keyboard: false,
    });
    
    let carouselPaused = false;

    $('.js-carousel-pause').click(function() {
        if(carouselPaused) {
            $('.carousel').carousel('cycle');
            $(this).html('<i class="fas fa-pause"></i>');
        }
        else {
            $('.carousel').carousel('pause');
            $(this).html('<i class="fas fa-play"></i>');
        }

        carouselPaused = !carouselPaused;
    });

    $("#myModal").modal('show');

    let form = document.getElementById('myForm');
    form.addEventListener("submit", function(evt){
      if(form.checkValidity() === false) {
        evt.preventDefault();
        evt.stopPropagation();
      }

      form.classList.add('was-validated');
    })

});



// javascript is an event based language