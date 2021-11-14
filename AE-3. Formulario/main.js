let precios = [
    { name: 'small', price: 5 },
    { name: 'medium', price: 10 },
    { name: 'large', price: 15 },
    { name: 'bacon', price: 1, used: false },
    { name: 'queso', price: 1, used: false },
    { name: 'huevo', price: 1, used: false },
    { name: 'cebolla', price: 1, used: false },
];

var precioPedido = 0;
var precioAnterior = 0;
var sizeAnterior = '';

function validateEmail(e) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(e);
}

function verificarEmail() {
    if (email.value.length > 0) {
        if (!validateEmail(email.value)) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

function sizePizza() {
    const radios = document.getElementsByName('tamPizza');

    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            for (let j = 0; j < precios.length; j++) {
                if (radios[i].value !== sizeAnterior) {
                    if (precios[j].name === radios[i].value) {
                        precioPedido += precios[j].price;
                        precioPedido -= precioAnterior;
                        sizeAnterior = radios[i].value;
                        precioAnterior = precios[j].price;
                    }
                }
            }
            break;
        }
    }
    document.getElementById("precio").innerHTML = 'Precio: ' + precioPedido;
    if (precioAnterior > 0) {
        return true;
    }
}

function ingredientes() {
    const ingredientes = document.getElementsByName('ingred');

    for (let i = 0, length = ingredientes.length; i < length; i++) {
        if (ingredientes[i].checked) {
            for (let j = 0; j < precios.length; j++) {
                if (precios[j].name === ingredientes[i].value) {
                    if (precios[j].used == false) {
                        precios[j].used = true;
                        precioPedido += precios[j].price;
                    }
                }
            }
        } else {
            for (let j = 0; j < precios.length; j++) {
                if (precios[j].name === ingredientes[i].value) {
                    if (precios[j].used == true) {
                        precioPedido -= precios[j].price;
                        precios[j].used = false;
                    }
                }
            }
        }
    }
    document.getElementById("precio").innerHTML = 'Precio: ' + precioPedido;

    for (let i = 0; i < ingredientes.length; i++) {
        if (ingredientes[i].checked) {
            return true;
        }
    }
}

function verificarNombre() {
    let name = document.getElementById("name");
    if (name.value.charAt(0).toUpperCase() == name.value.charAt(0) && name.value.length > 4) {
        return true;
    } else {
        name.focus();
        return false;
    }
}

function verificarPedido() {
    let adress = document.getElementById("adress").value;

    if (verificarEmail() && verificarNombre() && adress.length > 1 && sizePizza() && ingredientes()) {
        alert('Precio total del pedido: ' + precioPedido);
        return true;
    } else {
        return false;
    }
}

window.onload = function () {
    document.getElementById("formulario").reset();
    formulario.onsubmit = verificarPedido;
}