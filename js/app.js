window.onload= function(){
	var boton=document.getElementById("boton");
	var area="";
	boton.addEventListener("click", function() {
		area=document.getElementById("textS").value;
		var nodo=document.createTextNode(area);
		var texto=document.createElement("p");
		texto.appendChild(nodo);
		var lista=document.getElementById("text");
		lista.insertBefore(texto,lista.childNodes[0]);
		document.getElementById("textS").value="";

	});

}
