$(document).ready(function () {

    
    /*-------------------------------------------------------------------------------
    	  Sticky-Header(Making the navbar appear with white background when the page gets scrolled down)
    	-------------------------------------------------------------------------------*/
    $(window).scroll(function () {
        var sticky = $('#header'),
            scroll = $(window).scrollTop();

        if (scroll >= 100) sticky.addClass('sticky');
        else sticky.removeClass('sticky');
    });


          /*-------------------------------------------------------------------------------
    	  Mobile Navigation
    	-------------------------------------------------------------------------------*/

    $('#nav-toggle-label, .mobile-trigger').on('click', function () {
        $('body').toggleClass('mobile-open');
        $('.child-trigger').removeClass('child-open');
        $('.mobile-menu .sub-menu').slideUp(250);
        return false;
    });
    
    

       /*------------------------------------------------------------------
                         Active Class 
      -------------------------------------------------------------------*/

    $('.nav navbar-nav li a').click(function () {
        $('.nav navbar-nav li a').removeClass("active");
        $(this).addClass("active");
    });


        /*------------------------------------------------------------------
                         Active Class Mobile
      -------------------------------------------------------------------*/

        $('.wd-menu pop-scroll li a').click(function () {
        $('.wd-menu pop-scroll li a').removeClass("active_mobile");
        $(this).addClass("active_mobile");
    });  
    
    /*------------------------------------------------------------------
                      back to top
      -------------------------------------------------------------------*/

        $('#back-top a').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });



         

   }); 

     //***---------------------data-countdown for events------------------->
// Set the date we're counting down to
$(document).ready(function(){
var countDownDate = new Date("Sep 5, 2020 10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="data-countd"
  document.getElementById("data-countd").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("data-countdown").innerHTML = "THER IS NO EVENT";
  }
}, 1000);
});


        /*------------------------------------------------------------------
                         Send Email
      -------------------------------------------------------------------*/
function sendMail(contactForm){
    emailjs.send("gmail","ninos_contact",{

        "from_name":contactForm.fullname.value,
        "from_email":contactForm.emailaddress.value,
        "request_contact":contactForm.message.value

    })

    .then(function(response){
        console.log("SUCCESS", response);
        window.location.href = "contact-us.html";

    },
    function(error){
            console.log("FAILED",error);
    });

    return false;
}


function initMap() {

    var map1 = new google.maps.Map(document.getElementById("map1"), {
        zoom: 3,
        center: { lat: 59.361740, lng: 17.969670 }
    });
    var map2 = new google.maps.Map(document.getElementById("map2"), {
        zoom: 3,
        center: { lat: 59.375700, lng: 17.941370 }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 59.361740, lng: 17.969670 },
        { lat: 59.375700, lng: 17.941370 }
    ]
    var marker1 = new google.maps.Marker({
        position: locations[0],
        map: map1,
        title: 'Prästgårdsgatan 13',
        label:labels[0]
    });
        var marker2 = new google.maps.Marker({
        position: locations[1],
        map: map2,
        title: 'Rissne Centrum',
        label:labels[1]
    });

    var markerCluster1 = new MarkerClusterer(map1, marker1, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
    var markerCluster2 = new MarkerClusterer(map2, marker2, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

}
