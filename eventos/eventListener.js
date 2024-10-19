/* *****anadiendo un Event Listener***** */

// Creamos la variable para acceder al elemento del DOM, indicándo el 'id' del elemento
var boton = document.getElementById('boton');
var boton2 = document.getElementById('boton2');

// creamos una función para utilizar el evento
function alerta(){
    alert("Hola Mundo");
};

// Agregamos el escuchador al elemento seleccionado, en este caso el botón, el cual recibe dos parámetros: 
// Qué tipo de evento va a escuchar (la acción que se va a capturar por parte del usuario)
// Cuál va a ser la función que va a ejecutar
boton.addEventListener('click', alerta);

// Para remover un escuchador creamos una función  señalando a qué variable del escuchador queremos apuntar, en este caso a la variable botón con l afunción 'remove'
function removerAlerta(){
    boton.removeEventListener('click', alerta);
}

// agregamos el escuchador al botón2. cuando haga click en el botón Eliminar Alerta, el Botón 'saludar' dejará de fujcionar
boton2.addEventListener('click', removerAlerta);