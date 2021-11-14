 //ventanas emergentes
 function mostrarVentana(){
  // Accedemos al contenedor
  var ventana = document.getElementById('ventanaEmergente'); 		    		    
  // Definimos su posición vertical. La ponemos fija para simplificar el código
  ventana.style.marginTop = "100px";
  // Definimos su posición horizontal, en base a la anchura del cliente
  ventana.style.marginLeft = ((document.body.clientWidth-350) / 2) +  "px"; 
  // Y lo hacemos visible
  ventana.style.display = 'block'; //en el stylo del div esta puesto a "none", con block lo hacemos visible
  var valorpizza=0;
  //Tamaño pizza
  var sizepizza=document.getElementById("tamanopizza");
  var valorseleccion = "";
  var strValor="";
   ////Obtenemos el tipo de pizza seleccionado.
   tamano = document.getElementsByName("size");
   var seleccionado = false;
   for(var i=0; i<tamano.length; i++) {
       if(tamano[i].checked) {
           valorseleccion = tamano[i].value;
           break;
               
       }
   }

   if (valorseleccion=="Grande") {
    strValor=valorseleccion + " 15€";
    valorpizza=15;
   }

   if (valorseleccion=="Mediana") {
    strValor=valorseleccion + " 10€";
    valorpizza=10;
   }

   if (valorseleccion=="Pequeña") {
    strValor=valorseleccion + " 5€";
    valorpizza=5;
   }


   var contenidosize = document.createTextNode(strValor);
   sizepizza.appendChild(contenidosize);


  //Ingredientes
  var ingrediente=document.getElementById("ingredientes");
  var numingredientes = 0;
  //Validamos que al menos tengamos marcado un ingrediente.
  ingre = document.getElementsByName("ingredientes");
  for(var i=0; i<ingre.length; i++) {
      if(ingre[i].checked) {
          numingredientes++;
      }
  }

  var contenidoingre = document.createTextNode(numingredientes + " x 1€");
  ingrediente.appendChild(contenidoingre);
  

  //Total Pedido
  valorpizza=valorpizza+numingredientes;
  var totalpedido=document.getElementById("totalpedido");
  var contenido = document.createTextNode(valorpizza + "€");
  totalpedido.appendChild(contenido);


  /*
  5€ para la pizza pequeña
  10€ para la pizza mediana
  15€ para la pizza grande
  Cada ingrediente elegido tendrá un valor de 1€
  */
}

function ocultarVentana(){
  //Accedemos al contenedor 
  var ventana = document.getElementById('ventanaEmergente'); 
  //Y lo hacemos visible
  ventana.style.display = 'none'; // Y lo hacemos invisible
  alert("Mandamos el formulario!")
  return true;
}  

function cancelarVentana(){
  //Accedemos al contenedor 
  var ventana = document.getElementById('ventanaEmergente'); 
  //Y lo hacemos visible
  ventana.style.display = 'none'; // Y lo hacemos invisible
  alert("Cancelamos el formulario!")
  document.getElementById("formulario").reset();
  return false;
} 
 
 // funcion basica de validación de un formulario
 function validacion() {
  console.log("validando los datos del formulario...")
  //Validamos Nombre
  re = /^[A-Z]/ //la primera letra esté en mayúsculas.
  if (!nombre.value.match(re)) {
    ErrorName.style.display = 'block';
    return false;
  } else {
    ErrorName.style.display = 'none';
  }

    //Validamos Direccion
  if (direccion.value.trim() == "") {
    ErrorDireccion.style.display = 'block';
      return false;
  } else {
    ErrorDireccion.style.display = 'none';
  }

    //Validamos telefono
    //(\+34|0034|34) indicamos que es opcional
    // acepta - y espacio para el +34
    //El número de telefono debe comenzar con 6 o 7
    //Acepta -o espacio para los números
    //Admite números entre 0-9
    /*Formato que soporta:
    666444555
    666-444-555
    666 44 45 55
    666-44-45-55
    +34666555444
    0034666555444
    */
  re=/(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/
  if (!telefono.value.match(re)) {
      ErrorTel.style.display = 'block';
      return false;
  } else {
    ErrorTel.style.display = 'none';
  }


    //Validamos email 
    //([\da-z_\.-]+) -->tiene que comenzar con caracteres en minusculas de la a-z, podemos incluir . y -
    //@ obligación de llevar @
    //tiene que terminar con caracteres entre a-z y con . y con caracteres de a-z y entre 2 y 6 de longitug.
  re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
  if (!email.value.match(re)) {
      ErrorEmail.style.display = 'block';
      return false;
  } else {
    ErrorEmail.style.display = 'none';
  }
  
  ////Validamos que tenga sdeleccionado el tamaño
  tamano = document.getElementsByName("size");
  var seleccionado = false;
  for(var i=0; i<tamano.length; i++) {
      if(tamano[i].checked) {
          seleccionado = true;
          ErrorRadio.style.display = 'none';
          break;
              
      }
  }

  if(!seleccionado) {
      ErrorRadio.style.display = 'block';
      return false;
  }

  //Validamos que al menos tengamos marcado un ingrediente.
  ingre = document.getElementsByName("ingredientes");
  var seleccionado = false;
  for(var i=0; i<ingre.length; i++) {
      if(ingre[i].checked) {
          seleccionado = true;
          ErrorCheck.style.display = 'none';
          break;

      }
  }
  if(!seleccionado) {
    ErrorCheck.style.display = 'block';
    return false;
}
  // Si el script ha llegado a este punto, todas las condiciones
  // se han cumplido, por lo que se devuelve el valor true
  // para que se propague el evento de mandar el formulario
  mostrarVentana();
  return false;
}

window.onload = function(){
  btnvalidar.onclick=validacion;
  btnCancelar.onclick=cancelarVentana;
  formulario.onsubmit = ocultarVentana;                          
}