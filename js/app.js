<<<<<<< gh-pages

=======
window.onload = function () {
	var textArea= document.getElementById("textArea");
	var boton = document.getElementById("boton");
	var contador =document.getElementById("contador");
	contador.innerHTML = 140;
	contador.classList.add("cuadro2");
	boton.disabled = true ;

	boton.addEventListener("click", function(e) {
		e.preventDefault();
	    var area = textArea.value;
	    var demo = document.getElementById("demo");
	   	var msj = document.createElement("div");
	   	msj.innerHTML = area;
	   	msj.classList.add("cuadro");
	   	msj.classList.add("col-7");
	   	demo.insertBefore(msj, demo.childNodes[0]);
	   	
	   	textArea.value= "";
	   	contador.innerHTML = 140;

	   	var fechaHora = new Date();
		var horas = fechaHora.getHours();
		var minutos = fechaHora.getMinutes();
		var segundos = fechaHora.getSeconds();
		var reloj = document.createElement("div");
		if(horas < 10) { 
			horas = '0' + horas; }
  		if(minutos < 10) { 
  			minutos = '0' + minutos; }
  		if(segundos < 10) { 
  			segundos = '0' + segundos; }
		reloj.innerHTML = horas+':'+minutos+':'+segundos;
		reloj.classList.add("col-4");
		reloj.classList.add("cuadro3");
	   	demo.insertBefore(reloj, demo.childNodes[1]);

	});

	textArea.addEventListener("keydown",function() {
		boton.disabled = false;
			if (textArea.value.length>=140){
				contador.style.color = "red";
				boton.disabled = true;
				contador.innerHTML = 140 - textArea.value.length; 
			} 
			else if (textArea.value.length>=130){
				contador.style.color = "blue";
				contador.innerHTML = 140 - textArea.value.length; 
			}
			else if (textArea.value.length>=120){
				contador.style.color = "purple";
				contador.innerHTML = 140 - textArea.value.length; 
			}
			else if (textArea.value.length>=110){
				contador.style.color = "black";
				contador.innerHTML = 140 - textArea.value.length; 
			}
			else{
				contador.innerHTML= 140 - textArea.value.length;	
			}
			//Inhabilita el boton en espacios vacios 
			if( textArea.value == null || textArea.value.length == 0 || /^\s+$/.test(textArea.value) ) {
 				boton.disabled = true;
				} 
	});

		textArea.addEventListener("keydown", autosize);        
		function autosize(){
		 	 var el = this; 
		 	el.style.cssText = "padding:1; height:auto";
		 	el.style.cssText = "height:" + el.scrollHeight + "px";
   		};
    }
/*
ar textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);
             
function autosize(){
  var el = this;
    // for box-sizing other than "content-box" use:
    // el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'padding:0; height:' + el.scrollHeight + 'px';
}

textArea.addEventListener("scroll", function(){
		//textArea.setAttribute("rows","textArea.scrollHeight");
		textArea.style.height = textArea.scrollHeight + "px";
	});

textArea.addEventListener("change", function(){
		//textArea.setAttribute("rows","textArea.scrollHeight");
		textArea.style.height = 2;
	});


window.onload = function () {
	var boton = document.getElementById("boton");
	boton.addEventListener("click", function(e) {
		
		e.preventDefault();
		var textArea= document.getElementById("textArea")
	    var area = textArea.value;
	    agregarMensaje(textArea.value);
	   	textArea.value= "";
	   	 function agregarMensaje(textArea){
	   	 	var msj = document.createElement("div");
	   		msj.innerHTML = area;
	   		var demo = document.getElementById("demo");
	   		msj.classList.add("cuadro");
	   		demo.insertBefore(msj, demo.childNodes[0])

	   		var contador = document.createElement("div");
		   	contador.innerHTML= area.length;
		   	contador.classList.add("cuadro2");
		   	demo.insertBefore(contador, msj);
	   	 }
	});
}

*/

/*
>>>>>>> local
window.onload = function () {
	var boton = document.getElementById("boton");
	boton.addEventListener("click", function() {
	    var area = document.getElementById("textArea").value;
	    var demo = document.getElementById("demo")
	   	var msj = document.createElement("div");
	   	msj.innerHTML = area;
	   	msj.classList.add("cuadro");
	   	demo.insertBefore(msj, demo.childNodes[0])
	   	var contador = document.createElement("div");
	   	contador.innerHTML= area.length;
	   	contador.classList.add("cuadro2");
	   	demo.insertBefore(contador, msj);
	});
}


/*window.onload = function () {
	var boton = document.getElementById("boton");
	boton.addEventListener("click", function() {
    var area = document.getElementById("textArea").value;
    var demo = document.getElementById("demo")
   	var msj = document.createElement("div");
   	msj.innerHTML = area;
   	demo.appendChild(msj);
   	demo.insertBefore(msj, demo.childNodes[0])
});
}
*/


/*window.onload = function () {
	var boton = document.getElementById("boton");
	boton.addEventListener("click", function() {
    var area = document.getElementById("textArea").value;
    document.getElementById("demo").innerHTML = area;
});
}*/