// Evento focus

// seleccionamos el campo 'nombre'

var campoNombre = document.getElementById('nombre');

// agregamos un evento a la variable
campoNombre,addEventListener('focus', function(){
    campoNombre.setAttribute('value', 'tengo el foco');
});

campoNombre.addEventListener('blur', function(){
    campoNombre.setAttribute('value', 'Ya no tengo el foco');
});
