$(document).ready(function(){
  
  $('#inicio').click(function () {
    $('#contenido').load('../index.html #contenido');
  });
  
  
  $('#contacto').click(function () {
    $('#contenido').load('../src/contacto.html');
  });
  
  $('#organigrama').click(function () {
    $('#contenido').load('../src/organigrama.html');
  });
  
  $('#directorio').click(function () {
    $('#contenido').load('../src/directorio.html');
  });

  $('#login').click(function () {
    $('#contenido').load('../src/dashboard.html');
  });
  
  $('.carousel').carousel();
  $('.carousel.carousel-slider').carousel({fullWidth: true});

$(document).ready(function(){
      $('.slider').slider();
    });

});
          