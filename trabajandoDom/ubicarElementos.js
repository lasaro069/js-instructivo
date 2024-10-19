
var parrafoNuevo = document.createElement('p'); /* Creamos un nuevo párrafo */

var textoNuevo = document.createTextNode('Soy un nuevo texto');  /* Creamos un nuevo texto */

parrafoNuevo.appendChild(textoNuevo);  /* insertamos el texto nuevo en el párrafo nuevo */


parrafoNuevo.setAttribute('class', 'texto');    /* agregamos el atributo 'class' con el valor 'texto' */


// var contenedor = document.getElementsByClassName('contenedor')[0]

// si el contendedor padre no tiene ningún identificador para poderelo seleccionar

// Seleccionamos un elemento hijo del contenedor padre
var primerParrafo = document.getElementsByClassName('texto')[2];

//accedemos el elemento padre del parrafo seleccionado
var padreParrafos = primerParrafo.parentNode;

// asignamos una clase
padreParrafos.className = 'contenedor';


//  accedemos a la varaiable del contenedor padre y le asignamos dos valores:
//  el nuevo elemento a ser agregado , la variable creada con el elemento hijo

// recibe dos parámetros: la variable del nuevo elemento, la variable del elemento que se encuentra en lo posición siguiente donde se quiere posicionar el nuevo párrafo
padreParrafos.insertBefore(parrafoNuevo, primerParrafo)

/*  
también podemos hacerlo de la siguiente manera:
var parrafos = document.getElementsByClassName('texto');

padreParrafos.insertBefore(nuevoParrafo, parrafos[2]);

esto ubicaría el parrafo nuevo antes del parrafo que se encuentra en la posición 2
*/