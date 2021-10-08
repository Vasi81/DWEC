//Creamos las variables para utilizarlas         
var numero;
var listanumeros;
var lista = [];
var boton1;
var boton2;
var boton3;
var mediaa;
var aviso;
var suma = 0;
var modaa;
var posicion;
var medianaa;

//En esta funcion lo que tenemos que hacer es inicializarlas con los elementos del html
function inicio() {
    numero = document.getElementById("introducir");
    boton1 = document.getElementById("boton");
    boton2 = document.getElementById("botonc");
    boton3 = document.getElementById("botonr")
    aviso = document.getElementById("error");
    listanumeros = document.getElementById("array");
    mediaa = document.getElementById("media");
    medianaa = document.getElementById("mediana");
    modaa = document.getElementById("moda");

}

//Funcion para comprobar el rango de 0 a 100
function comprobarrango() {
    if ((numero.value >= 101) || (numero.value <= -1)) {
        aviso.textContent = "Numero fuera de rango";
        numero.focus();
    } else {
        aviso.textContent = "";
    }
}

//Funcion para añadir los numeros al array de capacidad maxima 10
function añadir() {

    if (lista.length < 10) {
        if ((numero.value >= 101) || (numero.value <= -1) || (numero.value == "")) {
            alert("Rellena todos los datos correctamente");
        } else {
            lista.push(numero.value);
            for (var i = 0; i < lista.length; i++) {
                if (i == 0) {
                    final = lista[i];
                } else {
                    final = final + "," + lista[i];
                }
                listanumeros.value = final;
                numero.value = "";
                numero.focus();

            }
        }
    } else {
        alert("Ya no se pueden añadir mas números");
    }
}

//Funcion para calcular la media del array introducido anteriormente
function calcularmedia() {

    for (var i = 0; i < lista.length; i++) {
        suma = suma + parseInt(lista[i]);
    }
    mediaa.value = suma / lista.length;

}

//Funcion para calcular la moda del array
function calcularmoda() {

    var maxrepeticiones = 0;
    for (var i = 0; i < lista.length; i++) {
        var repeticiones = 0;
        for (var j = 0; j < lista.length; j++) {
            if (lista[i] == lista[j]) {
                repeticiones++;
            }
            if (repeticiones > maxrepeticiones) {
                modaa.value = lista[i];
                maxrepeticiones = repeticiones;
            }
        }
    }

    console.log(modaa.value);//Aqui se puede ver el numero  
    console.log(maxrepeticiones);//Aqui se puede ver las veces que se repite

}

//Funcion para calcular la mediana del array
function calcularmediana() {

    if (lista.length == 1) {
        medianaa.value = lista[0];
    } else {
        if (lista.length % 2 == 0) {
            medianaa.value = (parseInt(lista[(lista.length / 2 - 1)]) + parseInt(lista[(lista.length / 2)])) / 2;
        } else {
            medianaa.value = (parseInt(lista[(lista.length - 1) / 2]));
        }
    }
}
function restablece(){//Funcion para restablecer el contenido de la pagina
    location.reload();
}

//Funcion para añadir los eventos a los botones
function eventos() {

    boton1.addEventListener("click", comprobarrango);
    boton1.addEventListener("click", añadir);
    boton2.addEventListener("click", calcularmedia);
    boton2.addEventListener("click", calcularmediana);
    boton2.addEventListener("click", calcularmoda);
    boton3.addEventListener("click",restablece);
}



window.onload = function () { //Cargamos las funciones

    inicio();
    eventos();
}