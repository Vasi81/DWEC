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

}

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
        telefonoRegex = /[1-9]{9}/
        if (!telefonoRegex.test(telefonof.value)) {
            alert('[ERROR] El campo telefono debe de estar en formato correcto relleno');

        }
    }

    if (emailf.value.trim() == "") {
        errorE.textContent = "Falta el email";
        alert('[ERROR] El campo email debe de estar relleno');
    } else {
        errorE.textContent = "";
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
        return false;
    }

    if (!((document.getElementById("cbox1").checked) || (document.getElementById("cbox2").checked) || (document.getElementById("cbox3").checked) || (document.getElementById("cbox4").checked))) {
        alert('[ERROR] Debe seleccionar al menos un ingrediente');
    }
}

function calcular() {
    rb = document.getElementsByName("tamañoPizzas");
    for (var i = 0; i < rb.length; i++) {
        if (rb[i].checked) {
            switch (i) {
                case 0:
                    var precioFinal = 0;
                    var precioacumulado1 = 0;
                    var precioacumulado2 = 0;
                    var precioacumulado3 = 0;
                    var precioacumulado4 = 0;
                    var precioacumulado5 = 0;
                    var cosasSumar = 0;
                    precioacumulado1 = cosasSumar + 5;
                    if (document.getElementById("cbox1").checked) {
                        precioacumulado2 = cosasSumar + 1;

                    }
                    if (document.getElementById("cbox2").checked) {
                        precioacumulado3 = cosasSumar + 1;

                    }
                    if (document.getElementById("cbox3").checked) {
                        precioacumulado4 = cosasSumar + 1;

                    }
                    if (document.getElementById("cbox4").checked) {
                        precioacumulado5 = cosasSumar + 1;

                    }
                    precioFinal = precioacumulado1 + precioacumulado2 + precioacumulado3 + precioacumulado4 + precioacumulado5;
                    console.log(precioFinal);
                    alert("El precio a pagar es de " + precioFinal + " €");
                    break;
                case 1:
                    var precioFinal = 0;
                    var precioacumulado1 = 0;
                    var precioacumulado2 = 0;
                    var precioacumulado3 = 0;
                    var precioacumulado4 = 0;
                    var precioacumulado5 = 0;
                    var cosasSumar = 0;
                    precioacumulado1 = cosasSumar + 10;
                    if (document.getElementById("cbox1").checked) {
                        precioacumulado2 = cosasSumar + 1;

                    }
                    if (document.getElementById("cbox2").checked) {
                        precioacumulado3 = cosasSumar + 1;

                    }
                    if (document.getElementById("cbox3").checked) {
                        precioacumulado4 = cosasSumar + 1;

                    }
                    if (document.getElementById("cbox4").checked) {
                        precioacumulado5 = cosasSumar + 1;

                    }
                    precioFinal = precioacumulado1 + precioacumulado2 + precioacumulado3 + precioacumulado4 + precioacumulado5;
                    console.log(precioFinal);
                    alert("El precio a pagar es de " + precioFinal + " €");
                    break;
                case 2:
                    var precioFinal = 0;
                    var precioacumulado1 = 0;
                    var precioacumulado2 = 0;
                    var precioacumulado3 = 0;
                    var precioacumulado4 = 0;
                    var precioacumulado5 = 0;
                    var cosasSumar = 0;
                    precioacumulado1 = cosasSumar + 15;
                    if (document.getElementById("cbox1").checked) {
                        precioacumulado2 = cosasSumar + 1;

                    }
                    if (document.getElementById("cbox2").checked) {
                        precioacumulado3 = cosasSumar + 1;

                    }
                    if (document.getElementById("cbox3").checked) {
                        precioacumulado4 = cosasSumar + 1;

                    }
                    if (document.getElementById("cbox4").checked) {
                        precioacumulado5 = cosasSumar + 1;

                    }
                    precioFinal = precioacumulado1 + precioacumulado2 + precioacumulado3 + precioacumulado4 + precioacumulado5;
                    console.log(precioFinal);
                    alert("El precio a pagar es de " + precioFinal + " €");
                    break;
                default:
                    break;
            }
        }
    }
}

function eventos() {
    boton.addEventListener("click", comprobar);
    boton.addEventListener("click", calcular);
}

window.onload = function () {
    inicio();
    eventos();
}