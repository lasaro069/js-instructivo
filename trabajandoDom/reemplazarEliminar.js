
// Creamos una variable para el nuevo elemento tipo 'párrafo'
var nuevoparrafo = document.createElement('p');

// Creamos el texto para el elemento
var nuevoTexto = document.createTextNode('Soy el nuevo texto deprueba para el nuevo elemento párrafo que se acaba de crear');

// Asignamos el texto al párrafo
nuevoparrafo.appendChild(nuevoTexto);

// asignamos atributos al nuevo elemento 'párrafo'
nuevoparrafo.setAttribute('class', 'texto');

// ------- Ubicamos el nuevo elemento en una posición existente, eliminando el actual

// creamos la variable para seleccionar loe elementos que contengan el atributo con valor 'texto'
var parrafos = document.getElementsByClassName('texto');

// creamos la variable para acceder al contenedor padre
var padreParrafos = parrafos[0].parentNode;

//reemplazamos el elemento con dos parametros:
// el nuevo elemento y el elemento que va a ser reemplazado
padreParrafos.replaceChild(nuevoparrafo, parrafos[2]);

// Para eliminar un elemento
padreParrafos.removeChild(parrafos[0]);

// puede reemplazarse cualquier elemento del DOM