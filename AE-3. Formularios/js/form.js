//función que contiene todas las validaciones del formulario
function validar() {
  var nombre;
  var direccion;
  var telefono;
  var email;
  var tamanio;
  //acceso a los atributos y valores del formulario html
  nombre = document.getElementById("nombre").value;
  direccion = document.getElementById("direccion").value;
  telefono = document.getElementById("telefono").value;
  email = document.getElementById("email").value;
  tamanio = document.getElementsByName("tamanio");

  //expresiones regulares
  var expresion_mail = /^\w+@\w+\.+[a-z]{2,3}$/; //expresion regular para el campo e-mail
  var expresion_nom = /^[A-Z]/; //expresión regular para el campo nombre
  var expresion_tel = /^\d{9}$/; //expresión regular para el campo teléfono

  //condición de rellenar todos los campos, si no se rellenan salta el alert
  if (nombre == "" || direccion == "" || telefono == "" || email == "") {
    alert("Todos los campos son obligatorios");
    return false;
  }
  //condición de la longitud del nombre, si tiene más de 50 caracteres salta un alert
  if (nombre.length > 50) {
    alert("El nombre es muy largo");
    return false;
  }
  //condición para que el nombre empieze por mayuscula, si no se cumple la expresión regular salta un alert
  if (!expresion_nom.test(nombre)) {
    alert("El nombre debe empezar con mayuscula");
    return false;
  }
  //condición que se tiene que cumplir para que el teléfono sea válido, si no se cumple la expresión regular salta un alert
  if (!expresion_tel.test(telefono)) {
    alert("El teléfono ingresado no es válido");
    return false;
  }
  //condición que se tiene que cumplir para que el e-mail sea válido, si no se cumple la expresión regular salta un alert
  if (!expresion_mail.test(email)) {
    alert("El correo no es válido");
    return false;
  }
  //condición para el tamaño de la pizza, si no hay uno seleccionado salta un alert
  if (!document.querySelector('input[name="tamanio"]:checked')) {
    alert("Error, debes elegir el tamaño");
    return false;
  }
  //condición para los ingredientes, si no hay al menos uno seleccionado salta un alert
  if (!(tomate.checked || queso.checked || jamon.checked || champ.checked)) {
    alert("Debe elegir al menos un ingrediente");
    return false;
  }
  //condición necesaria para calcular el precio del pédido, si se ha seleccionado se ejecuta la función abrirVentana()
  if ('input[name="tamanio"]:checked') {
    console.log(abrirVentana());
  }
  //función para calcular el precio del pédido, al ejecutarse se abre una ventana con el precio total del pédido
  function abrirVentana() {
    var myWindow = window.open(); //abre una ventana nueva en la que se muestra el precio total
    var peq = document.getElementById("peq");
    var med = document.getElementById("med");
    var gr = document.getElementById("gr");
    var ingrediente = document.getElementsByName("ingrediente");

    checked = false;
    ingrediente.value = 0;
    //recorre los ingredientes seleccionados
    for (var i = 0; i < ingrediente.length; i++) {
      if (ingrediente[i].checked) {
        checked = true;
        ingrediente.value++;
      }
    }
    //si se ha seleccionado el tamaño pequeño, hace la suma del valor del tamaño + los valores de los ingredientes seleccionados
    if (peq.checked) {
      peq.value = 5;
      var suma = parseInt(peq.value) + parseInt(ingrediente.value);
      myWindow.document.write("El total de tu pédido son: " + suma + "€");
      console.log(peq.value + cont);
    }
    //si se ha seleccionado el tamaño mediano, hace la suma del valor del tamaño + el valor los ingredientes seleccionados
    if (med.checked) {
      med.value = 10;
      var suma = parseInt(med.value) + parseInt(ingrediente.value);
      myWindow.document.write("El total de tu pédido son: " + suma + "€");
    }
    //si se ha seleccionado el tamaño grande, hace la suma del valor del tamaño + el valor los ingredientes seleccionados
    if (gr.checked) {
      gr.value = 15;
      var suma = parseInt(gr.value) + parseInt(ingrediente.value);
      myWindow.document.write("El total de tu pédido son: " + suma + "€");
    }
  }
}

window.onload = function () {
  formulario.onsubmit = validar;
};
