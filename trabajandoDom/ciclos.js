// Escribir un console.log que escriba una serie de números
document.write('ciclo for sencillo' + '<br>' + '<br>');


var numero = 10;

for(var i = 1; i <= numero; i++){
    document.write('posición' + i + '<br>' );
}

/*  CICLO FOR   */


// Para recorrer un arreglo con el ciclo for
var semana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];

document.write('<br>' + 'ciclo for recorriendo un arreglo' + '<br>' + '<br>');



    for (i = 0; i < semana.length; i++){
        document.write(semana[i] + '<br>');
    }

// para interrumpir el ciclo en algún punto    
document.write('<br>' + 'ciclo for recorriendo un arreglo con "break"' + '<br>' + '<br>');

for (i = 0; i < semana.length; i++){
    document.write(semana[i] + '<br>');
    if(semana[i] == 'miercoles'){
        break;
    }
}

// para saltar en un punto y continuar con el resto del código

document.write('<br>' + 'ciclo for recorriendo un arreglo con "continue"' + '<br>' + '<br>');

for (i = 0; i < semana.length; i++){
    if(semana[i] == 'miercoles'){
        continue;
    }
    document.write(semana[i] + '<br>');
}


    // ciclo for in

    var meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];


document.write('<br>' + 'ciclo for in recorriendo un arreglo' + '<br>' + '<br>');

    for(mes in meses){
        document.write(meses[mes]+ '<br>');
    }


    /*  *****CICLO WHILE*****   */

    document.write('<br>' + 'ciclo while ' + '<br>' + '<br>');


    var i = 1;
    while(i < 11){
        document.write(i + '<br>');
        i++;
    }

    // ciclo do while

    document.write('<br>' + 'ciclo do while' + '<br>' + '<br>');

    var i = 1;

    do{
        document.write(i + '<br>');
        i++
    }while(i<11);
