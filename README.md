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
3. En el documento main.css hice:
  * Una funcion global window.onload
  * Cree un evento addEventListener - click, para el boton
  * Cree la variable: area; para llamar al textArea (document.getElementById) y para coger el valor le puse: .value
  * Cree la variable: demo; para llamar al ID demo  (document.getElementById)
  * Cree una variable msj con document.createElement: div
  * Use el inner.HTML con el msj para igualarlo con el valor del area 
  * Le agregue una clase "cuadro" al msj con .classList.add("")
  * Para incrustar el msj use el inserBefote() y como quiero que aparezca primero uso el child.Nodes[0] con indice 0 para que salga antes del primer hijo.
  * Cree una variable contador con createElement para crear un div
  * Iguale la cantidad de caracteres del area (area.length) con lo que se va escribir en el Html del contador (contador.inner.HTML)
  * Para incrustar la cantidad de caracteres use el demo.insetBefore(ontador, msj) siendo el demo el padre.
  
1. No ingresar texto vacio (deshabilitar el boton de enviar)
2. Contar la cantidad de caracteres de forma regresiva.
-- v0.0.2

3. Si pasa los 140 caracteres, deshabilitar el botón.
4. Si pasa los 120 caracteres, mostrar el contador con OTRO color.
5. Si pasa los 130 caracteres, mostrar el contador con OTRO color.
6. si pasa los 140 caracteres, mostrar el contador en negativo.

-- v0.0.3
-- Versión 0.0.4:
  Al presionar enter ("/n") que crezca el textarea de acuerdo al tamaño del texto.
--Versión 0.0.5: (Extra)
  Si la cantidad de caracteres ingresados (sin dar un enter), supera al tamaño del textarea por defecto, debe de agregarse una línea más para que no aparezca el scroll. (Si en caso aplica)
--Versión 0.0.6: (Extra)
 Agregar la hora en que se publicó el tweet. En el formato de 24 horas: hh:mm
