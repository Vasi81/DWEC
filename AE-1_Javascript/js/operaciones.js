  //arrayElementos lo declaramos de ámbito global.
  arrayElementos = []

  /**
   * Funcion para cargar el array de 10 elementos con números aleatorios entre 1 y 100.
   * Devolvemos el número de elementos generados.
   * @returns resultado 
   */
  function GenerarArray(){
    var resultado=''
    var numgenerados=""
    for (let i = 0; i < 10; i++) {
        console.log("Incluimos valor : " + i);
        arrayElementos[i]=(Math.round((Math.random() * 101)));
        resultado=resultado+arrayElementos[i]+'-';
        console.log(arrayElementos[i]);

      }
      //Elimianos el último guión de la cadena.
      return resultado.substring(resultado.lenght,(resultado.length)-1);
  }

  /**
   * Funcion para calcular la media aritmetica.
   * Para calcular la media aritmetica , recorremos el array para sumar cada uno de sus valores y lo divvidimos entre el total de elementos, en este caso 10.
   * Devolvemos la media aritmética.
   * @returns resultadoMA 
   */
  function MediaAritmetica(){
    //Para calcular la media aritmetica , recorremos el array para sumar cada uno de sus valores.
    //a continuacion dividimos ese resultado por el numero de elementos.
    var resultadoMA=0
    for (let i = 0; i < 10; i++) {
        resultadoMA=resultadoMA+arrayElementos[i];
        console.log(arrayElementos[i]);
      }
    return  resultadoMA/10;
  }
  
  /**
   * Función para calcular la moda.
   * Obtenemos el elemento que mas se repite en una serie de elementos.
   * Devolvemos la moda
   * @returns moda 
   */
  function Moda(){
    var resultado=''
    //1º-Ordenamos el array.
   //sort no ordena bien con numeros, complementar el método sort() con una función de comparación básica para que ordene correctamente.:
    arrayElementos.sort(function(a, b){return a - b});
    for (let i = 0; i < 10; i++) {
      console.log('Array Ordenador')
      console.log(arrayElementos[i]);
    }
    //2º-Luego tenemos que ver cuantas veces se repite un número.
    //Recorremos los distintos elementos del array y contamos cuantas veces se repite comparado con el anterior, 
    //de ese modo tendremos al final del proceso el elemento más repetido de entre todos los elementos.
    //en caso de que no tengamos ninguna repetición nos mostrará el de menor valor o podemos incdicar moda=0 para mostrar que no tenemos repetición de ningún elemento.
    let moda=0
    let numeroMaxRepetido= 0;
    for(let i=0; i<arrayElementos.length; i++)
    {
        let numRepeticiones= 0;
        //Por cada recorrido inicializamos el número de repeticiones.
        for(let j=0; j<arrayElementos.length; j++)
        {
            if(arrayElementos[i]==arrayElementos[j])
            {
                //número de repeticiones.
                numRepeticiones++;
            } 
            //validamos la repticiones con la máxima almacenada.
            if(numRepeticiones>numeroMaxRepetido)
            {
                //repticiones máximas almacenadas.
                moda= arrayElementos[i];
                numeroMaxRepetido= numRepeticiones;
            } 
        }
    }
    if (numeroMaxRepetido==1) {
      moda=0;
    }
    return  moda;
  }


    /**
   * Función para calcular la mediana.
   * La mediana es el "número en el medio" de una lista ordenada de números si es par, en el caso de que sea impar, 
   * tenemos que encontrar el par central de números, y después calcular su valor medio.
   * Devolvemos la mediana.
   * @returns mediana 
   */
  function Mediana(){
    var mediana=0;
    //Lo primero es ordenar el array , de menos a mayor.
    //sort no ordena bien con numeros, complementar el método sort() con una función de comparación básica para que ordene correctamente.:
    arrayElementos.sort(function(a, b){return a - b});
    var l=arrayElementos.length;//En nuestro caso siempre será par ya que tenemos el número de elementos fijos.
    if (l%2==0) {
        //En el caso de que sea par, con la función slice() obtenemos un array con los dos valores del centro, 
        //el cual pasamos a la función reduce para que los sume y el resultado lo dividimos entre 2 para obtener la media.
        //La función reduce me costó entenderla pero la verdad es que muy util , esn especial con arrays.

        console.log('Valores del centro ' + arrayElementos.slice(l/2-1, l/2+1));
        mediana=arrayElementos.slice(l/2-1, l/2+1).reduce((a,b) => a+b)/2
        console.log('Mediana par ' + mediana);
    }
    else {
        //En el caso de que sea impar, simplemente obtenemos el valor del medio con slice()
        mediana=arrayElementos.slice((l/2), l/2+1)[0];
        console.log('Mediana impar ' + mediana);
    }
    
    console.log('Mediana ' + mediana);
    return  mediana;
  }