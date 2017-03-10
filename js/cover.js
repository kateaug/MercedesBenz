$('document').ready(function() {

//BIG SCREEN PLUGIN

$("#container1").twentytwenty();

// TAABLET/MOBILE PLUGIN

$('.autoplay').slick({
slidesToShow: 1,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 3000,
infinite: true,		 
speed: 300,
fade: true,
prevArrow: null,
nextArrow: null,
});

// BUTTON CLICK REDIRECTING FROM COVER TO THE INDEX PAGE

$("#entrance, #enter").click(function() {
window.location.replace("index.html")
});


}); 
