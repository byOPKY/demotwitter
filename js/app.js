
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