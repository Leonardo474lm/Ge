console.log("hola como estas :");
console.log("arthur samir")
// var links = document.querySelectorAll('.link');
// var contents = document.querySelectorAll('.content');

// links.forEach(function (link) {
//     link.addEventListener('click', function (event) {
//         event.preventDefault();
//         var target = this.getAttribute('data-target');

//         contents.forEach(function (content) {
//             if (content.id === target) {
//                 content.style.display = 'block';
//             } else {
//                 content.style.display = 'none';
//             }
//         });
//     });
// });
//ESTO ES PARA LAS IMAGENES DE QUE ROTAN CADA 5 SEGUNDOS !! 
//para que lo entiendan
// Definir las imágenes que quieres mostrar
var imagenes = [
    "images/estadio.webp",
    "images/mesi.webp",
    "images/messi.avif"
  ];
  
  var indice = 0;
  var duracion = 5000; // 5 segundos
  
  function cambiarImagen() {
    // Obtener el elemento de imagen por su ID
    var imagen = document.getElementById("imagen");
    
    // Cambiar la fuente de la imagen
    imagen.src = imagenes[indice];
    
    // Incrementar el índice para pasar a la siguiente imagen
    indice = (indice + 1) % imagenes.length;
    
    // Establecer el tiempo de espera antes de cambiar a la siguiente imagen
    setTimeout(cambiarImagen, duracion);
  }
  
  // Iniciar el cambio de imagen cuando la página se carga
  window.onload = cambiarImagen;
  