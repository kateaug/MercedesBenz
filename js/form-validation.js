$('document').ready(function() {

// FORM ONE VALIDATION AND REDIRECTION TO THE 2ND PART

  $('.formOne').validate({
    rules: {
  
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        email: true
      },

      phone: {
        required: false,
      }
    },

    errorPlacement: function(error,element) {
    return true;
  }

});


$('#next').click(function(e) {

var partOne = $(".formOne");

if (partOne.valid() == true){
   

     $('.part2').show();
     $('.partOne').hide();

      $('.headerForm').hide();
      $('.headerForm2').show();

         
       $('#image1').attr('src', 'img/button1-2.svg');
       $('#image2').attr('src', 'img/button 2-1.svg');

  e.preventDefault();
}


if (partOne.valid() == false){
   alert ("Por favor preencha os campos em falta.");


  e.preventDefault();
}

});


// FORM TWO VALIDATION

$('.form2').validate({
    rules: {
  
      modelo: "required",
      combustível: "required",
      kilometros: "required",
      ano: "required",

    },

    errorPlacement: function(error,element) {
    return true;
  }

});


 $('#send').click(function(e) {
 $('.form2').valid();

   alert ("Obrigado pelo seu contacto! Irá receber um mail com mais informações.");
   window.location.href = "index.html";

    e.preventDefault();

});

});

