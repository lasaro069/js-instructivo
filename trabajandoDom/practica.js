// Creamos la función 'encriptarTexto', la cual recibe como parámetro un texto

function encriptarTexto(texto) {

    // 1. convertimos el texto a minúsculas
    const textoMinusculas = texto.toLowerCase();





    return textoMinusculas;
}



var textoOriginal = 'Soy Luis Santos';

document.write(encriptarTexto(textoOriginal));

var enArreglo = textoOriginal.split(' ');

document.write(enArreglo + '<br>');

