function cargar() {

    //Creamos el div
    var div = document.createElement("div");
    div.className = "dom";
    document.body.appendChild(div);

    var divi = document.createElement("div");
    divi.className = "inputs";
    div.appendChild(divi);

    var divc = document.createElement("div");
    divc.className = "Conjunto";
    div.appendChild(divc);
    
    var divc2 = document.createElement("div");
    divc2.className = "Conjunto2";
    div.appendChild(divc2);

    var divf = document.createElement("div");
    divf.className = "Conjuntof";
    div.appendChild(divf);

    //Creamos el dni
    var dni = document.createElement("p");
    dni.id = "iddni";
    var texto1 = document.createTextNode("DNI: ");
    dni.appendChild(texto1);
    var inputdni = document.createElement("input");
    inputdni.id = "inputdni";
    dni.appendChild(inputdni);
    divi.appendChild(dni);


    //Creamos el nombre
    var nombre = document.createElement("p");
    nombre.id = "idnombre";
    var texto2 = document.createTextNode("Nombre: ");
    nombre.appendChild(texto2);
    var inputnombre = document.createElement("input");
    inputnombre.id = "inputnombre";
    nombre.appendChild(inputnombre);
    divi.appendChild(nombre);

    //Creamos el apellido
    var apellidos = document.createElement("p");
    apellidos.id = "idapellidos";
    var texto3 = document.createTextNode("Apellidos: ");
    apellidos.appendChild(texto3);
    var inputapellidos = document.createElement("input");
    inputapellidos.id = "inputapellidos";
    apellidos.appendChild(inputapellidos);
    divi.appendChild(apellidos);

    //Creamos la direccion
    var direccion = document.createElement("p");
    direccion.id = "iddireccion";
    var texto4 = document.createTextNode("Direccion: ");
    direccion.appendChild(texto4);
    var inputdireccion = document.createElement("input");
    inputdireccion.id = "inputdireccion";
    direccion.appendChild(inputdireccion);
    divi.appendChild(direccion);

    //Creamos el telefono
    var telefono = document.createElement("p");
    telefono.id = "idtelefono";
    var texto5 = document.createTextNode("Telefono: ");
    telefono.appendChild(texto5);
    var inputtelefono = document.createElement("input");
    inputtelefono.id = "inputtelefono";
    telefono.appendChild(inputtelefono);
    divi.appendChild(telefono);

    //Crear radio button 1
    var div1 = document.createElement("div");
    div1.className = "radio1";
    divc.appendChild(div1);


    var enunciadoradio1 = document.createElement("p");
    enunciadoradio1.id = "enunciadoradio1";
    var textoradio1 = document.createTextNode("¿Cual te gusta más? ");
    enunciadoradio1.appendChild(textoradio1);
    div1.appendChild(enunciadoradio1);

    var o1r1 = document.createElement("input");
    o1r1.type = "radio";
    o1r1.id = "o1r1";
    div1.appendChild(o1r1);

    var l1r1 = document.createElement("label");
    var textolabel1r1 = document.createTextNode("Skyrim");
    l1r1.htmlFor = "o1r1";
    l1r1.appendChild(textolabel1r1);
    div1.appendChild(l1r1);

    var br1 = document.createElement("br");
    div1.appendChild(br1);

    var o2r1 = document.createElement("input");
    o2r1.type = "radio";
    o2r1.id = "o2r1";
    div1.appendChild(o2r1);

    var l2r1 = document.createElement("label");
    var textolabel2r1 = document.createTextNode("League of legends");
    l2r1.htmlFor = "o2r1";
    l2r1.appendChild(textolabel2r1);
    div1.appendChild(l2r1);

    var br2 = document.createElement("br");
    div1.appendChild(br2);

    var o3r1 = document.createElement("input");
    o3r1.type = "radio";
    o3r1.id = "o3r1";
    div1.appendChild(o3r1);

    var l3r1 = document.createElement("label");
    var textolabel3r1 = document.createTextNode("GTA 5");
    l3r1.htmlFor = "o3r1";
    l3r1.appendChild(textolabel3r1);
    div1.appendChild(l3r1);

    var br3 = document.createElement("br");
    div1.appendChild(br3);

    var o4r1 = document.createElement("input");
    o4r1.type = "radio";
    o4r1.id = "o4r1";
    div1.appendChild(o4r1);

    var l4r1 = document.createElement("label");
    var textolabel4r1 = document.createTextNode("Call of duty");
    l4r1.htmlFor = "o4r1";
    l4r1.appendChild(textolabel4r1);
    div1.appendChild(l4r1);

    var br4 = document.createElement("br");
    div1.appendChild(br4);

    //Crear radio button 2
    var div2 = document.createElement("div");
    div2.className = "radio2";
    divc.appendChild(div2);

    var enunciadoradio2 = document.createElement("p");
    enunciadoradio2.id = "enunciadoradio2";
    var textoradio2 = document.createTextNode("¿Que género te gusta más?");
    enunciadoradio2.appendChild(textoradio2);
    div2.appendChild(enunciadoradio2);

    var o1r2 = document.createElement("input");
    o1r2.type = "radio";
    o1r2.id = "o1r2";
    div2.appendChild(o1r2);

    var l1r2 = document.createElement("label");
    var textolabel1r2 = document.createTextNode("Shooter");
    l1r2.htmlFor = "o1r2";
    l1r2.appendChild(textolabel1r2);
    div2.appendChild(l1r2);

    var br5 = document.createElement("br");
    div2.appendChild(br5);

    var o2r2 = document.createElement("input");
    o2r2.type = "radio";
    o2r2.id = "o2r2";
    div2.appendChild(o2r2);

    var l2r2 = document.createElement("label");
    var textolabel2r2 = document.createTextNode("Fantasia");
    l2r2.htmlFor = "o2r2";
    l2r2.appendChild(textolabel2r2);
    div2.appendChild(l2r2);

    var br6 = document.createElement("br");
    div2.appendChild(br6);

    var o3r2 = document.createElement("input");
    o3r2.type = "radio";
    o3r2.id = "o3r2";
    div2.appendChild(o3r2);

    var l3r2 = document.createElement("label");
    var textolabel3r2 = document.createTextNode("Aventura");
    l3r2.htmlFor = "o4r1";
    l3r2.appendChild(textolabel3r2);
    div2.appendChild(l3r2);

    var br7 = document.createElement("br");
    div2.appendChild(br7);

    var o4r2 = document.createElement("input");
    o4r2.type = "radio";
    o4r2.id = "o4r2";
    div2.appendChild(o4r2);

    var l4r2 = document.createElement("label");
    var textolabel4r2 = document.createTextNode("Miedo");
    l4r2.htmlFor = "o4r2";
    l4r2.appendChild(textolabel4r2);
    div2.appendChild(l4r2);

    var br8 = document.createElement("br");
    div2.appendChild(br8);

    //Crear checkbox
    var div3 = document.createElement("div");
    div3.className = "checkbox";
    divc.appendChild(div3);

    var enunciadocheck = document.createElement("p");
    enunciadocheck.id = "enunciadocheck";
    var textocheck = document.createTextNode("¿Ha utilizado alguna vez estas consolas? ");
    enunciadocheck.appendChild(textocheck);
    div3.appendChild(enunciadocheck);

    var l1c1 = document.createElement("label");
    var textolabelc1 = document.createTextNode("PS5");
    var c1 = document.createElement("input");
    c1.type = "checkbox";
    c1.id = "c1";
    l1c1.appendChild(c1);
    l1c1.appendChild(textolabelc1);
    div3.appendChild(l1c1);

    var br9 = document.createElement("br");
    div3.appendChild(br9);

    var l1c2 = document.createElement("label");
    var textolabelc2 = document.createTextNode("Xbox");
    var c2 = document.createElement("input");
    c2.type = "checkbox";
    c2.id = "c2";
    l1c2.appendChild(c2);
    l1c2.appendChild(textolabelc2);
    div3.appendChild(l1c2);

    var br10 = document.createElement("br");
    div3.appendChild(br10);

    var l1c3 = document.createElement("label");
    var textolabelc3 = document.createTextNode("Nintendo Switch");
    var c3 = document.createElement("input");
    c3.type = "checkbox";
    c3.id = "c3";
    l1c3.appendChild(c3);
    l1c3.appendChild(textolabelc3);
    div3.appendChild(l1c3);

    var br11 = document.createElement("br");
    div3.appendChild(br11);

    var l1c4 = document.createElement("label");
    var textolabelc4 = document.createTextNode("PC");
    var c4 = document.createElement("input");
    c4.type = "checkbox";
    c4.id = "c4";
    l1c4.appendChild(c4);
    l1c4.appendChild(textolabelc4);
    div3.appendChild(l1c4);

    var br12 = document.createElement("br");
    div3.appendChild(br12);

    var l1c5 = document.createElement("label");
    var textolabelc5 = document.createTextNode("Ninguna de las anteriores");
    var c5 = document.createElement("input");
    c5.type = "checkbox";
    c5.id = "c5";
    l1c5.appendChild(c5);
    l1c5.appendChild(textolabelc5);
    div3.appendChild(l1c5);

    var br13 = document.createElement("br");
    div3.appendChild(br13);

    //Select
    var div5 = document.createElement("div");
    div5.className = "Select";
    divc.appendChild(div5);

    var enunciadoselect = document.createElement("p");
    enunciadoselect.id = "enunciado select";
    var textoselect = document.createTextNode("¿Como prefiere los juegos? ");
    enunciadoselect.appendChild(textoselect);
    div5.appendChild(enunciadoselect);

    var s1 = document.createElement("select");
    s1.name = "select";
    div5.appendChild(s1);

    var o1 = document.createElement("option");
    o1.value = "Valor 1";
    o1.selected = true;
    var t1o1 = document.createTextNode("Fisico");
    o1.appendChild(t1o1);
    s1.appendChild(o1);

    var o2 = document.createElement("option");
    o2.value = "Valor 2";
    var t1o2 = document.createTextNode("Digital");
    o2.appendChild(t1o2);
    s1.appendChild(o2);


    //Text area
    var div6 = document.createElement("div");
    div6.className = "TextArea";
    divc2.appendChild(div6);

    var enunciadoarea = document.createElement("p");
    enunciadoarea.id = "enunciadoarea";
    var textoarea = document.createTextNode("Otros datos de interés: ");
    enunciadoarea.appendChild(textoarea);
    div6.appendChild(enunciadoarea);

    var textarea = document.createElement("textarea");
    textarea.id = "textarea";
    textarea.name = "textarea";
    textarea.rows = "5";
    textarea.cols = "50";
    div6.appendChild(textarea);

    var submit=document.createElement("input");
    submit.type="submit";
    submit.value="Enviar";
    divc2.appendChild(submit);

    //Imagenes
    var div4 = document.createElement("div");
    div4.className = "imagenes";
    divf.appendChild(div4);

    var im1 = document.createElement("img");
    im1.src = "img/videojuegos.png";
    im1.id="im1";
    div4.appendChild(im1);

    var im2 = document.createElement("img");
    im2.src = "img/videojuegos2.jpg";
    im2.id="im2";
    div4.appendChild(im2);

    

    





}