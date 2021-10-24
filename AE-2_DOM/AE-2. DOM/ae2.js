/*
En todo el codigo se ha seguido el mismo criterio todo el rato.
Cargamos todos los datos en el FORM para poder gestionar una petición.
Despues de crear cualquier elemento se le asignas unas propiedades
y se guarda en su elemento correspondiente, luego se guarda en el form
y para acabar se vuelca todo el DOM para poder mostrarlo en el HTML.
*/

dom = document.getElementById("principal");

form1 = document.createElement('form');
dom.appendChild(form1);

img1 = document.createElement('img');
img1.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/1200px-Domino%27s_pizza_logo.svg.png";
form1.appendChild(img1);
salto_linea = document.createElement('br');
form1.appendChild(salto_linea);

datos();
radio1();
radio2();
fncheckbox();
select();
textArea();

img2 = document.createElement('img');
img2.src = "https://w3hubs.com/wepheegn/2018/07/Simple-Footer-In-Html5-and-Css3.png";
form1.appendChild(img2);

// Se ha organizado todo en funciones para tener 2 ventajas:
// -Poder mover los elementos de manera más facil y visual
// -Tener el código más organizado

// Funcion para cargar los campos de texto + input
function datos() {
    texto1 = document.createElement('text');
    texto1.textContent = "DNI:";
    form1.appendChild(texto1);

    domDni = document.createElement('input');
    domDni.placeholder = "DNI o NIE";
    form1.appendChild(domDni);
    salto_linea = document.createElement('br');
    form1.appendChild(salto_linea);

    texto2 = document.createElement('text');
    texto2.textContent = "Nombre:";
    form1.appendChild(texto2);

    domNombre = document.createElement('input');
    domNombre.placeholder = "Nombre";
    form1.appendChild(domNombre);
    salto_linea = document.createElement('br');
    form1.appendChild(salto_linea);

    texto3 = document.createElement('text');
    texto3.textContent = "Apellido:";
    form1.appendChild(texto3);

    domApellido = document.createElement('input');
    domApellido.placeholder = "Apellidos";
    form1.appendChild(domApellido);
    salto_linea = document.createElement('br');
    form1.appendChild(salto_linea);

    texto6 = document.createElement('text');
    texto6.textContent = "Dirección:";
    form1.appendChild(texto6);

    domDir = document.createElement('input');
    domDir.id = 'searchInput';
    domDir.setAttribute("onkeypress", "this.style.width = (this.value.length + 1) + 'em';");
    form1.appendChild(domDir);
    salto_linea = document.createElement('br');
    form1.appendChild(salto_linea);

    texto4 = document.createElement('text');
    texto4.textContent = "Telefono:";
    form1.appendChild(texto4);

    domTelefono = document.createElement('input');
    domTelefono.id = 'id4';
    domTelefono.placeholder = "Telefono"
    form1.appendChild(domTelefono);
    salto_linea = document.createElement('br');
    form1.appendChild(salto_linea);
}

// Funcion para cargar los campos de texto y el primger grupo de radio button
function radio1() {
    div1 = document.createElement('div');
    div1.id = 'div-radio1';
    form1.appendChild(div1);

    texto1 = document.createElement('text');
    texto1.textContent = "Elija la pizza";
    div1.appendChild(texto1);
    salto_linea = document.createElement('br');
    div1.appendChild(salto_linea);

    texto1 = document.createElement('text');
    texto1.textContent = "Barbacoa";
    div1.appendChild(texto1);

    radioBtn1 = document.createElement('input');
    radioBtn1.setAttribute("type", "radio");
    radioBtn1.setAttribute("name", "radio_grupo1");
    div1.appendChild(radioBtn1);

    texto1 = document.createElement('text');
    texto1.textContent = "Carbonara";
    div1.appendChild(texto1);

    radioBtn2 = document.createElement('input');
    radioBtn2.setAttribute("type", "radio");
    radioBtn2.setAttribute("name", "radio_grupo1");
    div1.appendChild(radioBtn2);

    texto1 = document.createElement('text');
    texto1.textContent = "Cuatro quesos";
    div1.appendChild(texto1);

    radioBtn3 = document.createElement('input');
    radioBtn3.setAttribute("type", "radio");
    radioBtn3.setAttribute("name", "radio_grupo1");
    div1.appendChild(radioBtn3);

    texto1 = document.createElement('text');
    texto1.textContent = "Jamon y queso";
    div1.appendChild(texto1);

    radioBtn4 = document.createElement('input');
    radioBtn4.setAttribute("type", "radio");
    radioBtn4.setAttribute("name", "radio_grupo1");
    div1.appendChild(radioBtn4);
    salto_linea = document.createElement('br');
    div1.appendChild(salto_linea);
}

// Funcion para cargar los campos de texto y el segundo grupo de radio button
function radio2() {
    div2 = document.createElement('div');
    div2.id = 'div-radio2';
    form1.appendChild(div2);

    texto1 = document.createElement('text');
    texto1.textContent = "Elija una bebida:";
    div2.appendChild(texto1);
    salto_linea = document.createElement('br');
    div2.appendChild(salto_linea);

    texto1 = document.createElement('text');
    texto1.textContent = "Coca-Cola";
    div2.appendChild(texto1);

    radioBtn5 = document.createElement('input');
    radioBtn5.setAttribute("type", "radio");
    radioBtn5.setAttribute("name", "radio_grupo2");
    div2.appendChild(radioBtn5);

    texto1 = document.createElement('text');
    texto1.textContent = "Pepsi";
    div2.appendChild(texto1);

    radioBtn6 = document.createElement('input');
    radioBtn6.setAttribute("type", "radio");
    radioBtn6.setAttribute("name", "radio_grupo2");
    div2.appendChild(radioBtn6);

    texto1 = document.createElement('text');
    texto1.textContent = "Fanta";
    div2.appendChild(texto1);

    radioBtn7 = document.createElement('input');
    radioBtn7.setAttribute("type", "radio");
    radioBtn7.setAttribute("name", "radio_grupo2");
    div2.appendChild(radioBtn7);

    texto1 = document.createElement('text');
    texto1.textContent = "Sprite";
    div2.appendChild(texto1);

    radioBtn8 = document.createElement('input');
    radioBtn8.setAttribute("type", "radio");
    radioBtn8.setAttribute("name", "radio_grupo2");
    div2.appendChild(radioBtn8);
    salto_linea = document.createElement('br');
    div2.appendChild(salto_linea);
}

// Funcion para cargar los campos de texto y los checkbox
function fncheckbox() {
    div3 = document.createElement('div');
    div3.id = 'div-checkbox';
    form1.appendChild(div3);

    texto5 = document.createElement('text');
    texto5.textContent = "Elija un extra";
    div3.appendChild(texto5);
    salto_linea = document.createElement('br');
    div3.appendChild(salto_linea);

    texto5 = document.createElement('text');
    texto5.textContent = "Pepperoni";
    div3.appendChild(texto5);

    checkBox1 = document.createElement('input');
    checkBox1.setAttribute("type", "checkbox");
    div3.appendChild(checkBox1);

    texto5 = document.createElement('text');
    texto5.textContent = "Bacon";
    div3.appendChild(texto5);

    checkBox2 = document.createElement('input');
    checkBox2.setAttribute("type", "checkbox");
    div3.appendChild(checkBox2);

    texto5 = document.createElement('text');
    texto5.textContent = "Huevo";
    div3.appendChild(texto5);

    checkBox3 = document.createElement('input');
    checkBox3.setAttribute("type", "checkbox");
    div3.appendChild(checkBox3);

    texto5 = document.createElement('text');
    texto5.textContent = "Pepinillo";
    div3.appendChild(texto5);

    checkBox4 = document.createElement('input');
    checkBox4.setAttribute("type", "checkbox");
    div3.appendChild(checkBox4);

    texto5 = document.createElement('text');
    texto5.textContent = "Queso";
    div3.appendChild(texto5);

    checkBox2 = document.createElement('input');
    checkBox2.setAttribute("type", "checkbox");
    div3.appendChild(checkBox2);
    salto_linea = document.createElement('br');
    div3.appendChild(salto_linea);
}


// Funcion para cargar los campos de texto y el select con las opciones para la hora de entrega
function select() {
    texto1 = document.createElement('text');
    texto1.textContent = "Hora para la entrega";
    form1.appendChild(texto1);
    salto_linea = document.createElement('br');
    form1.appendChild(salto_linea);

    let array = ["Lo antes posible", "12:00", "13:00", "14:00"];

    let selectList = document.createElement("select");
    form1.appendChild(selectList);

    for (let i = 0; i < array.length; i++) {
        let option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];
        selectList.appendChild(option);
    }
    salto_linea = document.createElement('br');
    form1.appendChild(salto_linea);
}

// Funcion para cargar el textarea por si desea algo en especial que no se contemple en las opciones anteriores.
function textArea() {
    let textArea1 = document.createElement("textarea");
    textArea1.placeholder = 'Observaciones';
    form1.appendChild(textArea1);
    salto_linea = document.createElement('br');
    form1.appendChild(salto_linea);
}

// API GOOGLE
// La api proporciona todos los datos necesarios para usar el google maps pero en ásta ocasión
// solo he usado la parte del autocompletado.
// Lo que hace es que al tu escribir una dirección en el campo "direccion", te va sugeriendo la dirección
// correcta en base a los datos reales del mundo.
function initMap() {
    let input = document.getElementById('searchInput');
    let autocomplete = new google.maps.places.Autocomplete(input);
}