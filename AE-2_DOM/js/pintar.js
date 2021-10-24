//Variable global desde la que generamos el formulario.
formulario=document.createElement("form");

  /**
   * Funcion pintarDom() : Función principal para llamar
   * al resto de funciones para ir construyendo el formulario.
   * El estilo se aplica con el fichero css.
   */
  function pintarDOM(){
    //div es el contenedor princiap y único dentro del html.
    //el formulario serña actualizado en cada una de las funciones , para luego ser incluido en 
    //el div principal del HTML.
    let  div = document.getElementById("container")
    formulario.setAttribute("name", "formulario");
    formulario.setAttribute("method", "post");
    formulario.setAttribute("action", "urlImaginaria");

    cargarTextBox();
    cargarImagenes();
    cargarSelect();
    cargarOptions();
    cargarOptionsElectricos();
    cargarChecks();
   
    cargarTextAreas();
    

    //Por último , definimos el botón de envio de los datos.
    var btnenvio = document.createElement("input");
    btnenvio.setAttribute("type", "submit");
    btnenvio.setAttribute("name", "envioform");
    btnenvio.setAttribute("id", "envioform");
    btnenvio.setAttribute("value", "enviar");

    //Incluimos botón en el formulario y el formulario en el objeto div principal.
    formulario.appendChild(btnenvio);
    div.appendChild(formulario);

  }
  /**
   *  cargarImagenes() : Función para incluir las imágenes en el formulario.
   */
  function cargarImagenes() {
    
    let  div = document.getElementById("container")
    //Creamos un Div local
    let divlocal=document.createElement("div");
    divlocal.className="imagen";
    

    //Incluimos h1
    let h=document.createElement("h1");
    texto = document.createTextNode("Imagen");
    h.appendChild(texto);
    divlocal.appendChild(h);

    var imagen = document.createElement("input");
    imagen.setAttribute("name", "imagenActividad");
    imagen.setAttribute("type", "image");
    imagen.setAttribute("alt", "Imagenes");
    imagen.setAttribute("id", "image");
    imagen.setAttribute("src", "/img/city_gardient.jpg");
   

    divlocal.appendChild(imagen)


    var imagen2 = document.createElement("input");
    imagen2.setAttribute("name", "imagenActividad");
    imagen2.setAttribute("type", "image");
    imagen2.setAttribute("alt", "Imagenes");
    imagen2.setAttribute("id", "image");
    imagen2.setAttribute("src", "/img/slide-home.jpg");
    

    divlocal.appendChild(imagen2)

      //Incluimos en el Div local en formulario
      formulario.appendChild(divlocal);
      div.appendChild(formulario);
      //div.appendChild(divlocal);
  }
  /**
   *  cargarTextBox() : Función para incluir las cajas de texto en el formulario.
   */
  function cargarTextBox() {
  
    let  div = document.getElementById("container")


    let divlocal=document.createElement("div");
    divlocal.className="dpersonales";

    //Incluimos h1
    let h=document.createElement("h1");
    texto = document.createTextNode("Datos personales");
    h.appendChild(texto);
    divlocal.appendChild(h);

      var textbox = document.createElement("input");
      textbox.setAttribute("type", "text");
      textbox.setAttribute("name", "dni");
      textbox.setAttribute("id", "dni");
      textbox.setAttribute("placeholder", "introduzca DNI");

      divlocal.appendChild(textbox)
      divlocal.appendChild(document.createElement("br"))


      var textbox = document.createElement("input");
      textbox.setAttribute("type", "text");
      textbox.setAttribute("name", "nombre");
      textbox.setAttribute("id", "nombre");
      textbox.setAttribute("placeholder", "Nombre y Apellidos");
      divlocal.appendChild(textbox)
      divlocal.appendChild(document.createElement("br"))


      var textbox = document.createElement("input");
      textbox.setAttribute("type", "text");
      textbox.setAttribute("name", "direccion");
      textbox.setAttribute("id", "direccion");
      textbox.setAttribute("placeholder", "Dirección");
      divlocal.appendChild(textbox);
      divlocal.appendChild(document.createElement("br"))


      var textbox = document.createElement("input");
      textbox.setAttribute("type", "phone");
      textbox.setAttribute("name", "telefono");
      textbox.setAttribute("id", "telefono");
      textbox.setAttribute("placeholder", "Teléfono");
      divlocal.appendChild(textbox);

      //Incluimos en el Div local en formulario
      formulario.appendChild(divlocal);
      div.appendChild(formulario);
      //div.appendChild(divlocal);

  }
  /**
   *  cargarOptions() : Función para incluir los distintos options en el formulario.
   */
  function cargarOptions() {
   
    let  div = document.getElementById("container")
    //Creamos un Div local
    let divlocal=document.createElement("div");
    divlocal.className="selectcarpinteria";

    let h=document.createElement("h1");
    texto = document.createTextNode("Opciones Carpintería");
    h.appendChild(texto);
    divlocal.appendChild(h);

    let hpuerta=document.createElement("h2");
    hpuerta.appendChild(document.createTextNode("Puerta blindada"));
    divlocal.appendChild(hpuerta);

    var opntionbox = document.createElement("input");
    opntionbox.setAttribute("type", "radio");
    opntionbox.setAttribute("name", "motor");
    opntionbox.setAttribute("id", "optmotor");    
    opntionbox.setAttribute("value", "PB");
    divlocal.appendChild(opntionbox)
    divlocal.appendChild(document.createElement("br"))

    let hdiesel=document.createElement("h2");
    hdiesel.appendChild(document.createTextNode("Armarios Modulares"));
    divlocal.appendChild(hdiesel);

    var opntionbox = document.createElement("input");
    opntionbox.setAttribute("type", "radio");
    opntionbox.setAttribute("name", "motor");
    opntionbox.setAttribute("id", "optmotor");    
    opntionbox.setAttribute("value", "AM");
    divlocal.appendChild(opntionbox)
    divlocal.appendChild(document.createElement("br"))

    let hgasolina=document.createElement("h2");
    hgasolina.appendChild(document.createTextNode("Armarios Modulares Empotrados"));
    divlocal.appendChild(hgasolina);

    var opntionbox = document.createElement("input");
    opntionbox.setAttribute("type", "radio");
    opntionbox.setAttribute("name", "motor");
    opntionbox.setAttribute("id", "optmotor");    
    opntionbox.setAttribute("value", "AME");
    divlocal.appendChild(opntionbox)
    divlocal.appendChild(document.createElement("br"))
    

    let hcorrederas=document.createElement("h2");
    hcorrederas.appendChild(document.createTextNode("Puertas abatibles o correderas"));
    divlocal.appendChild(hcorrederas);

    var opntionbox = document.createElement("input");
    opntionbox.setAttribute("type", "radio");
    opntionbox.setAttribute("name", "motor");
    opntionbox.setAttribute("id", "optmotor");    
    opntionbox.setAttribute("value", "AME");
    divlocal.appendChild(opntionbox)
    divlocal.appendChild(document.createElement("br"))
    

      //Incluimos en el Div local en formulario
      formulario.appendChild(divlocal);
      div.appendChild(formulario);
      //div.appendChild(divlocal);

  }

  function cargarOptionsElectricos() {
   
    let  div = document.getElementById("container")
    //Creamos un Div local
    let divlocal=document.createElement("div");
    divlocal.className="selectcocina";

    let h=document.createElement("h1");
    texto = document.createTextNode("Opciones Cocina");
    h.appendChild(texto);
    divlocal.appendChild(h);

   

    let helectrico=document.createElement("h2");
    helectrico.appendChild(document.createTextNode("Campana Extra plana"));
    divlocal.appendChild(helectrico);
    
    var opntionbox = document.createElement("input");
    opntionbox.setAttribute("type", "radio");
    opntionbox.setAttribute("name", "motorE");
    opntionbox.setAttribute("id", "optelectrico");    
    opntionbox.setAttribute("value", "C");   
    divlocal.appendChild(opntionbox)
    divlocal.appendChild(document.createElement("br"))

    let hhidrogeno=document.createElement("h2");
    hhidrogeno.appendChild(document.createTextNode("Horno elétrico"));
    divlocal.appendChild(hhidrogeno);
    
    var opntionbox = document.createElement("input");
    opntionbox.setAttribute("type", "radio");
    opntionbox.setAttribute("name", "motorE");
    opntionbox.setAttribute("id", "optelectrico");    
    opntionbox.setAttribute("value", "H");   

    divlocal.appendChild(opntionbox)
    divlocal.appendChild(document.createElement("br"))


    let hmicroondas=document.createElement("h2");
    hmicroondas.appendChild(document.createTextNode("Microondas de acero"));
    divlocal.appendChild(hmicroondas);
    
    var opntionbox = document.createElement("input");
    opntionbox.setAttribute("type", "radio");
    opntionbox.setAttribute("name", "motorE");
    opntionbox.setAttribute("id", "optmicroondas");    
    opntionbox.setAttribute("value", "M");  
    divlocal.appendChild(opntionbox)
    divlocal.appendChild(document.createElement("br"))

    let hinduccion=document.createElement("h2");
    hinduccion.appendChild(document.createTextNode("Placa de inducción"));
    divlocal.appendChild(hinduccion);
    
    var opntionbox = document.createElement("input");
    opntionbox.setAttribute("type", "radio");
    opntionbox.setAttribute("name", "motorE");
    opntionbox.setAttribute("id", "optmicroondas");    
    opntionbox.setAttribute("value", "P");  
    divlocal.appendChild(opntionbox)

    divlocal.appendChild(document.createElement("br"))




    
      //Incluimos en el Div local en formulario
      formulario.appendChild(divlocal);
      div.appendChild(formulario);
      //div.appendChild(divlocal);

  }


  /**
   *  cargarChecks() : Función para incluir los distintos Ckecks en el formulario.
   */
  function cargarChecks() {
   
    let  div = document.getElementById("container")
    //Creamos un Div local
    let divlocal=document.createElement("div");
    divlocal.className="otros";


    //Incluimos h1
    let h=document.createElement("h1");
    texto = document.createTextNode("Zonas Comunes");
    h.appendChild(texto);
    divlocal.appendChild(h);

    //Checkbox 1
    let haire=document.createElement("h2");
    haire.appendChild(document.createTextNode("Piscina"));
    divlocal.appendChild(haire);

    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");  
    checkbox.setAttribute("name", "checkbox");      
    checkbox.setAttribute("value", "AA");   
    divlocal.appendChild(checkbox)
    divlocal.appendChild(document.createElement("br"))

    //Checkbox 1
    let htintados=document.createElement("h2");
    htintados.appendChild(document.createTextNode("Pista padel"));
    divlocal.appendChild(htintados);

    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");  
    checkbox.setAttribute("name", "checkbox");      
    checkbox.setAttribute("value", "CT"); 
    divlocal.appendChild(checkbox)
    divlocal.appendChild(document.createElement("br"))


    //Checkbox 3
    let hchk3=document.createElement("h2");
    hchk3.appendChild(document.createTextNode("Gimnasio"));
    divlocal.appendChild(hchk3);

    var checkbox= document.createElement("input");
    checkbox.setAttribute("type", "checkbox");  
    checkbox.setAttribute("name", "checkbox");      
    checkbox.setAttribute("value", "AA"); 
    divlocal.appendChild(checkbox)
    divlocal.appendChild(document.createElement("br"))    

    //Checkbox 4
    let hchk4=document.createElement("h2");
    hchk4.appendChild(document.createTextNode("Zona infantil"));
    divlocal.appendChild(hchk4);

    var checkbox= document.createElement("input");
    checkbox.setAttribute("type", "checkbox");  
    checkbox.setAttribute("name", "checkbox");      
    checkbox.setAttribute("value", "AA"); 
    divlocal.appendChild(checkbox)
    divlocal.appendChild(document.createElement("br")) 

    //Checkbox 5
    let hchk5=document.createElement("h2");
    hchk5.appendChild(document.createTextNode("Local Social"));
    divlocal.appendChild(hchk5);

    var checkbox= document.createElement("input");
    checkbox.setAttribute("type", "checkbox");  
    checkbox.setAttribute("name", "checkbox");      
    checkbox.setAttribute("value", "AA"); 
    divlocal.appendChild(checkbox)
    divlocal.appendChild(document.createElement("br")) 
      //Incluimos en el Div local en formulario
      formulario.appendChild(divlocal);
      div.appendChild(formulario);
      //div.appendChild(divlocal);
    
  }

    /**
     * 3
   *  cargarSelect() : Función para incluir Select en el formulario.
   */
  function cargarSelect() {
    let h=document.createElement("h1");
    let  div = document.getElementById("container")
    //Creamos un Div local
    let divlocal=document.createElement("div");
    divlocal.className="modelos";

    //Incluimos h1
    texto = document.createTextNode("Modelo vivienda");
    h.appendChild(texto);
    divlocal.appendChild(h);    


    selectbox = document.createElement("select");
    selectbox.setAttribute("id", "select"); 
    div.appendChild(selectbox);
  
    optionselect = document.createElement("option");
    optionselect.setAttribute("value", "Apartamento"); 
    textopntion = document.createTextNode("Apartamento");
    optionselect.appendChild(textopntion);

    optionselect1 = document.createElement("option");
    optionselect1.setAttribute("value", "Duplex"); 
    textopntion = document.createTextNode("Duplex");
    optionselect1.appendChild(textopntion);


    optionselect2 = document.createElement("option");
    optionselect2.setAttribute("value", "Adosado"); 
    textopntion = document.createTextNode("Adosado");
    optionselect2.appendChild(textopntion);

    optionselect3 = document.createElement("option");
    optionselect3.setAttribute("value", "Pareado"); 
    textopntion = document.createTextNode("Pareado");
    optionselect3.appendChild(textopntion);

    

    document.getElementById("select").appendChild(optionselect);
    document.getElementById("select").appendChild(optionselect1);
    document.getElementById("select").appendChild(optionselect2);
    document.getElementById("select").appendChild(optionselect3);


    divlocal.appendChild(select)

      //Incluimos en el Div local en formulario
      formulario.appendChild(divlocal);
      div.appendChild(formulario);
      //div.appendChild(divlocal);
  
  }

    /**
   *  cargarSelect() : Función para incluir TextArea en el formulario.
   */
  function cargarTextAreas(){
    let h=document.createElement("h1");
    let  div = document.getElementById("container")
    //Creamos un Div local
    let divlocal=document.createElement("div");
    divlocal.className="otros";    

    //Incluimos h1
    texto = document.createTextNode("Observaciones");
    h.appendChild(texto);
    divlocal.appendChild(h);   

    //<textarea name="observaciones" id="observaciones"></textarea>
    selectbox = document.createElement("textarea");
    selectbox.setAttribute("id", "textArea"); 
    selectbox.setAttribute("rows", "5"); 
    selectbox.setAttribute("cols", "33"); 
    divlocal.appendChild(selectbox);
      //Incluimos en el Div local en formulario
      formulario.appendChild(divlocal);
      div.appendChild(formulario);
      //div.appendChild(divlocal);
   
  }

