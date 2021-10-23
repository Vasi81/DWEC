function cargar() {
  //Imagen logo
  //Creación del nodo elemento "img"
  var im2 = document.createElement("img");
  im2.src = "/img/pngeggt.png"; //se le ñade el atributo src
  im2.className = "im2";
  document.body.appendChild(im2);
  //Creación del nodo elemento h1 con el nodo texto "Pidenos Presupuesto"
  var h1 = document.createElement("h1");
  h1.className = "titulo";
  var contenido_h1 = document.createTextNode("Pidenos Presupuesto");
  h1.appendChild(contenido_h1);
  document.body.appendChild(h1);

  //Imagen
  var im = document.createElement("img");
  im.src = "/img/pngegg.png";
  im.className = "im1";
  document.body.appendChild(im);
  //Creación del nodo elemento div con class="contacto"
  var div2 = document.createElement("div");
  div2.className = "contacto";
  document.body.appendChild(div2);
  //Creación otro nodo elemento div con class="contact-form"
  var div2_1 = document.createElement("div");
  div2_1.className = "contact-form";
  div2.appendChild(div2_1); //se añade como hijo del div anterior

  //Creación del nodo elemento h3 con nodo texto "Introduce tus datos.."
  var h3 = document.createElement("h3");
  var contenido_h3 = document.createTextNode(
    "Introduce tus datos para un presupuesto sin compromiso"
  );

  h3.appendChild(contenido_h3);
  div2_1.appendChild(h3);
  document.body.appendChild(div2_1);

  //Creación de los nodos elementos del formulario
  var form = document.createElement("form");
  //Creación del nodo elemento "p", "label" y "input" para el campo nombre
  var p1 = document.createElement("p");
  form.appendChild(p1);
  var label_n = document.createElement("label");
  var cont_label = document.createTextNode("Nombre ");
  label_n.appendChild(cont_label);
  var input1 = document.createElement("input");
  input1.id = "Nombre";
  p1.appendChild(label_n);
  p1.appendChild(input1);
  div2_1.appendChild(form);
  document.body.appendChild(form);

  //Creación del nodo elemento "p", "label" y "input" para el campo apellidos
  var p2 = document.createElement("p");
  form.appendChild(p2);
  var label_a = document.createElement("label");
  var cont_label_a = document.createTextNode("Apellidos ");
  label_a.appendChild(cont_label_a);
  var input2 = document.createElement("input");
  input2.id = "Apellidos";
  p2.appendChild(label_a);
  p2.appendChild(input2);
  form.appendChild(p2);

  //Creación del nodo elemento "p", "label" y "input" para el campo DNI
  var p3 = document.createElement("p");
  form.appendChild(p3);
  var label_dni = document.createElement("label");
  var cont_label_dni = document.createTextNode("DNI ");
  label_dni.appendChild(cont_label_dni);
  var input3 = document.createElement("input");
  input3.id = "dni";
  p3.appendChild(label_dni);
  p3.appendChild(input3);
  form.appendChild(p3);

  //Creación del nodo elemento "p", "label" e "input" para el campo Dirección
  var p4 = document.createElement("p");
  form.appendChild(p4);
  var label_dir = document.createElement("label");
  var cont_label_dir = document.createTextNode("Dirección ");
  label_dir.appendChild(cont_label_dir);
  var input4 = document.createElement("input");
  input4.id = "direccion";
  p4.appendChild(label_dir);
  p4.appendChild(input4);
  form.appendChild(p4);

  //Creación de los nodos del Select
  var p5 = document.createElement("p");
  form.appendChild(p5);
  var label_tipo = document.createElement("label");
  var cont_label_tipo = document.createTextNode("Ciudad ");
  label_tipo.appendChild(cont_label_tipo);
  var sel = document.createElement("select");
  var op1 = document.createElement("option");
  var op2 = document.createElement("option");
  var op3 = document.createElement("option");
  var op4 = document.createElement("option");
  var op5 = document.createElement("option");
  var cont_op1 = document.createTextNode("Alicante");
  var cont_op2 = document.createTextNode("Barcelona");
  var cont_op3 = document.createTextNode("Madrid");
  var cont_op4 = document.createTextNode("Valencia");
  var cont_op5 = document.createTextNode("Vitoria");
  op1.appendChild(cont_op1);
  op2.appendChild(cont_op2);
  op3.appendChild(cont_op3);
  op4.appendChild(cont_op4);
  op5.appendChild(cont_op5);

  p5.appendChild(label_tipo);
  label_tipo.appendChild(sel);
  sel.appendChild(op1);
  sel.appendChild(op2);
  sel.appendChild(op3);
  sel.appendChild(op4);
  sel.appendChild(op5);
  form.appendChild(p5);

  //Radio button
  var h3 = document.createElement("h3"); //creación del nodo elemento h3 con el nodo texto "Elige modalidad de reparación"
  var contenido_h3 = document.createTextNode("Elige modalidad de reparación");
  h3.appendChild(contenido_h3);
  form.appendChild(h3);
  var r1 = document.createElement("input");
  r1.type = "radio";
  r1.name = "servicio";
  var r2 = document.createElement("input");
  r2.type = "radio";
  r2.name = "servicio";
  var r3 = document.createElement("input");
  r3.type = "radio";
  r3.name = "servicio";
  var r4 = document.createElement("input");
  r4.type = "radio";
  r4.name = "servicio";
  var label_r1 = document.createElement("label");
  var cont_label_r1 = document.createTextNode(" Reparación en tienda  ");
  var label_r2 = document.createElement("label");
  var cont_label_r2 = document.createTextNode(" Reparación a domicilio  ");
  var label_r3 = document.createElement("label");
  var cont_label_r3 = document.createTextNode(" Asistencia online  ");
  var label_r4 = document.createElement("label");
  var cont_label_r4 = document.createTextNode(" Recogida y envío  ");

  //Añadir los nodos texto a los elementos padre "label"
  label_r1.appendChild(cont_label_r1);
  label_r2.appendChild(cont_label_r2);
  label_r3.appendChild(cont_label_r3);
  label_r4.appendChild(cont_label_r4);

  //Los nodos elementos "input" y "label" son hijos del nodo elemento padre "form"
  form.appendChild(r1);
  form.appendChild(label_r1);
  form.appendChild(r2);
  form.appendChild(label_r2);
  form.appendChild(r3);
  form.appendChild(label_r3);
  form.appendChild(r4);
  form.appendChild(label_r4);

  //Radio button
  var h3 = document.createElement("h3"); //creación del nodo elemento h3 con el nodo texto "Marca una opción si deseas financiar el pago (válido para importes mayores de 500 €)"
  var contenido_h3 = document.createTextNode(
    "Marca una opción si deseas financiar el pago (solamente para importes mayores de 500 €)"
  );
  h3.appendChild(contenido_h3);
  form.appendChild(h3);
  var ra1 = document.createElement("input");
  ra1.type = "radio";
  ra1.name = "finance";
  var ra2 = document.createElement("input");
  ra2.type = "radio";
  ra2.name = "finance";
  var ra3 = document.createElement("input");
  ra3.type = "radio";
  ra3.name = "finance";
  var ra4 = document.createElement("input");
  ra4.type = "radio";
  ra4.name = "finance";
  var label_ra1 = document.createElement("label");
  var cont_label_ra1 = document.createTextNode(" Financiar a 2 meses ");
  var label_ra2 = document.createElement("label");
  var cont_label_ra2 = document.createTextNode(" Financiar a 3 meses ");
  var label_ra3 = document.createElement("label");
  var cont_label_ra3 = document.createTextNode(" Financiar a 4 meses  ");
  var label_ra4 = document.createElement("label");
  var cont_label_ra4 = document.createTextNode(" Financiar a 5 meses  ");

  //Añadir los nodos texto a los elementos padre "label"
  label_ra1.appendChild(cont_label_ra1);
  label_ra2.appendChild(cont_label_ra2);
  label_ra3.appendChild(cont_label_ra3);
  label_ra4.appendChild(cont_label_ra4);

  //Los nodos elementos "input" y "label" son hijos del nodo elemento padre "form"
  form.appendChild(ra1);
  form.appendChild(label_ra1);
  form.appendChild(ra2);
  form.appendChild(label_ra2);
  form.appendChild(ra3);
  form.appendChild(label_ra3);
  form.appendChild(ra4);
  form.appendChild(label_ra4);

  //Checkbox
  var h3 = document.createElement("h3"); //creación del nodo elemento h3 con el nodo texto "Elige tipo de dispositivo a reparar"
  var contenido_h3 = document.createTextNode(
    "Elige tipo de dispositivo a reparar"
  );
  h3.appendChild(contenido_h3);
  form.appendChild(h3);

  var c1 = document.createElement("input");
  c1.type = "checkbox";
  c1.name = "port";
  c1.id = "port";
  var c2 = document.createElement("input");
  c2.type = "checkbox";
  c2.name = "sm";
  c2.id = "sm";
  var c3 = document.createElement("input");
  c3.type = "checkbox";
  c3.name = "movil";
  c3.id = "movil";
  var c4 = document.createElement("input");
  c4.type = "checkbox";
  c4.name = "tablet";
  c4.id = "tablet";
  var c5 = document.createElement("input");
  c5.type = "checkbox";
  c5.name = "otros";
  c5.id = "otros";
  var label_c1 = document.createElement("label");
  var cont_label_c1 = document.createTextNode(" Portátil ");
  var label_c2 = document.createElement("label");
  var cont_label_c2 = document.createTextNode(" Sobremesa ");
  var label_c3 = document.createElement("label");
  var cont_label_c3 = document.createTextNode(" Móvil ");
  var label_c4 = document.createElement("label");
  var cont_label_c4 = document.createTextNode(" Tablet ");
  var label_c5 = document.createElement("label");
  var cont_label_c5 = document.createTextNode(" Otros ");

  //Añadir los nodos texto a los elementos padre "label"
  label_c1.appendChild(cont_label_c1);
  label_c2.appendChild(cont_label_c2);
  label_c3.appendChild(cont_label_c3);
  label_c4.appendChild(cont_label_c4);
  label_c5.appendChild(cont_label_c5);

  //Añadir los nodos elementos "input" y "label" al nodo padre "form"
  form.appendChild(c1);
  form.appendChild(label_c1);
  form.appendChild(c2);
  form.appendChild(label_c2);
  form.appendChild(c3);
  form.appendChild(label_c3);
  form.appendChild(c4);
  form.appendChild(label_c4);
  form.appendChild(c5);
  form.appendChild(label_c5);

  //Textarea
  var parf = document.createElement("p");
  parf.className = "block";
  var h3 = document.createElement("label");
  var contenido_h3 = document.createTextNode("Descripción de la avería"); //creación del nodo elemento h3 con el nodo texto "Descripción de la avería"
  h3.appendChild(contenido_h3);
  parf.appendChild(h3);
  form.appendChild(parf);

  var ta = document.createElement("textarea");
  ta.name = "desc";
  ta.id = "desc";
  ta.rows = "7";
  ta.cols = "50";
  ta.placeholder = "Describenos brevemente la avería";
  parf.appendChild(ta);
  form.appendChild(ta);

  //Submit
  var p = document.createElement("p");
  p.className = "block";

  var subm = document.createElement("button");
  var subm_text = document.createTextNode("Enviar");
  subm.appendChild(subm_text);
  subm.className = "submit";
  subm.type = "submit";
  subm.value = "Enviar";
  p.appendChild(subm);
  form.appendChild(p);
  form.appendChild(subm);

  document.body.appendChild(form); //fin del formulario

  //Contenedor en la parte abajo

  var div3 = document.createElement("div");
  div3.className = "contacto-info";
  document.body.appendChild(div3);

  var h4 = document.createElement("h4");
  var contenido_h4 = document.createTextNode("Más información");
  h4.appendChild(contenido_h4);
  div3.appendChild(h4);

  //Nodos lista desordenada
  var ulist = document.createElement("ul");
  var list1 = document.createElement("li");
  var list2 = document.createElement("li");
  var list3 = document.createElement("li");
  
  var list1_text = document.createTextNode("Calle Arganda 48, 28045 Madrid");
  var list2_text = document.createTextNode("91 485 569");
  var list3_text = document.createTextNode("contacto@todocomputer.com");
  list1.appendChild(list1_text);
  list2.appendChild(list2_text);
  list3.appendChild(list3_text);
  ulist.appendChild(list1);
  ulist.appendChild(list2);
  ulist.appendChild(list3);
  div3.appendChild(ulist);

  var par_inf = document.createElement("p");
  var cont_par = document.createTextNode(
    "Solicita presupuesto gratuito para reparar ordenadores Apple, Windows y móviles! Puedes visitar nuestra tienda de reparación de ordenadores en Madrid",
    "te atenderá un técnico especializado para valorar el estado de tu PC, Mac, iPhone o móvil Android. Si lo prefieres puedes contactarnos mediante formulario o por teléfono."
  );
  par_inf.appendChild(cont_par);
  div3.appendChild(par_inf);

  //Copyright
  var par_copy = document.createElement("p");
  var cont_par_copy = document.createTextNode("@Copyright 2021 | Todocomputer");
  par_copy.appendChild(cont_par_copy);
  div3.appendChild(par_copy);
}
