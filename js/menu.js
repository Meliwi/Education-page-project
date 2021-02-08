

//Almacenamos el div y el boton de menú en variable
var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav');

//Añadimos un evento al boton menú
  btnMenu.addEventListener('click', function(){
  nav.classList.toggle('show');
});


