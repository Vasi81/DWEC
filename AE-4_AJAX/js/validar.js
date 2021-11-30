const URL_DESTINO = "http://127.0.0.1:5500/Actividades/AE-4_AJAX/json/"
const RECURSO = "pricesize.json"
/**
 * mostrarVentana:
 * Esta función muestra la pantalla oculta para confirmar el pedido.
 * Antes obtenemos los últimos precios de las pizzas y de los ingredientes.
 */
 function mostrarVentana(){
  // Accedemos al contenedor
  var ventana = document.getElementById('ventanaEmergente'); 		    		    
  // Definimos su posición vertical. La ponemos fija para simplificar el código
  ventana.style.marginTop = "100px";
  // Definimos su posición horizontal, en base a la anchura del cliente
  ventana.style.marginLeft = ((document.body.clientWidth-350) / 2) +  "px"; 
  // Y lo hacemos visible
  ventana.style.display = 'block'; //en el stylo del div esta puesto a "none", con block lo hacemos visible
  //Tamaño pizza
  var sizepizza=document.getElementById("tamanopizza");
  var valorseleccion = "";
   ////Obtenemos el tipo de pizza seleccionado.
   tamano = document.getElementsByName("size");
   var seleccionado = false;
   for(var i=0; i<tamano.length; i++) {
       if(tamano[i].checked) {
           valorseleccion = tamano[i].id;
           //valorpizza = parseInt(tamano[i].value);
           calcularpizza(tamano[i].id);
           break;
       }
   }


  //Ingredientes
  var arrayingredientes=[];
 // ingre = document.getElementsByName("ingredientes");
  for(var i=0; i<ingre.length; i++) {
      if(ingre[i].checked) {
        arrayingredientes[i]=ingre[i].id;
        //numingredientes=numingredientes + parseInt(ingre[i].value);
      }
  }
  console.log("Ingredientes: " + arrayingredientes);
  calcularingredientes(arrayingredientes);

}
/**
 * ocultarVentana:
 * Ocultamos la ventana emergente
 * @returns true
 */
function ocultarVentana(){
  //Accedemos al contenedor 
  var ventana = document.getElementById('ventanaEmergente'); 
  //Y lo hacemos visible
  ventana.style.display = 'none'; // Y lo hacemos invisible
  alert("Mandamos el formulario!")
  return true;
}  
/**
 * cancelarVentana:
 * Reseteamos el fomrulario.
 * @returns false 
 */
function cancelarVentana(){
  //Accedemos al contenedor 
  var ventana = document.getElementById('ventanaEmergente'); 
  //Y lo hacemos visible
  ventana.style.display = 'none'; // Y lo hacemos invisible
  alert("Cancelamos el formulario!")
  document.getElementById("formulario").reset();
  return false;
} 
 
/**
 * validacion:
 * Esta función valida los valores y las reglas aplicacdas.
 * @returns false
 */
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
  console.log("tamaño");
  var seleccionado = false;
  for(var i=0; i<tamano.length; i++) {
      if(tamano[i].checked) {
          seleccionado = true;
          ErrorRadio.style.display = 'none';
          break;
              
      }
  }
  console.log(seleccionado);
  if(!seleccionado) {
      console.log("block");
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

/**
 * refreshpizza:
 * Esta función refresca el html con las últimas pizzas incluidas, mediante AJAX.
 * @returns 
 */
function refreshpizza(){
 console.log("Refrescamos pizza");

 var div = document.getElementById("subtype-pizza");
 div.parentNode.removeChild(div);

 inicializarpizza();
  return false;
}

/**
 * refreshIngredientes
 * Esta función refresca el html con las últimos ingredientes incluidos, mediante AJAX.
 * @returns 
 */
function refreshIngredientes(){
  var div = document.getElementById("subtype-ingred");
  div.parentNode.removeChild(div);
 
  inicializarIngredientes();
  return false;
}


function inicializarpizza(){
 
  let xmlHttp = new XMLHttpRequest()

  xmlHttp.onreadystatechange = function(){        

      if( this.readyState == 4){
          if(this.status == 200){
              procesarRespuestapizza(this.responseText)
              console.log("responseText: "+xmlHttp.responseText)
          } else {
              alert("No se encuentra el recurso!!!")
          }
      }
  }



  xmlHttp.open('GET',URL_DESTINO + RECURSO, true)
  xmlHttp.send()


  console.log("responseText: "+xmlHttp.responseText)
  

}

function inicializarIngredientes(){
 
  let xmlHttp = new XMLHttpRequest()

  xmlHttp.onreadystatechange = function(){        

      if( this.readyState == 4){
          if(this.status == 200){
            procesarRespuestaingredients(this.responseText)
              console.log("responseText: "+xmlHttp.responseText)
          } else {
              alert("No se encuentra el recurso!!!")
          }
      }
  }



  xmlHttp.open('GET',URL_DESTINO + RECURSO, true)
  xmlHttp.send()


  console.log("responseText: "+xmlHttp.responseText)

}

function procesarRespuestapizza(respuesta){
   var objetoJson = JSON.parse(respuesta)
   console.log(objetoJson)

   var arraypizzas = objetoJson.pizza.sizeprice;
   
   let  div = document.getElementById("containerPizza")
   console.log(div);
  //Incluimos h2
  let h2=document.createElement("h2");
  texto = document.createTextNode("Tamaño");
  h2.appendChild(texto);
  div.appendChild(h2);

  //Creamos un Div local
  let divlocal=document.createElement("div");
  divlocal.className="subtype";
  divlocal.id="subtype-pizza";
     for(let pz of arraypizzas){
        let opntionbox = document.createElement("input");
        opntionbox.setAttribute("type", "radio");
        opntionbox.setAttribute("name", "size");
        opntionbox.setAttribute("id", pz.size);    
        opntionbox.setAttribute("value",pz.price);
        divlocal.appendChild(opntionbox)
        texto = document.createTextNode(pz.size);
        divlocal.appendChild(texto)
        divlocal.appendChild(document.createElement("br"))
      }
  div.appendChild(divlocal);
    //Incluimos h5 para mostrar los errores.
    let h5=document.createElement("h5");
    h5.setAttribute("id", "ErrorRadio");
    texto = document.createTextNode("Por favor, seleccione un tamaño para la pizza");
    h5.appendChild(texto);
    divlocal.appendChild(h5);
  
}

function procesarRespuestaingredients(respuesta){
  var objetoJson = JSON.parse(respuesta)
  console.log(objetoJson)

  var arraypizzas = objetoJson.ingredients.ingredientsprice;
  
  let  div = document.getElementById("containerIngredientes")
  console.log(div);
 //Incluimos h2
 let h2=document.createElement("h2");
 texto = document.createTextNode("Ingredientes");
 h2.appendChild(texto);
 div.appendChild(h2);
 
 //Creamos un Div local
 let divlocal=document.createElement("div");
 divlocal.className="subtype";
 divlocal.id="subtype-ingred";
    for(let pz of arraypizzas){
       let opntionbox = document.createElement("input");
       opntionbox.setAttribute("type", "checkbox");
       opntionbox.setAttribute("name", "ingredientes");
       opntionbox.setAttribute("id", pz.ingredients);    
       opntionbox.setAttribute("value",pz.price);
       divlocal.appendChild(opntionbox)
       texto = document.createTextNode(pz.ingredients);
       divlocal.appendChild(texto)
       divlocal.appendChild(document.createElement("br"))
     }
 div.appendChild(divlocal);
   //Incluimos h5 para mostrar los errores.
   let h5=document.createElement("h5");
   h5.setAttribute("id", "ErrorCheck");
   texto = document.createTextNode("Por favor, seleccione algun ingrediente para la pizza");
   h5.appendChild(texto);
   divlocal.appendChild(h5);
 
}

/**
 * Calcularpizza:
 * Esta función obtiene el precio de una pizza mediante su idpizza, que obtenemos al cargar los opntions.(callback)
 * @param {*} idpizza 
 */
function calcularpizza(idpizza) {
  console.log(idpizza);
  let xmlHttp = new XMLHttpRequest()
 
  xmlHttp.onreadystatechange = function () {
      if (this.readyState == 4) {
          if (this.status == 200) {
            procesarRespuesta(this.responseText,idpizza)

          } else {
              alert("ZASCA!")
          }
      }
  }


  xmlHttp.open('GET', URL_DESTINO + RECURSO, true)
  xmlHttp.send()
 
}

/**
 * procesarRespuesta:
 * Esta función es la que procesa el objeto JSON y busca el idpizza para obtener su último precio.
 * @param {*} jsonDoc 
 * @param {*} idpizza 
 */
function procesarRespuesta(jsonDoc,idpizza) {
  console.log(idpizza);
  var objetoJson = JSON.parse(jsonDoc)
  console.log(objetoJson)


  let  p = document.getElementById("preciopizza")
  p.style.display = 'none'
  var arraypizzas = objetoJson.pizza.sizeprice;

  valorpizza=0;
  for(let pz of arraypizzas){
    console.log(pz.size);
    console.log(idpizza);
      if (pz.size==idpizza){
        valorpizza=pz.price;
        texto = document.createTextNode(pz.price);
        p.appendChild(texto)
      }

  }

}
/**
 * calcularingredientes:
 * Esta función obtiene el precio de los ingredientes mediante un array , que obtenemos al cargar los checks seleccionados.(callback)
 * @param {*} arrayingredientes 
 */
function calcularingredientes(arrayingredientes) {
  console.log(arrayingredientes);
  let xmlHttp = new XMLHttpRequest()
  valorpizza=0;
  xmlHttp.onreadystatechange = function () {
      if (this.readyState == 4) {
          if (this.status == 200) {
            procesarRespuestaIngredientes(this.responseText,arrayingredientes)

          } else {
              alert("ZASCA!")
          }
      }
  }


  xmlHttp.open('GET', URL_DESTINO + RECURSO, true)
  xmlHttp.send()
 
}

/**
 * procesarRespuestaIngredientes:
 * Esta función es la que procesa el objeto JSON y busca los disntitos ingredientes seleccionados para obtener su último precio.
 * Al ser asincrono, desde esta función es la mejor manera de pintar el precio total del pedido.
 * @param {*} jsonDoc 
 * @param {*} arrayseleccion 
 */
function procesarRespuestaIngredientes(jsonDoc,arrayseleccion) {

  var objetoJson = JSON.parse(jsonDoc)
  console.log(objetoJson)

  let  p = document.getElementById("ingredientes")
  var arrayingredientes = objetoJson.ingredients.ingredientsprice;

  summaingredientes=0;
  for(let ig of arrayingredientes){
    for (let i = 0; i < arrayseleccion.length; i++) {
      if (ig.ingredients==arrayseleccion[i]){
        summaingredientes=summaingredientes  + parseInt(ig.price);
      }
    }
  }
  texto = document.createTextNode(summaingredientes + "€");
  p.appendChild(texto)

 
  //Total Pedido
  var pp=document.getElementById("preciopizza");
  var valorpizza=pp.textContent;

  var  t = document.getElementById("tamanopizza")
  var contenidot = document.createTextNode(valorpizza + "€");
  t.appendChild(contenidot);

  
  valorpedido=parseInt(valorpizza)+parseInt(summaingredientes);


  var totalpedido=document.getElementById("totalpedido");
  var contenido = document.createTextNode(valorpedido + "€");
  totalpedido.appendChild(contenido);


  
}

window.onload = function(){ //Esperamos que se carge toda la página.
  btnvalidar.onclick=validacion;
  btnCancelar.onclick=cancelarVentana;
  btnRefreshIngred.onclick=refreshIngredientes;
  btnRefreshPizza.onclick=refreshpizza;
  formulario.onsubmit = ocultarVentana;       
  formulario.onload=inicializarpizza(),inicializarIngredientes();   //Cargamos las dos funciones en el load del formualrio.           
}