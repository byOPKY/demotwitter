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
	   	demo.insertBefore(msj, demo.childNodes[0]);
	   	
	   	textArea.value= "";
	   	contador.innerHTML = 140;
	});

	textArea.addEventListener("keydown",function() {
		boton.disabled = false;
			if (textArea.value.length>=140){
				contador.style.color = "red";
				contador.innerHTML = 140 - textArea.value.length; 
			}
			else{
				contador.innerHTML= 140 - textArea.value.length;	
			}
			if(textArea.value.length==0){
				boton.disabled = true;
			}

	});	

}

/*
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
window.onload = function () {
	var boton = document.getElementById("boton");
	boton.addEventListener("click", function(e) {
		
		e.preventDefault();
		var textArea= document.getElementById("textArea")
	    var area = textArea.value;
	    var demo = document.getElementById("demo");
	   	var msj = document.createElement("div");
	   	msj.innerHTML = area;
	   	msj.classList.add("cuadro");
	   	demo.insertBefore(msj, demo.childNodes[0])
	   	
	   	textArea.value= ""

	   	var contador = document.createElement("div");
	   	contador.innerHTML= area.length;
	   	contador.classList.add("cuadro2");
	   	demo.insertBefore(contador, msj);
	});
}
*/
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