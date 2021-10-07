/*Creamos una función para que nos genere un número aleatorio entre un mínimo y un máximo incluyendo ambos.De esa manera nos aseguramos
 que no se va a salir del rango que predeterminemos, es decir, en este caso no va a haber números mayores de 100 o menores de 0*/
function generarAleatorio(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

//Creamos un array vacío que rellenamos mediante un bucle for con 10 números aleatorios de 0 a 100 ambos inclusive.

//Utilizamos el método push() con la función creada en el paso anterior

var array = new Array();

for (var i = 0; i < 10; i++) {
  array.push(generarAleatorio(0, 100));
}
//Sacamos por pantalla el array generado.
console.log("Array de 10 numeros aleatorios de 0 a 100: " + array);

//Creamos la variable suma y la inicializamos a 0.Con un bucle for recorremos los valores del array y los vamos sumando.
var suma = 0;
for (var i in array) {
  suma += array[i];
}

//Calculamos la media almacenandola en una variable y la sacamos por pantalla
var media = suma / array.length;
console.log("<br/> La media es: " + media);

//Calculo de la moda

function calculo_moda() {
  var max_rep = 0;
  var moda;

  for (var i = 0; i < array.length; i++) {
    var contador = 0;
    for (var j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        contador++;
      }

      if (contador > max_rep) {
        max_rep = contador;
        moda = array[i];
      }
    }
  }
  return moda;
}
console.log("<br/> La moda es: " + calculo_moda());

//Calculo de la mediana
/*Para calcular la mediana es necesario primero ordenar el array, por eso creamos una función de comparación y ordenamos los elementos
 de acuerdo al valor que retorna dicha función de comparación*/
var a;
var b;
function comparar(a, b) {
  return a - b;
}

//Creamos las variables mitad y mediana que utilizaremos en la función para el calculo de la mediana
var mitad = array.length / 2;
var mediana;
//Creamos la función para calcular la mediana
function calculo_mediana() {
  array.sort(comparar); //Ordenamos el array con el método sort() utilizando como argumento la función previamente creada
  if (array.length % 2 == 0) {
    return (mediana = (array[mitad - 1] + array[mitad]) / 2);
  } else {
    return (mediana = array[mitad]);
  }
}
console.log("<br/> La mediana es: " + calculo_mediana());

document.write("Array de 10 numeros aleatorios de 0 a 100: " + array);
document.write("<br/> La media es: " + media);
document.write("<br/> La moda es: " + calculo_moda());
document.write("<br/> La mediana es: " + calculo_mediana());