##Tener un contenedor vacio que acumule los mensajes##
1. Formulario: TextArea y Botón
2. Evento para el click el botón
3. Dentro del evento, obtener el valor del textarea
4. Darle formmato al texto del textArea
5. Agregar el texto formateado al contenedor.

##Desarrollo##
1. Cree los doocumentos: 
  * index.html
  * main.css
  * app.js
  * simplegrip.css (lo busque y lo modifique)
2. Enlace los documentos.
3. En el documento index.html:
  *
4. En el documento main.css hice:
  * una funcion global window.onload
  * cree un evento addEventListener - click, para el boton
  * cree las variables: area; para llamar al textArea (document.getElementById) y para coger el valor le puse: .value
  * cree las variable: demo; para llamar al ID demo  (document.getElementById)
  * cree una variable msj con document.createElement: div
  * use el inner.HTML con el msj para igualarlo con el valor del area 
  * le agregue una clase "cuadro" al msj con .classList.add("")
  * Para incrustar el msj use el inserBefote() y como quiero que aparezca primero uso el child.Nodes[0] con indice 0 para que salga antes del primer hijo.
  * cree una variable contador con createElement para crear un div
  * iguale la cantidad de caracteres del area (area.length) con lo que se va escribir en el Html del contador (contador.inner.HTML)
  * Para incrustar la cantidad de caracteres use el demo.insetBefore(ontador, msj) siendo el demo el padre.
