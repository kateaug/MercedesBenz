$('document').ready(function() {


// GOING BACK TO THE COVER PAGE BY CLICKING ON A LOGO

$("#logo").click(function() {
window.location.replace("home.html")
});


// GRID FLIP

$(".card").flip();


// GOING BACK FROM THE 2ND TO THE 1ST PART OF THE FORM BY CLICKING BUTTON 1

$("#image1").click(function(e) {
	$('.part2').hide();
	$('.partOne').show();

	$('.headerForm').show();
    $('.headerForm2').hide();
    
    $('#image1').attr('src', 'img/button 1-1.svg');
	$('#image2').attr('src', 'img/button2-2.svg');

e.preventDefault();

});

}); 
