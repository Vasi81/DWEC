var nombref;
var direccionf;
var telefonof;
var emailf;
var boton;
var errorN;
var errorD;
var errorT;
var errorE;
var c1;
var c2;
var c3;
var c4;
var sePuede;
var botonAjax;


//Funcion para iniciar las variables
function inicio() {
    nombref = document.getElementById("nombrep");
    direccionf = document.getElementById("direccionp");
    telefonof = document.getElementById("telefonop");
    emailf = document.getElementById("emailp");
    boton = document.getElementById("botonAceptar");
    errorN = document.getElementById("error1");
    errorD = document.getElementById("error2");
    errorT = document.getElementById("error3");
    errorE = document.getElementById("error4");
    c1 = document.getElementById("cbox1").checked;
    c2 = document.getElementById("cbox2").checked;
    c3 = document.getElementById("cbox3").checked;
    c4 = document.getElementById("cbox4").checked;


    botonAjax = document.getElementById("botonA");

}

//Funcion para comprobar que los espacios se validen y salgan los errores correctos
function comprobar() {

    if (nombref.value.trim() == "") {
        errorN.textContent = "Falta el nombre";
        alert('[ERROR] El campo nombre debe de estar relleno');
    } else {
        errorN.textContent = "";
        nombreRegex = /^[A-Z][a-z]/
        if (!nombreRegex.test(nombref.value)) {
            alert('[ERROR] El campo nombre debe de estar en formato correcto relleno');
        }
    }

    if (direccionf.value.trim() == "") {
        errorD.textContent = "Falta la dirección";
        alert('[ERROR] El campo direccion debe de estar relleno');
    } else {
        errorD.textContent = "";
    }

    if (telefonof.value.trim() == "") {
        errorT.textContent = "Falta el telefono";
        alert('[ERROR] El campo telefono debe de estar relleno');
    } else {
        errorT.textContent = "";
        telefonoRegex = /[679][0-9]{8}/ //Utilizamos las expresiones regulares
        if (!telefonoRegex.test(telefonof.value)) {
            alert('[ERROR] El campo telefono debe de estar en formato correcto relleno');

        }
    }

    if (emailf.value.trim() == "") {
        errorE.textContent = "Falta el email";
        alert('[ERROR] El campo email debe de estar relleno');
    } else {
        errorE.textContent = "";
        //Expresiones regulares para validar
        emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!emailRegex.test(emailf.value)) {
            alert('[ERROR] El campo email debe de estar en formato correcto relleno');
        }
    }

    rb = document.getElementsByName("tamañoPizzas");
    var seleccionado = false;
    for (var i = 0; i < rb.length; i++) {
        if (rb[i].checked) {
            seleccionado = true;
            break;
        }
    }
    if (!seleccionado) {
        alert('[ERROR] Debe seleccionar el tamaño de la pizzas');

    }

    if (!((document.getElementById("cbox1").checked) || (document.getElementById("cbox2").checked) || (document.getElementById("cbox3").checked) || (document.getElementById("cbox4").checked))) {
        alert('[ERROR] Debe seleccionar al menos un ingrediente');

    }
}


//Funcion para calcular el precio de las pizzas final
//Ajax
const URL_DESTINO = "http://127.0.0.1:5501/Ejercicio%204%20JQUERY/"
const RECURSO = "precios.json"

function cargarPrecios() {
    $.ajax({
        'type': 'GET', 
        'url': URL_DESTINO + RECURSO,
        'async': true, 
    }).done(calcular)
    .fail(procesarError)
}


function calcular(jsonDoc) {
    let array1 = jsonDoc.Pizzeria.Tamaños;
    let array2 = jsonDoc.Pizzeria.Ingredientes;
    rb = document.getElementsByName("tamañoPizzas");
    for (var i = 0; i < rb.length; i++) {
        if (rb[i].checked) {
            switch (i) {
                case 0:
                    $.each(array1,function(i,cd1){
                        $.each(array2,function(i,cd2){
                            var precioFinal = 0;
                            var precioacumulado1 = 0;
                            var precioacumulado2 = 0;
                            var precioacumulado3 = 0;
                            var precioacumulado4 = 0;
                            var precioacumulado5 = 0;
                            var cosasSumar = 0;
                            precioacumulado1 = cosasSumar + cd1.Pequeño;
                            if (document.getElementById("cbox1").checked) {
                                precioacumulado2 = cosasSumar + cd2.Huevo;

                            }
                            if (document.getElementById("cbox2").checked) {
                                precioacumulado3 = cosasSumar + cd2.Cebolla;

                            }
                            if (document.getElementById("cbox3").checked) {
                                precioacumulado4 = cosasSumar + cd2.Pepperoni;

                            }
                            if (document.getElementById("cbox4").checked) {
                                precioacumulado5 = cosasSumar + cd2.Salchicha;

                            }
                            precioFinal = precioacumulado1 + precioacumulado2 + precioacumulado3 + precioacumulado4 + precioacumulado5;
                            console.log(precioFinal);

                            if (!((nombref.value.trim() == "") || (direccionf.value.trim() == "") || (telefonof.value.trim() == "") || (emailf.value.trim() == ""))) {
                                alert("El precio a pagar es de " + precioFinal + " €");
                            }
                        })
                    })

                    break;
                case 1:
                    $.each(array1,function(i,cd1){
                        $.each(array2,function(i,cd2){
                            var precioFinal = 0;
                            var precioacumulado1 = 0;
                            var precioacumulado2 = 0;
                            var precioacumulado3 = 0;
                            var precioacumulado4 = 0;
                            var precioacumulado5 = 0;
                            var cosasSumar = 0;
                            precioacumulado1 = cosasSumar + cd1.Mediano;
                            if (document.getElementById("cbox1").checked) {
                                precioacumulado2 = cosasSumar + cd2.Huevo;

                            }
                            if (document.getElementById("cbox2").checked) {
                                precioacumulado3 = cosasSumar + cd2.Cebolla;

                            }
                            if (document.getElementById("cbox3").checked) {
                                precioacumulado4 = cosasSumar + cd2.Pepperoni;

                            }
                            if (document.getElementById("cbox4").checked) {
                                precioacumulado5 = cosasSumar + cd2.Salchicha;

                            }
                            precioFinal = precioacumulado1 + precioacumulado2 + precioacumulado3 + precioacumulado4 + precioacumulado5;
                            console.log(precioFinal);


                            if (!((nombref.value.trim() == "") || (direccionf.value.trim() == "") || (telefonof.value.trim() == "") || (emailf.value.trim() == ""))) {
                                alert("El precio a pagar es de " + precioFinal + " €");
                            }
                        })
                    })
                

                    break;
                case 2:
                    $.each(array1,function(i,cd1){
                        $.each(array2,function(i,cd2){
                            var precioFinal = 0;
                            var precioacumulado1 = 0;
                            var precioacumulado2 = 0;
                            var precioacumulado3 = 0;
                            var precioacumulado4 = 0;
                            var precioacumulado5 = 0;
                            var cosasSumar = 0;
                            precioacumulado1 = cosasSumar + cd1.Grande;
                            if (document.getElementById("cbox1").checked) {
                                precioacumulado2 = cosasSumar + cd2.Huevo;

                            }
                            if (document.getElementById("cbox2").checked) {
                                precioacumulado3 = cosasSumar + cd2.Cebolla;

                            }
                            if (document.getElementById("cbox3").checked) {
                                precioacumulado4 = cosasSumar + cd2.Pepperoni;

                            }
                            if (document.getElementById("cbox4").checked) {
                                precioacumulado5 = cosasSumar + cd2.Salchicha;

                            }
                            precioFinal = precioacumulado1 + precioacumulado2 + precioacumulado3 + precioacumulado4 + precioacumulado5;
                            console.log(precioFinal);

                            if (!((nombref.value.trim() == "") || (direccionf.value.trim() == "") || (telefonof.value.trim() == "") || (emailf.value.trim() == ""))) {
                                alert("El precio a pagar es de " + precioFinal + " €");
                            }
                        })
                    })


                    break;
                default:
                    break;
            }
        }
    }

}







function cargar() {

    $.ajax({
            'type': 'GET', 
            'url': URL_DESTINO + RECURSO,
            'async': true, 
        }).done(procesarLista)
        .fail(procesarError)



}

function procesarError(error) {
    alert("No funciona")
    console.log(error)
}

function procesarLista(jsonDoc) {  
    let array1 = jsonDoc.Pizzeria.Tamaños;
    let array2 = jsonDoc.Pizzeria.Ingredientes;

    $("#tbodyBusqueda1").html('')
    $("#tbodyBusqueda2").html('')

    $.each(array1,function(i,cd){
        let tr = $(`<tr>
                <td>${cd.Grande}</td><td></td>
                <td>${cd.Mediano}</td><td></td>
                <td>${cd.Pequeño}</td>
           </tr>`)
        
        tr.appendTo("#tbodyBusqueda1")
    })

    $.each(array2,function(i,cd){
        
        let tr = $(`<tr>
                <td>${cd.Huevo}</td><td></td>
                <td>${cd.Cebolla}</td><td></td>
                <td>${cd.Pepperoni}</td><td></td>
                <td>${cd.Salchicha}</td>
           </tr>`)
        
        tr.appendTo("#tbodyBusqueda2")
    })
}

//Cargamos los eventos en el boton
function eventos() {
    boton.addEventListener("click", comprobar);
    boton.addEventListener("click", cargarPrecios);
    botonAjax.addEventListener("click", cargar);
}

window.onload = function () {
    inicio();
    eventos();
}