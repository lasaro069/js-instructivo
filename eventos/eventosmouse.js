// Creamos la variable para acceder al elemento
var parrafo = document.getElementsByClassName('texto')[0];

// Creamos el escuchador  con la función anónima
parrafo.addEventListener('mouseover', function(){

    // creamos la variable para crear un nuevo elemento tipo párrafo
    var nuevoParrafo = document.createElement('p');

    // Creamos el texto que se incluirá en el elemento nuevoParrafo
    var textoNuevo = document.createTextNode('Soy otro párrafo nuevo');

    // Agregamos el textoNuevo al nuevoParrafo
    nuevoParrafo.appendChild(textoNuevo);

    // Añadimos un atrbuto de clase al nuevoParrafo con la clase 'texto'
    nuevoParrafo.setAttribute('class', 'texto');

    // Añadimos un 'id' de valor 'parrafoAgregado'
    nuevoParrafo.id = 'parrafoAgregado';

    // Creamos una nueva variable  para acceder al contenedor
    var contenedor = document.getElementsByClassName('contenedor')[0];

    // Agregamos el nuevoParrafo al contenedor
    contenedor.appendChild(nuevoParrafo);
});

/*  *****Evento Mouseout*****   */

parrafo.addEventListener('mouseout', function(){

    // Creamos una variable para acceder al párrafo deseado
    var parrafoAgregado = document.getElementById('parrafoAgregado');

    // Seleccionamos el contenedor
    var contenedor = document.getElementsByClassName('contenedor')[0];

    contenedor.removeChild(parrafoAgregado);
})