// Declaramos la función sin parámetros
function saludar(){
    console.log('Función sin Parámetros')
}

// Ejecutamos la función
saludar();

// Declaramos la función con parámetros
function sumar(num1, num2){
    var resultado = num1 + num2;
    console.log(resultado)
}

// Para ejecutarla escribimos la función con los valores de num1 y num2

sumar(23, 6);


// Declaramos la función con parámetros y con retorno
function suma(num1, num2){
    var resultado = num1 + num2;
    return resultado;
}

// Para ejecutarla escribimos la función con los valores de num1 y num2
suma(3, 8);

// Métodos

var texto = 'Los ensayos cortos son escritos en los que se analiza y comenta un concepto, una idea o un asunto significativo de manera relativamente breve';

// Fucnión toUpperCase transforma el texto a mayúsculas
var mayus = texto.toUpperCase();

// Fucnión toLowerCase transforma el texto a minúsculas
var minus = texto.toLowerCase();

// substring extrae una parte del texto (n1, n2), donde n1 es el número de la posición inicial, n2 el número de la posición final
var extraido = texto.substring(5, 40);

// replace(valor1, valor2), reemplaza una cadena de texto por otra
var reemplazo = texto.replace('comenta', 'mencionan');

// indexOf busca el primer caracter dentro de la cadena de texto que coincida con el criterio de búsqueda y muestra su posición
var buscar = texto.indexOf('y');

// lastIndexof busca el último caracter que coincida con el criterio de búsqueda y muestra su posición
var buscarFinal = texto.lastIndexOf('y');

// split convierte la cadena de texto en un arreglo. en el () hay que indicarle cual va a ser el separador,
var arreglo = texto.split(' ')


// PROPIEDADES

var familia1 = ['Luis', 'Leidi', 'Laura', 'Lola'];
var familia2 = ['Carlos', 'Carolina', 'Carmenza'];


// length - muestra cantidad de caracteres de una variable
var numeroElementos = familia1.length;

// concat suma (une) los elementos de dos arreglos
var nuevaFamilia = familia1.concat(familia2);

// join muestra los elementos de un arrglo como una cadena de texto. () indica el separador que tendrán los elementos
var aTexto = familia1.join(' ');

// pop elimina el último elemento del arreglo
var familiaPop = familia1.pop();

//Puede ejecutarse como un a funcion

// familia1.pop();

// push agrega un elemento al final del arreglo
var familiaPush = familia2.push('Victoria');    // muestra la cantidad de elementos del arreglo

familia2.push('Nataly');    // muestra los elementos del arreglo familia2

// shift elimina el primer elemento del arreglo
var familiaEliminar = familia1.shift();

familia2.shift();

// unshift agrega un elemento al inicio del arreglo
var familiaAgregar = familia1.unshift('juan');

familia1.unshift();

// reverse invierte el orden de los elementos
familia1.reverse();