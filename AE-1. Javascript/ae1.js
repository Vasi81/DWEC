'use strict'
/*
Requerimiento 1

Realiza un programa en JavaScript que recorra un array de 10 números y calcule la media 
aritmética de diez números. 
Los números deben de estar comprendidos entre el 0 y 100, si se detectará algún número 
fuera de ese rango no se tendría en cuenta para su cálculo.
*/

var tabla = [];
var media = 0;
var maxRepeticionNumero = 0;
var moda = 0;

var nrRandom = 0;
do {
    nrRandom = Math.floor(Math.random() * 100);
    if (nrRandom > 0 && nrRandom < 100)
        tabla.push(nrRandom);
} while (tabla.length < 10);


/* media */
function calcularMedia(parametro) {
    parametro.forEach(element => {
        media += element;
    });

    return media / parametro.length;
}
/*
Requerimiento 2

Calcular también la moda.
*/

function calcularModa(parametro) {
    var repeticionNumero = 0;
    for (let i = 0; i < parametro.length; i++) {
        repeticionNumero = 0;
        for (let x = 0; x < parametro.length; x++) {
            if (parametro[i] == parametro[x]) {
                repeticionNumero++;
            }
            if (repeticionNumero > maxRepeticionNumero) {
                moda = parametro[i];
                maxRepeticionNumero = repeticionNumero;
            }
        }
    }

    return [moda, maxRepeticionNumero];
}

/*
Requerimiento 3

Calcular también la mediana.
*/

function calcularMediana(parametro) {
    parametro.sort((a, b) => a - b);

    var mitadArray = Math.floor(parametro.length / 2);

    if (parametro.length % 2) {
        return parametro[mitadArray];
    } else {
        return (parametro[mitadArray - 1] + parametro[mitadArray]) / 2;
    }
}


console.log("Array sin modificar:", tabla);

console.log("Media:", calcularMedia(tabla));
console.log('Mediana: ', calcularMediana(tabla));

if (calcularModa(tabla)[1] <= 1) {
    console.log('No hay moda.')
} else {
    console.log('Moda: ' + calcularModa(tabla)[0]);
}